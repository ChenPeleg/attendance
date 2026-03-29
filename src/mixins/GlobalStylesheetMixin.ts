import { LitElement } from 'lit';
import { globalStyleSheet } from '../styles/global-style-sheet.ts';

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Base component that automatically applies global stylesheets to a Lit component's shadow root.
 * This eliminates the need for manual firstUpdated() implementations in every component.
 * Can be extended to add more shared logic or functionality in the future.
 *
 * @example
 * ```typescript
 * @customElement('my-component')
 * export class MyComponent extends AppBaseComponent(LitElement) {
 *   // No need for firstUpdated() - global styles are automatically applied
 * }
 * ```
 */
export const AppBaseComponent = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class AppBaseComponentClass extends superClass {
    firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
      super.firstUpdated?.(changedProperties);
      (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }
  }
  return AppBaseComponentClass as Constructor<LitElement> & T;
};
