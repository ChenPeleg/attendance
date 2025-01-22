import {  html, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js'
import litLogo from '../assets/lit.svg'
import viteLogo from '/vite.svg'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {globalStore} from '../store/Store.ts';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-root-layout')
export class AppRootLayout extends LitElement {
    /**
     * Copy for the read the docs hint.
     */
    @property()
    docsHint = 'Click on the Vite and Lit logos to learn more'
    /**
     * The number of times the button has been clicked.
     */
    @property({type: Number})
    count = 0;
  firstUpdated() {
    // @ts-ignore
    this.shadowRoot.adoptedStyleSheets = [globalStyleSheet];
    globalStore.subscribe((newState) => {
        this.count = newState.count;
    })

  }


    render() {
        return html`
            <div class="flex flex-col items-center justify-center bg-amber-100"> 
              <div class="  ">

                    <a href="https://vite.dev" target="_blank">
                        <img src=${viteLogo} class="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://lit.dev" target="_blank">
                        <img src=${litLogo} class="logo lit" alt="Lit logo"/>
                    </a>
                </div>
                <div class="bg-amber-200"> 
                  
                </div>
                <div class="card">
                    <button @click=${this._onClick}>
                        count is ${this.count}
                    </button>
                </div>
                <p class="read-the-docs">${this.docsHint}</p>
              <slot></slot>
            </div>
        `
    }


    private _onClick() {
        globalStore.setState({count: this.count + 1, children:[]})
        // this.count++
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout': AppRootLayout
    }
}
