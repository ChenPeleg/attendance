# AI Agent Guide for Attendance App

This guide outlines the critical knowledge needed to work effectively on the Attendance codebase.

## 🏗 Big Picture

This is a **Lit-based Progressive Web App (PWA)** for tracking student attendance. It uses a custom state management solution and dependency injection system.

### Architecture
- **Framework**: [Lit](https://lit.dev/) (Web Components).
- **Language**: TypeScript (`ESNext`).
- **State Management**: a custom Redux-like pattern.
  - **Store**: Single source of truth in `src/store/Store.ts` (accessed via `StoreService`).
  - **Reducer**: pure function `appReducer` in `src/reducer/app-reducer.ts` handles `AppAction`.
  - **Models**: State interfaces defined in `src/models/AttendanceStore.ts`.
- **Dependency Injection**: Custom `ServicesResolver` in `src/services/provider/ServiceResolverClass.ts`. 
  - Services are singletons registered in `src/services/provider/ServicesProvider.ts`.
  - All services must extend `AbstractBaseService`.
- **Routing**: No external router. View switching is handled by checking specific state properties (e.g., `display` in `AttendanceStore`) and conditionally rendering in `app-main.ts` or `app-root.ts`.
- **Styling**: 
  - **Tailwind CSS**: A static utility file `src/styles/tailwind-utils.css` is used. **DO NOT** attempt to run Tailwind build commands (`npx tailwindcss`). Use existing utility classes or add custom CSS.
  - **Component Styles**: Scoped CSS within Lit components.

## 🚀 Developer Workflow

### Build & Run
- **Dev Server**: `npm run dev` (Vite).
- **Build**: `npm run build` (TSC + Vite).
- **Tests**: `npm run e2e` (Playwright). Checks `playwright.config.ts`.
- **Hot Updates**: `vite.config.ts` is configured to run `src/scripts/run-on-file-change.js` on file changes with a custom plugin.

### Key Commands
```powershell
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build
npm run e2e      # Run end-to-end tests
```

## 🧩 Patterns & Conventions

### Component Creation
1. Create new component in `src/components/` (or `layout/`, `ui/` depending on usage).
2. Use `@customElement('tag-name')` decorator.
3. **Register the component** in `src/imports/imported-components.ts` to ensure it's loaded.
4. Extend `LitElement`.

Example:
```typescript
@customElement('my-component')
export class MyComponent extends LitElement {
  render() {
    return html`<div>Content</div>`;
  }
}
```

### State Updates
To modify global state:
1. Define a new action type in `src/models/AppAction.ts`.
2. Handle the action in `src/reducer/app-reducer.ts`.
3. Dispatch action via `StoreService`:
   ```typescript
   servicesProvider.getService(StoreService).dispatch({ type: ActionType.myAction, payload: ... });
   ```

### Service Usage
To use a service:
```typescript
import { servicesProvider } from '../services/provider/ServicesProvider.ts';
import { MyService } from '../services/MyService.ts';

const service = servicesProvider.getService(MyService);
service.doSomething();
```

## ⚠️ Gotchas
- **No Tailwind Build**: The project uses a pre-generated `tailwind-utils.css`. Do not try to configure PostCSS or Tailwind CLI.
- **Manual Registration**: Forgeting to import a new component in `imported-components.ts` will cause it to not render (silently fail to upgrade).
- **Hebrew Support**: The app is RTL and Hebrew-first. Ensure text alignment and directionality are respected.

