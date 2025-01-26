import {customElement} from 'lit/decorators.js';
import {html, LitElement, PropertyValues, unsafeCSS} from 'lit';
import  themButtonCss  from './theme-button.css?inline';

const storageKey = 'theme-preference'



@customElement('theme-button')
export class ThemeButton extends LitElement {
    static styles = unsafeCSS(`${themButtonCss}`)
    getColorPreference = () => {
        if (localStorage.getItem(storageKey))
            return localStorage.getItem(storageKey)
        else
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    private theme = {
        value: this.getColorPreference(),
    }
    private reflectPreference = () => {
        // @ts-ignore
        document?.firstElementChild
            .setAttribute('data-theme', this.theme?.value || 'light')

        document
            .querySelector('#theme-toggle')
            ?.setAttribute('aria-label', this.theme?.value || 'light')
    }

    private onClick = () => {
        // flip current value
        this.theme.value = this.theme.value === 'light'
            ? 'dark'
            : 'light'

        this.setPreference()
    }
    private setPreference = () => {
        // @ts-ignore
        localStorage.setItem(storageKey, theme.value)
        this.reflectPreference()
    }
    init () {









        // set early so no page flashes / CSS is made aware
        this.reflectPreference()

        window.onload = () => {
            // set on load so screen readers can see latest value on the button
            this.reflectPreference()

            // now this script can find and listen for clicks on the control
            // @ts-ignore
            document
                .querySelector('#theme-toggle')
                .addEventListener('click', this.onClick)
        }

        // sync with system changes
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({matches:isDark}) => {
                this.theme.value = isDark ? 'dark' : 'light'
                this.setPreference()
            })
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        this.init()
    }

    render() {
        return html`
            <button class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
                <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <mask class="moon" id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                    <g class="sun-beams" stroke="currentColor">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </svg>
            </button>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'theme-button': ThemeButton
    }
}
