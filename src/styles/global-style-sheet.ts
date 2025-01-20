
import {css, CSSResult} from 'lit';

const globalStyles: CSSResult = css`
  @import url( ./try.css );
`;

export const globalStyleSheet = new CSSStyleSheet();
console.log(globalStyles.cssText);
globalStyleSheet.replaceSync(globalStyles.cssText);
