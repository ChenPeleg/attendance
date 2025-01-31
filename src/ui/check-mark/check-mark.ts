import {html, LitElement, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {checkMarkStyle} from './check-mark.style.ts';


@customElement('check-mark')
export class CheckMark extends LitElement {
    static styles = unsafeCSS(`${checkMarkStyle}`)

    render() {
        return html`
            <div data-testid="check-mark" class="circleLoader">
                <div role="img" aria-label="check-mark" class="checkmark draw"></div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'check-mark': CheckMark
    }
}
