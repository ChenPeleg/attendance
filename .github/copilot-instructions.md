# Copilot Instructions for נוחכות פיסטוק (Pistachio Attendance)

## Project Overview

This is a Hebrew-language Progressive Web App for tracking student attendance in educational settings. The app is built with modern web technologies and focuses on privacy, mobile-friendliness, and accessibility for Hebrew-speaking users.

## Technology Stack

- **Frontend Framework**: Lit web components (TypeScript)
- **Build Tool**: Vite
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS utility classes
- **Testing**: Playwright for end-to-end tests
- **Deployment**: GitHub Pages (static PWA)
- **Languages**: Hebrew (primary) with English fallbacks

## Code Style and Architecture

### Component Structure
- Use Lit web components with TypeScript decorators
- Follow the established component patterns in `src/components/` and `src/layout/`
- Use `@customElement()` decorator for component registration
- Implement proper TypeScript interfaces for component properties

### File Organization
- **Components**: Reusable UI components in `src/components/`
- **Layout**: Navigation and layout components in `src/layout/`
- **Services**: Business logic and utilities in `src/services/`
- **Models**: TypeScript interfaces and types in `src/models/`
- **Translations**: Hebrew text constants in `src/translations/`
- **Store**: State management in `src/store/`

### Styling Guidelines
- **Primary**: Use Tailwind CSS utility classes
- **Avoid**: Custom CSS unless absolutely necessary
- **Responsive**: Mobile-first design approach
- **Themes**: Support both dark and light modes
- **RTL Support**: Ensure proper Hebrew/RTL text direction

### TypeScript Standards
- Enable strict mode and all linting rules
- Use proper type annotations for all functions and variables
- Implement interfaces for complex objects and component props
- Leverage TypeScript decorators for Lit components (`@state`, `@property`)

## Hebrew Language Guidelines

### Text and Localization
- All user-facing text should be in Hebrew
- Use the translation constants from `src/translations/translations.ts`
- Add comments in Hebrew for UI-related logic
- Ensure proper RTL (right-to-left) text display
- Test with Hebrew content to ensure proper layout

### Cultural Considerations
- Follow Hebrew educational terminology
- Consider Israeli school system conventions
- Use appropriate Hebrew date and time formats

## Development Workflow

### Before Making Changes
1. Run `npm install` to ensure dependencies are up to date
2. Test TypeScript compilation with `npx tsc --noEmit`
3. Run the development server with `npm run dev`
4. Execute tests with `npm run e2e`

### Code Quality Checks
- **Build**: `npm run build` must pass without errors
- **TypeScript**: Code must compile without TypeScript errors
- **Tests**: All Playwright tests in `e2e/` directory must pass
- **Manual Testing**: Test functionality in browser, especially mobile view

### Testing Guidelines
- Write Playwright tests for new features in `e2e/` directory
- Test both Hebrew and English text scenarios when applicable
- Include mobile responsive testing
- Test PWA functionality (offline, installation)
- Verify dark/light theme compatibility

## Common Patterns

### State Management
```typescript
// Use the global store pattern
import { globalStore } from '../store/Store.ts';
import { ActionType } from '../models/AppAction.ts';

// Dispatch actions
globalStore.dispatch({
    type: ActionType.changeDisplayedTab,
    payload: displayType
});
```

### Component Creation
```typescript
import { html, LitElement } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
    @property() title: string = '';
    @state() private isVisible: boolean = false;
    
    render() {
        return html`
            <div class="p-4 bg-white dark:bg-gray-800">
                <h2 class="text-lg font-semibold">${this.title}</h2>
            </div>
        `;
    }
}
```

### Translation Usage
```typescript
import { Txt } from '../translations/translations.ts';

// Use Hebrew translations
html`<button>${Txt.attendance}</button>`
```

## Build and Deployment

### Development
- Use `npm run dev` for development server with hot reload
- Development server runs on `http://localhost:5173`

### Production Builds
- `npm run build` - Standard production build
- `npm run build:pages` - GitHub Pages optimized build
- `npm run preview` - Preview production build locally

### Deployment
- Primary deployment: GitHub Pages via GitHub Actions
- Build artifacts go to `dist/` directory
- App is configured as PWA with manifest and service worker

## Key Features to Preserve

1. **Student Attendance Tracking**: Core functionality for marking student presence
2. **School Bus Management**: Secondary feature for bus attendance
3. **PWA Capabilities**: Offline functionality and app installation
4. **Mobile Responsiveness**: Touch-friendly interface for tablets/phones
5. **Privacy Focus**: All data stored locally, no external services
6. **Hebrew Language Support**: Primary language with proper RTL support
7. **Theme Support**: Dark and light mode compatibility

## Contribution Guidelines

- Follow the established patterns in existing components
- Maintain Hebrew language consistency
- Ensure mobile responsiveness for all changes
- Add appropriate TypeScript types
- Test thoroughly on both desktop and mobile
- Update translations when adding new text
- Consider accessibility (a11y) requirements

## Files to Avoid Modifying

- `src/external/confetti.js` - Third-party celebration animation
- Build configuration files unless specifically needed
- Package dependencies unless adding legitimate new features

## Common Issues and Solutions

1. **TypeScript Errors**: Ensure all imports use `.ts` extensions
2. **Build Failures**: Check for unused imports and variables
3. **RTL Issues**: Test Hebrew text layout in actual browser
4. **Mobile Issues**: Always test responsive behavior
5. **PWA Problems**: Verify manifest and service worker configuration

## Questions and Help

Refer to the comprehensive documentation:
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Detailed contribution guidelines
- [README.md](../README.md) - Project overview and setup
- [USER_GUIDE.md](../USER_GUIDE.md) - User-facing documentation
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Deployment instructions