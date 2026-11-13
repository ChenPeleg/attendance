import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Txt } from "../translations/translations.ts";
import { SortOrder, SortType } from "../models/SortType.ts";
import { globalStore } from "../store/Store.ts";
import { ActionType } from "../models/AppAction.ts";
import checkMark from "../assets/svg/check.svg";
import { AppBaseComponent } from "../mixins/GlobalStylesheetMixin.ts";

const sortOptions = {
  [SortType.Class]: {
    [SortOrder.Ascending]: {
      label: Txt.classAscending,
    },
    [SortOrder.Descending]: {
      label: Txt.classDescending,
    },
  },
  [SortType.Name]: {
    [SortOrder.Ascending]: {
      label: Txt.nameAscending,
    },
    [SortOrder.Descending]: {
      label: Txt.nameDescending,
    },
  },

  [SortType.Gender]: {
    [SortOrder.Ascending]: {
      label: Txt.genderGirlBoys,
    },
    [SortOrder.Descending]: {
      label: Txt.genderBoysGirls,
    },
  },
};

@customElement("sorting-options")
export class SortingOptions extends AppBaseComponent(LitElement) {
  @state() private sortType: SortType = globalStore.getState().sortType;
  @state() private sortOrder: SortOrder = globalStore.getState().sortOrder;

  clickOption(sortType: SortType): void {
    globalStore.dispatch({
      type: ActionType.changeSort,
      payload: {
        sortType: sortType,
      },
    });
  }

  toggleSortOrder(): void {
    globalStore.dispatch({
      type: ActionType.changeSort,
      payload: {
        sortOrder: this.sortOrder === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending,
      },
    });
  }

  buildSortOptionsButton() {
    return (Object.keys(sortOptions) as SortType[]).map((option: SortType) => {
      const isChosen = this.sortType === option;

      const shownOption = sortOptions[option];

      const order = isChosen ? this.sortOrder : SortOrder.Ascending;

      return html`
        <button
          @click="${() => this.clickOption(option)}"
          data-testid="sort-${option}"
          class="menu-option ${isChosen ? "selected" : ""} h-11 relative flex flex-row justify-center items-center w-full cursor-pointer"
        >
          <span
            class="absolute right-0 px-3 w-8 h-9 flex-row flex justify-center items-center "
          >
            <img
              class="w-7 h-7  ${isChosen ? " " : " hidden "}"
              src="${checkMark}"
              alt="checked sort"
            />
          </span>
          <span> ${shownOption[order].label} </span>
        </button>
      `;
    });
  }

  firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(changedProperties);
    globalStore.subscribe((value) => {
      this.sortType = value.sortType;
      this.sortOrder = value.sortOrder;
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div class="w-full  flex-col flex gap-2 pt-2">
        <span class="text-faded px-1">${Txt.sortBy}</span>
        <div class="flex-col flex gap-2">${this.buildSortOptionsButton()}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sorting-options": SortingOptions;
  }
}
