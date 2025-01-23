import {html, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {CheckMark} from '../check-mark/check-mark.ts';
import {checkMarkStyleWithAnimation} from './check-mark-with-animation.style.ts';



@customElement('check-mark-with-animation')
export class CheckMarkWithAnimation extends CheckMark {
    static styles = unsafeCSS(`${checkMarkStyleWithAnimation}`)

    render() {
        return html`
            <div class="circle-container"> 
                <div class="circleLoader">
                    <div class="checkmark draw"></div>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'check-mark-with-animation': CheckMarkWithAnimation
    }
}
