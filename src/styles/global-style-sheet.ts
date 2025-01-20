import {tailwindAll} from './tailwind-all.ts';


export const globalStyleSheet = new CSSStyleSheet();
globalStyleSheet.replaceSync(tailwindAll.cssText);

