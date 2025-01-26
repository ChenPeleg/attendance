import {  html, LitElement, unsafeCSS} from 'lit'
import {customElement } from 'lit/decorators.js'
import {checkMarkStyle} from './check-mark.style.ts';




@customElement('check-mark')
export class CheckMark extends LitElement {
    static styles = unsafeCSS(`${checkMarkStyle}`)
    render() {
        return html`
            <div class= "circleLoader"> 
                <div class= "checkmark draw"></div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'check-mark': CheckMark
    }
}
