# GitHub Copilot Instructions for Attendance App

This file provides guidance to GitHub Copilot for generating code and suggestions that align with this repository's architecture, conventions, and best practices.

## Project Overview

This is a **Lit-based Progressive Web App (PWA)** for tracking student attendance. It's a privacy-first, offline-capable application that stores all data locally in the browser. The app features a Hebrew-first interface with full RTL (right-to-left) support and can be installed as a standalone mobile/desktop application.

**Key Features:**
- Track student attendance with visual indicators
- Manage children lists with names and IDs
- Share data via URL encoding (no backend required)
- Theme switching (light/dark mode)
- Full offline support via service worker
- Hebrew language interface with RTL layout

## Tech Stack

### Core Technologies
- **Framework**: Lit 3.2.1 (Web Components with Shadow DOM)
- **Language**: TypeScript (ES2020 target, strict mode)
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS (pre-generated utilities - NO build process)
- **Testing**: Playwright 1.50.0 (E2E tests)
- **Node Version**: 24.x required
- **Package Manager**: npm

### Key Configuration
- TypeScript with experimental decorators enabled
- `useDefineForClassFields: false` for Lit compatibility
- Bundler module resolution
- No external router (custom state-based routing)

## Architecture & Patterns

### State Management
We use a **custom Redux-like pattern** (no external library):
- **Single Source of Truth**: `src/store/Store.ts` (accessed via `StoreService`)
- **Reducer**: Pure function `appReducer` in `src/reducer/app-reducer.ts`
- **Actions**: Defined in `src/models/AppAction.ts` (13 action types)
- **State Interface**: `AttendanceStore` in `src/models/AttendanceStore.ts`

**To update state:**
```typescript
import { servicesProvider } from '../services/provider/ServicesProvider.ts';
import { StoreService } from '../services/Store.service.ts';
import { ActionType } from '../models/AppAction.ts';

servicesProvider.getService(StoreService).dispatch({
  type: ActionType.SET_CHILDREN_LIST,
  payload: newChildrenList
});
```

### Dependency Injection
We use a **custom singleton service pattern**:
- All services extend `AbstractBaseService`
- Services are registered in `src/services/provider/ServicesProvider.ts`
- Access via: `servicesProvider.getService(ServiceClass)`

**Available Services (14 total):**
- `StoreService` - State management
- `LocalStorageService` - Browser storage
- `ThemeService` - Theme switching
- `HistoryService` - Navigation history
- `PWAService` - Service worker management
- And more...

### Routing
**No external router library is used.** Routing is handled via:
- State property: `display` in `AttendanceStore`
- Conditional rendering in components based on `DisplayType` enum
- View switching in `app-main.ts` and `app-root.ts`

## Coding Guidelines

### Component Creation
When creating a new Lit component:

1. **Create the component file** in the appropriate directory:
   - `src/components/` - Feature components
   - `src/layout/` - Layout components (navbar, sidebar, etc.)
   - `src/ui/` - Reusable UI elements (buttons, icons, etc.)
   - `src/dialog/` - Dialog components

2. **Use the Lit decorator pattern:**
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  @property({ type: String }) title: string = '';
  @state() private isActive: boolean = false;

  static styles = css`
    :host {
      display: block;
    }
  `;

  firstUpdated() {
    // Adopt global stylesheet for Tailwind utilities
    (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
  }

  render() {
    return html`
      <div class="p-4">
        <h2>${this.title}</h2>
      </div>
    `;
  }
}
```

3. **⚠️ CRITICAL: Register the component** in `src/imports/imported-components.ts`:
```typescript
import './components/my-component.ts';
```
**Forgetting this step causes silent failures** - the component won't render and no error is thrown.

### Naming Conventions
- **Components**: kebab-case for custom element tags (`my-component`)
- **Classes**: PascalCase (`MyComponent`)
- **Files**:
  - Components: kebab-case (`my-component.ts`)
  - Services: PascalCase with `.service.ts` suffix (`MyService.service.ts`)
  - Models: PascalCase (`AttendanceStore.ts`)
- **Properties**: camelCase
- **Constants**: UPPER_SNAKE_CASE or camelCase based on context

### Styling Guidelines
- **Use pre-generated Tailwind utilities** from `src/styles/tailwind-utils.css`
- **DO NOT run Tailwind build commands** (`npx tailwindcss`) - utilities are pre-generated
- For component-specific styles, use Lit's `static styles` property with `css` tag
- Adopt global stylesheet in `firstUpdated()` lifecycle method
- **RTL Support**: Always test with Hebrew interface and right-to-left layout
- Use CSS custom properties for theme switching (defined in `src/theme/`)

### State Updates
To modify application state:
1. Define action type in `src/models/AppAction.ts`
2. Implement handler in `src/reducer/app-reducer.ts`
3. Dispatch via `StoreService`

### Service Usage
To use a service:
```typescript
import { servicesProvider } from '../services/provider/ServicesProvider.ts';
import { LocalStorageService } from '../services/LocalStorage.service.ts';

const storage = servicesProvider.getService(LocalStorageService);
const data = storage.getItem('key');
```

### Testing
- **E2E Tests**: Use Playwright (`npm run e2e`)
- Test files in `e2e/` directory
- Use data-testid attributes for element selection
- Pattern: `data-testid="child_{id}_attend"`
- Test against preview build (localhost:4173)

### Hebrew Language Support
- **All UI text** must come from `src/translations/translations.ts`
- Access via the `Txt` object: `Txt.addChild`, `Txt.attendance`, etc.
- Never hardcode English strings in components
- Ensure proper RTL layout for all new components
- Test with Hebrew text to verify proper alignment

## File & Repository Structure

```
/
├── src/
│   ├── components/        # Feature components (23+ components)
│   ├── layout/           # Layout components (navbar, sidebar, cockpit)
│   ├── main/             # Main application component
│   ├── root/             # Root application components
│   ├── ui/               # Reusable UI elements (buttons, theme-button)
│   ├── dialog/           # Dialog components
│   ├── models/           # TypeScript interfaces and types
│   ├── services/         # Business logic services (14 services)
│   │   └── provider/     # Service resolution and DI
│   ├── store/            # State management
│   ├── reducer/          # Redux-like reducer
│   ├── styles/           # Global styles and Tailwind utilities
│   ├── translations/     # Hebrew text constants (Txt object)
│   ├── theme/            # Theme switching logic
│   └── imports/          # ⚠️ CRITICAL: Component registration
│       └── imported-components.ts  # Must import all components here
├── e2e/                  # Playwright E2E tests
├── public/               # Static assets (PWA manifest, icons)
├── docs/                 # API documentation and guides
├── .github/
│   └── workflows/        # CI/CD workflows
│       ├── deploy-site.yml   # GitHub Pages deployment
│       └── playwright.yml    # E2E testing on PRs
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── playwright.config.ts  # Playwright test configuration
└── package.json          # Dependencies and scripts
```

## Development Workflow

### Commands
```bash
npm install              # Install dependencies
npm run dev              # Start dev server (port 5173)
npm run build            # Production build (TSC + Vite)
npm run build:pages      # Build for GitHub Pages
npm run preview          # Preview production build (port 4173)
npm run e2e              # Run E2E tests
```

### CI/CD
- **GitHub Actions** workflows in `.github/workflows/`
- Auto-deploy to GitHub Pages on push to `deploy/main`
- E2E tests run on PRs to `main`
- Node 24.x used in CI

## Critical Gotchas & Best Practices

### ⚠️ Must-Know Issues

1. **Component Registration**:
   - **ALWAYS** import new components in `src/imports/imported-components.ts`
   - Forgetting this causes silent failures (component won't render)

2. **No Tailwind Build**:
   - Use pre-generated utilities from `src/styles/tailwind-utils.css`
   - **DO NOT** configure PostCSS or run `npx tailwindcss` commands

3. **Service Naming**:
   - All service files should use `.service.ts` suffix
   - Follow the pattern: `MyService.service.ts`

4. **Shadow DOM Styling**:
   - Adopt global stylesheet in `firstUpdated()` lifecycle
   - Use `(this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];`

5. **Hebrew/RTL Support**:
   - Test all changes with RTL layout
   - Use text from `Txt` object, never hardcode English

6. **No External Router**:
   - Routing via state management only
   - Check `DisplayType` enum for available views

7. **Data Storage**:
   - All data stored in browser localStorage
   - No backend or external servers
   - Privacy-first approach

## Important Resources

### Documentation
- [README.md](../README.md) - Project overview and quick start
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [AGENTS.md](../AGENTS.md) - AI agent guide (comprehensive architecture)
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Deployment guide
- [USER_GUIDE.md](../USER_GUIDE.md) - End-user documentation
- [docs/API.md](../docs/API.md) - Internal API documentation

### External Resources
- [Lit Documentation](https://lit.dev/) - Official Lit framework docs
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference
- [Playwright Documentation](https://playwright.dev/) - Testing framework docs
- [Vite Guide](https://vitejs.dev/guide/) - Build tool documentation

### Key Files to Reference
- `src/models/AttendanceStore.ts` - State interface
- `src/models/AppAction.ts` - Available actions
- `src/reducer/app-reducer.ts` - State update logic
- `src/services/provider/ServicesProvider.ts` - Service registration
- `src/translations/translations.ts` - UI text (Hebrew)
- `src/imports/imported-components.ts` - Component registry

## Code Quality Standards

- **TypeScript Strict Mode**: Always enabled
- **No `any` types**: Use proper typing
- **Immutable State**: Never mutate state directly
- **Pure Functions**: Reducer must be pure
- **Shadow DOM**: Understand component isolation
- **Accessibility**: Use semantic HTML and ARIA when needed
- **Security**: No hardcoded credentials, validate inputs
- **Performance**: Lazy load components when possible

## When Making Changes

1. **Understand existing patterns** before creating new ones
2. **Test with Hebrew interface** to ensure RTL compatibility
3. **Register new components** in `imported-components.ts`
4. **Use existing services** before creating new ones
5. **Follow state management pattern** - don't bypass the store
6. **Add data-testid attributes** for E2E test support
7. **Check PWA manifest** if adding new icons/assets
8. **Verify offline functionality** after changes

---

**Remember**: This is a privacy-first, Hebrew-language PWA with a custom architecture. Always consider RTL layout, offline support, and local data storage when making changes.
