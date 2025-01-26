
import {css, unsafeCSS} from 'lit';

import tailwindStyles from './tailwind-utils.css?inline';
import customComponent from './special-components.css?inline';

const cssTailwind = unsafeCSS(tailwindStyles)
const cssCustomGlobal = unsafeCSS(customComponent)
export const allComputedStyles = css`
    ${unsafeCSS(cssCustomGlobal)}
    ${unsafeCSS(cssTailwind)}`;


export const globalStyleSheet = new CSSStyleSheet();
globalStyleSheet.replaceSync(allComputedStyles.cssText);

