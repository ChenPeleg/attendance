import { LitElement } from 'lit';
import { globalStyleSheet } from '../styles/global-style-sheet.ts';

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Mixin that automatically applies global stylesheets to a Lit component's shadow root.
 * This eliminates the need for manual firstUpdated() implementations in every component.
 *
 * @example
 * ```typescript
 * @customElement('my-component')
 * export class MyComponent extends WithGlobalStylesheet(LitElement) {
 *   // No need for firstUpdated() - global styles are automatically applied
 * }
 * ```
 */
export const WithGlobalStylesheet = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class GlobalStylesheetMixinClass extends superClass {
    firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
      super.firstUpdated?.(changedProperties);
      (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }
  }
  return GlobalStylesheetMixinClass as Constructor<LitElement> & T;
};
