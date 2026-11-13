# Playful Style – Restyle Plan

**Status**: Plan only (not implemented)
**Date**: 2026-11-13
**Scope**: Visual restyle only. No change to behaviour, state, data, routing, or layouts (list / grid, tabs, dialogs, side menu).

Mockups (light + dark side by side for each screen) are in [`mockups/`](./mockups):

| # | File | Screen |
|---|------|--------|
| 1 | `01-list.png` | Attendance tab, list layout |
| 2 | `02-grid.png` | Attendance tab, grid layout (2 columns) |
| 3 | `03-done.png` | All children checked (counter becomes "סיום") |
| 4 | `04-day.png` | "נמצאים" tab: present / absent, bus-only child, manually-added child with delete |
| 5 | `05-menu.png` | Side menu |
| 6 | `06-copy.png` | Lists dialog (copy list) |
| 7 | `07-shared.png` | Shared-data dialog (load a list from a link) |

`mockups/mockups.html` is the source. Re-render the PNGs with `node plan/playful-style/mockups/render.cjs`. It also contains the reference token values and the exact `colorForName` function proposed below.

---

## 1. Requirements

1. **Playful look** (option 2): warm cream page, yellow rounded header, white "chunky" cards with a soft bottom shadow, coloured initial avatar per child, progress bar in the counter, green checked rows.
2. **Dark mode stays.** `ThemeService`, `theme-switch`, the `data-theme` attribute on `<html>`, the `attendance_theme` localStorage key, and the system-theme listener stay as they are. Only the colour values change, and every new colour gets a dark-mode value.
3. **Child colour comes from a hash of the child's name**, not from the child's id. The same name always gets the same colour on every device, after sorting, after a reset, and for manually added children.
4. **Everything else stays as it is today**: the tabs, list/grid toggle, sorting, day settings, school bus, counter and "finish" behaviour, copy and share dialogs, delete for manually added children, the PWA install button, the confetti/emoji animation, and every `data-testid`. The e2e suite must pass without changes.

---

## 2. Design tokens

The existing CSS variables in `src/styles/theme-styles.css` keep their names (so every `bg-primary`, `text-faded` etc. class keeps working) and get new values. A few new variables are added.

| Variable | Light | Dark | Used for |
|---|---|---|---|
| `--primary-background-color` *(existing)* | `#FFF8E7` | `#1C1830` | Page, side menu, dialog body |
| `--secondary-background-color` *(existing)* | `#FFFFFF` | `#2A2440` | Child rows, counter, menu items, buttons |
| `--accent-background-color` *(existing)* | `#FFF1C7` | `#3A3157` | Progress track, info boxes, segmented-control track |
| `--primary-text-color` *(existing)* | `#3B2F2F` | `#F5EFFF` | Main text |
| `--secondary-text-color` *(existing)* | `#E4572E` | `#FF9F80` | Past-count times |
| `--accent-text-color` *(existing)* | `#E4572E` | `#2A2000` | Active tab text (on white pill / yellow pill) |
| `--faded-text-color` *(existing)* | `#B8A99A` | `#6E6488` | Absent children, hints |
| `--bg-success-color` *(existing)* | `#E8FBF0` | `#173D2A` | Checked row, "finish" counter |
| `--invert-icon-color` *(existing)* | `0` | `1` | unchanged |
| `--success-strong-color` *new* | `#4CAF63` | `#5BC46B` | Filled check circle, "yes" button |
| `--header-background-color` *new* | `#FFD23F` | `#2E2650` | Navbar, side-menu header |
| `--tab-active-background-color` *new* | `#FFFFFF` | `#FFD23F` | Active tab pill, burger button |
| `--card-shadow-color` *new* | `#F3E3B5` | `#120F20` | `box-shadow: 0 4px 0 var(--card-shadow-color)` |
| `--check-ring-color` *new* | `#E8C9A0` | `#544A73` | Dashed unchecked circle |
| `--backdrop-color` *new* | `rgba(59,47,47,.45)` | `rgba(0,0,0,.6)` | Side menu and dialog backdrop |

Shape and typography:

- **Radius**: rows and cards `22px`, dialogs and menu `28px`, header bottom corners `26px`, chips and buttons `16–20px`.
- **"Chunky" shadow**: a solid offset `0 4px 0 var(--card-shadow-color)` replaces the current blurry `shadow` / `app-shadow`. Add it as a utility in `theme-styles.css` (for example `.playful-shadow`), and leave `app-shadow` for callers that still need it.
- **Font**: switch from *Noto Sans Hebrew* to **Rubik** (Google Fonts, full Hebrew support, rounded and friendly), at weights 500 and 700. Change the font link in `index.html` and the font-family in `src/index.css` and `src/styles/special-components.css`, keeping Noto Sans Hebrew as the fallback. *(The mockups were rendered with a fallback font because the render machine has no Rubik.)*

---

## 3. Child colour from a name hash

### New file: `src/utils/childColor.ts`

```ts
// 12 colours, all with ≥ 3:1 contrast against white bold text (large-text AA),
// and readable on both the light (#FFFFFF) and dark (#2A2440) row backgrounds.
export const CHILD_PALETTE = [
  '#E5484D', '#2F7DE1', '#8E4EC6', '#D9730D', '#0F9488', '#D6409F',
  '#2E9E4F', '#4C5FD5', '#B7791F', '#C2410C', '#0284C7', '#7C3AED',
] as const;

/** djb2 hash over Unicode code points of the trimmed, NFC-normalised name. */
export function hashName(name: string): number {
  let h = 5381;
  for (const ch of name.trim().normalize('NFC')) {
    h = ((h << 5) + h + ch.codePointAt(0)!) >>> 0;
  }
  return h;
}

export function colorForName(name: string): string {
  return CHILD_PALETTE[hashName(name) % CHILD_PALETTE.length];
}

export function initialOf(name: string): string {
  return [...name.trim()][0] ?? '';
}
```

Notes:

- The colour depends **only on the name**, never on `id`, so it is stable across sorting, resets, sharing via URL and manual additions.
- The hash is pure and synchronous, so it can be computed in `render()` with no caching, store change or service.
- With 24 children and 12 colours some children will share a colour. That is fine, because the avatar also shows the first letter. Two children with the same first letter *and* the same colour is rare and harmless.
- The palette is the same in light and dark mode: the colours are mid-tone, so white letters read on both. Absent children get the avatar in greyscale at 45% opacity, which is CSS only.
- Unit test, optional but recommended: the same name gives the same colour; leading and trailing spaces don't change it; the result is always in the palette. There is no unit-test runner today, so either add a tiny Playwright test that evaluates the function, or skip it.

---

## 4. Component-by-component changes

All changes are class and markup changes inside existing `render()` methods. No new state, actions, reducer cases or services.

### 4.1 `src/styles/theme-styles.css`
- New token values and new variables (section 2), for both `html[data-theme='light']` and `html[data-theme='dark']`.
- New utility classes inside `:host { … }`: `.bg-header`, `.bg-tab-active`, `.playful-shadow`, `.bg-success-strong`, `.check-ring` (dashed border).
- **No Tailwind build.** Use existing utilities from `tailwind-utils.css` and add anything missing as plain CSS here (per AGENTS.md).

### 4.2 `src/image/bg-image.ts`
- Keep the random background photo, which is a current feature. Raise the overlay opacity from `opacity-60` to about 88% and keep it on `bg-primary`, so the photo only tints the cream or plum background (as in the mockups). See open question Q1.

### 4.3 `src/layout/app-navbar.ts` + `src/layout/app-cockpit.ts`
- Nav: `bg-header`, bottom corners `rounded-b-[26px]` (custom CSS), and the chunky shadow instead of `shadow`.
- Tabs: the active tab becomes a **pill** (`bg-tab-active`, `rounded-full`, `px-3`, `text-accent`) instead of the 2px underline. Inactive tabs get a transparent background and no pill. Keep the `data-testid="nav_${id}"` and click handler.
- Keep the grid of 3 tabs and the same order.

### 4.4 `src/layout/side-menu-container.ts`
- Burger button: a rounded square on `bg-tab-active`. It still shows the same two icons (menu / cancel) with the same fade.
- Panel: same width (310px), same slide-in from the right, same `.side-menu` / `.open` classes (an e2e test checks `.open`). Changes: `bg-primary`, `border-radius: 28px 0 0 28px`, and the empty `h-14` spacer becomes a `bg-header` strip of the same height, matching the navbar.
- Backdrop: `--backdrop-color` instead of `bg-gray-900 opacity-70`.

### 4.5 `src/layout/side-menu-content.ts` and the menu items
(`children-display-button.ts`, `share-state-button.ts`, `theme-switch.ts`, `sorting-options.ts`, `install-pwa-button.ts`)

- Each row becomes a **white rounded card** (`bg-secondary`, radius 18px, chunky shadow) with a small pastel icon bubble on the start side, the label, and the existing control at the end.
- The existing SVG icons stay (with `app-icon` for dark-mode inversion). The pastel bubble is a fixed light tint per item, defined in CSS.
- `theme-switch` and the list/grid toggle **keep the same single-button toggle behaviour**, styled as a small two-segment pill that highlights the current state. A tap still toggles, and the `data-testid`s stay.
- Sorting options: the three buttons keep their behaviour (tapping the selected one flips the order and the label, as today) and the selected one is highlighted yellow instead of showing a check icon. They can stay stacked full-width or wrap as chips; the chips in the mockup are a visual suggestion only. Keep `data-testid="sort-…"`.
- Info text stays at the bottom, small and faded.

### 4.6 `src/components/children-count.ts`
- Card: `bg-secondary`, radius 22px, chunky shadow. Content: the "נוכחים 🎒" label, the existing `total / checked` text, and a **progress bar** underneath (`width = checked / total`, track `--accent-background-color`, fill a mint-to-green gradient).
- All-checked state: same `bg-success` and `data-testid="all-children-checked"` logic, same `check-mark-with-animation` and "סיום" text. Only the shape changes. The progress bar hides in this state, as in mockup 03.
- The click behaviour (complete the list only when all are checked) is unchanged.

### 4.7 `src/components/past-counts.ts`
- Same times, now in coral (`text-secondary`) with small coral dots between them. The current dots render with no colour, so give them `background: var(--secondary-text-color)`.

### 4.8 `src/components/app-child.ts`: the main change
Keep the button, the `onClick`, all `data-testid`s, the delete button, the bus icon and the present/absent text. Changes:

- **Row**: `bg-secondary`, radius 22px, `h-14`, chunky shadow. A checked row (attendance and bus tabs) uses `bg-success` with a green-tinted shadow.
- **Avatar** (new element, start side): a 38px circle (32px in grid) with `style="background:${colorForName(child.name)}"` and the bold white first letter. Present in every tab.
- **Check circle** (end side, attendance and bus tabs only): unchecked is a 34px dashed `--check-ring-color` ring; checked is a solid `--success-strong-color` circle containing the existing `<check-mark>` with its colour set to white. This replaces today's hard-coded `black`/`white` border (`style="border: 2px solid …"`), which ignores dark mode.
- **"נמצאים" tab**: present/absent text is shown as a pill tag (green for present; `--accent-background-color` and faded text for absent). An absent row gets faded text, a semi-transparent card, and a greyscale avatar. The bus icon stays next to the name with the same `opacity-20` rule.
- **Delete button** (manually added children, "נמצאים" tab): same position and behaviour, restyled as a coral circle with a white trash icon.
- **Grid layout**: same 2-column grid from `app-main.ts` (`grid grid-cols-2 gap-2`), with a smaller avatar and check. Long names wrap to 2 lines as today.

### 4.9 `src/ui/check-mark/check-mark.style.ts`
- `--check-color` is inlined as `#5cb85c`. Make it `var(--check-mark-color, #5cb85c)` and set `--check-mark-color: #fff` inside the green circle. `check-mark-with-animation` is unchanged.

### 4.10 `src/dialog/app-dialog.ts` and the dialogs
(`copy-list-dialog.ts`, `copy-children-list.ts`, `shared-data-dialog.ts`)

- Backdrop: `--backdrop-color`.
- Panel: `bg-primary`, radius 28px, chunky shadow, an optional emoji header (📋 copy list, 📬 shared data).
- Buttons: pill, chunky shadow. Primary actions ("העתק רשימה") are yellow, "כן" is green (`--success-strong-color`), and secondary actions ("סגור", "לא", 🔀) are white cards.
- `select` gets the same pill style. The list preview box becomes a white rounded card.
- Shared-data dialog: the hard-coded `bg-yellow-50 border-yellow-100 text-gray-700/500` box becomes `bg-accent` with token text colours, which also fixes it in dark mode.

### 4.11 Global
- `src/styles/special-components.css`: the font family.
- `src/index.css`: the font family. Leave the emoji "supersize" animation as is.
- `src/css/scroll-bar.css`: thumb `--check-ring-color`, track transparent.
- `index.html` / `public/manifest`: `theme-color` `#FFD23F` (light). Optionally add a `media="(prefers-color-scheme: dark)"` `theme-color` of `#2E2650`.

---

## 5. What explicitly does NOT change

- The store, reducer, actions, models, services and the URL/share encoding.
- The tabs, their order and labels, the list/grid toggle, sorting rules, filters and school-bus logic.
- The layout structure: the same components, the same list vs. 2-column grid, the same side-menu width and slide direction, and the same dialog triggers (`?dialog=lists`, `?data=`).
- The theme mechanics (`ThemeService`, `data-theme`, localStorage key).
- All `data-testid`s and the `.side-menu.open` class, so the e2e tests stay green.

---

## 6. Implementation order

1. **Tokens and fonts**: `theme-styles.css`, `index.html`, `index.css`, `special-components.css`. The app should already look warmer, and dark mode should already work.
2. **`childColor.ts`** plus the avatar in `app-child.ts`.
3. **Child row**: the check circle, checked state, "נמצאים" tag, absent state, delete button and grid sizing (`app-child.ts`, `check-mark.style.ts`).
4. **Counter and past counts.**
5. **Navbar and tabs.**
6. **Side menu**: the container and the content items.
7. **Dialogs.**
8. **Background overlay** and the scroll bar.
9. Check: `npm run build` and `npm run e2e`, then a manual pass in light and dark at 360px and 412px widths, in list and grid layouts, on all 3 tabs, with the menu open and both dialogs open.

Each step is independently shippable, so steps can be separate commits.

---

## 7. Risks / notes

- **Contrast**: the coral `#E4572E` on cream is about 4:1, just under the 4.5:1 that small text needs. That is fine for the bold, large tab and time text, but don't use it for small body text. White on the palette colours is at least 3:1 (bold initials only).
- **Hard-coded colours** exist today in `app-child.ts` (border black/white), `shared-data-dialog.ts` (yellow and grey Tailwind classes), `copy-children-list.ts` (`bg-black`, `text-gray-700`) and `side-menu-container.ts` (`bg-yellow-200`, `bg-gray-900`). Replace them all with tokens, or dark mode will look broken.
- **Font load**: Rubik adds about 30–40 KB. Keep `display=swap` and the Noto fallback.
- **Repeated colours**: unavoidable with 12 colours. Increasing the palette to 16 is easy if wanted.

---

## 8. Open questions

- **Q1 – background photo**: keep the random photo faintly behind the cream (planned, ~88% overlay), or drop it for a flat cream/plum background? Dropping it would leave `BackgroundImageService` unused.
- **Q2 – sort options**: keep them as full-width stacked buttons (closest to today), or use the wrapping chips shown in mockup 05?
- **Q3 – menu title**: the mockup adds a "תפריט" title in the yellow menu header. Keep it, or leave the header empty as the spacer is today?
