import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../main/app-main.ts'
import '../layout/app-navbar.ts'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-root-layout')
export class AppRootLayout extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html` 
                <div class="h-screen w-screen flex-col items-center justify-center  overflow-x-hidden"
                     style="direction: rtl; max-width: 100svw; max-height: 100svh;">
                                    <bg-image></bg-image> 
                                    <app-navbar></app-navbar>
                                    <app-main></app-main>
                </div>
            
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout': AppRootLayout
    }
}
