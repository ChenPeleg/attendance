# API Documentation

This document describes the internal architecture and APIs of the Pistachio Attendance application.

## 🏗️ Architecture Overview

The application follows a component-based architecture using Lit web components with a centralized state management system.

### Core Components

```
┌─────────────────┐
│   app-root      │  Root application component
└─────────┬───────┘
          │
    ┌─────▼─────────────────────────────┐
    │        app-root-layout            │  Main layout container
    └─┬───────────────────────────────┬─┘
      │                               │
┌─────▼─────┐                  ┌─────▼─────┐
│app-navbar │                  │ app-main  │  Main content area
└───────────┘                  └───────────┘
```

## 🔄 State Management

### Store Structure

The application uses a Redux-like store pattern with the following state:

```typescript
interface AttendanceStore {
    display: DisplayType;              // Current view mode
    attendance: ChildStatus[];         // Student attendance data
    history: HistoryModel[];          // Attendance history
    sortType: SortType;               // Current sorting method
    sortOrder: SortOrder;             // Ascending/descending
    childrenDisplayType: ChildrenDisplayType; // Grid/List view
    lastUpdated: number;              // Timestamp of last update
}
```

### Actions

All state changes go through dispatched actions:

```typescript
enum ActionType {
    changeDisplayedTab = 'changeDisplayedTab',
    toggleChildCheckedIn = 'toggleChildCheckedIn',
    addChild = 'addChild',
    removeChild = 'removeChild',
    clearAllData = 'clearAllData',
    changeSortType = 'changeSortType',
    changeChildrenDisplayType = 'changeChildrenDisplayType'
}
```

### Store Service

The `StoreService` manages the global state:

```typescript
class StoreService {
    store: Store<AttendanceStore>;
    
    constructor() {
        this.store = new Store(initialState, attendanceReducer);
        this.loadFromStorage();
        this.store.subscribe(this.saveToStorage.bind(this));
    }
    
    private loadFromStorage(): void
    private saveToStorage(state: AttendanceStore): void
}
```

## 📦 Component APIs

### Core Layout Components

#### `app-navbar`
Main navigation component with mode switching.

**Properties:**
- None (stateless)

**Events:**
- Dispatches store actions for mode changes

**Usage:**
```html
<app-navbar></app-navbar>
```

#### `app-cockpit`
Navigation buttons for switching between attendance modes.

**Properties:**
- `buttons: CockpitButton[]` - Navigation button configuration

**Events:**
- `cockPitClick` - Emitted when mode is changed

#### `side-menu-content`
Settings and options menu.

**Methods:**
- `addChild()` - Opens dialog to add new student
- `onReset()` - Clears all attendance data

### Student Components

#### `app-child`
Individual student attendance component.

**Properties:**
```typescript
@property({type: Object}) child: ChildStatus;
@property({type: String}) childItemType: 'checkIn' | 'presentToday';
```

**Events:**
- `child-clicked` - Emitted when student is clicked

**Usage:**
```html
<app-child 
    .child="${studentData}" 
    .childItemType="${'checkIn'}"
    @child-clicked="${handleChildClick}">
</app-child>
```

#### `children-count`
Displays attendance summary.

**Properties:**
```typescript
@property({type: Number}) totalChildren: number;
@property({type: Number}) checkedInChildren: number;
@property({type: Function}) onClick: () => void;
```

### UI Components

#### `theme-switch`
Dark/light theme toggle.

**Properties:**
- None

**Events:**
- Automatically updates theme CSS variables

#### `install-pwa-button`
PWA installation prompt.

**Properties:**
```typescript
@state() canInstall: boolean;
@state() preInstallEvent: Event | null;
```

**Methods:**
- `initPwa()` - Initialize PWA detection
- `installPWA()` - Trigger PWA installation

## 🔧 Services

### Configuration Service

Manages environment-specific settings:

```typescript
class ConfigurationService {
    isDevMode(): boolean
    getEnvironment(): Environment
    getBaseUrl(): string
}
```

### PWA Service

Handles Progressive Web App functionality:

```typescript
class PWAService {
    checkIfCanInstallPWA(): Promise<Event | false>
    promisifiedCheckForPWA(): Promise<PWAStatus>
}
```

### Sort Service

Manages student sorting logic:

```typescript
class SortService {
    sortChildren(
        children: ChildStatus[], 
        sortType: SortType, 
        sortOrder: SortOrder
    ): ChildStatus[]
}
```

### History Service

Tracks attendance history:

```typescript
class HistoryService {
    addToHistory(attendance: ChildStatus[]): void
    lastAttendanceHours(history: HistoryModel[]): string[]
}
```

## 📱 Data Models

### Core Models

#### `ChildModel`
```typescript
type ChildModel = {
    id: string;
    name: string;
    school: SchoolType;
    schoolClass: SchoolClass;
    boyOrGirl: Gender;
    manuallyAdded?: false;
    onlySchoolBus?: boolean;
} | {
    id: string;
    name: string;
    manuallyAdded: true;
}
```

#### `ChildStatus`
```typescript
type ChildStatus = ChildModel & StatusModel;

interface StatusModel {
    checkedIn: boolean;
    presentToday: boolean;
}
```

#### `HistoryModel`
```typescript
interface HistoryModel {
    date: string;
    attendance: ChildStatus[];
    timestamp: number;
}
```

### Enums

#### `DisplayType`
```typescript
enum DisplayType {
    Attendance = 'Attendance',
    SchoolBus = 'SchoolBus',
    DaySettings = 'DaySettings'
}
```

#### `SortType`
```typescript
enum SortType {
    Class = 'Class',
    Name = 'Name', 
    Gender = 'Gender'
}
```

## 🎨 Styling System

### Global Styles

The application uses a global stylesheet system:

```typescript
// Global stylesheet applied to all components
const globalStyleSheet = new CSSStyleSheet();
globalStyleSheet.replaceSync(`
    ${tailwindStyles}
    ${customComponentStyles}
    ${themeStyles}
    ${scrollBarStyles}
`);
```

### Theme System

CSS custom properties for theming:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #f1f5f9;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
}

[data-theme="dark"] {
    --primary-color: #3b82f6;
    --secondary-color: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
}
```

### Component Styling

Each component adopts the global stylesheet:

```typescript
firstUpdated() {
    (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
}
```

## 🔌 Event System

### Custom Events

Components communicate through custom events:

```typescript
// Dispatching events
this.dispatchEvent(new CustomEvent('child-clicked', {
    detail: { child: this.child },
    bubbles: true
}));

// Listening to events
@eventListener('child-clicked')
handleChildClick(event: CustomEvent) {
    const { child } = event.detail;
    // Handle the event
}
```

### Store Events

State changes trigger component updates:

```typescript
firstUpdated() {
    globalStore.subscribe((state: AttendanceStore) => {
        this.storeState = state;
        this.requestUpdate();
    });
}
```

## 💾 Data Persistence

### Local Storage

Data is automatically persisted to localStorage:

```typescript
private saveToStorage(state: AttendanceStore): void {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('attendance-app-state', serialized);
    } catch (error) {
        console.error('Failed to save state:', error);
    }
}

private loadFromStorage(): AttendanceStore | null {
    try {
        const serialized = localStorage.getItem('attendance-app-state');
        return serialized ? JSON.parse(serialized) : null;
    } catch (error) {
        console.error('Failed to load state:', error);
        return null;
    }
}
```

### Data Migration

Future versions can include migration logic:

```typescript
private migrateData(data: any, version: string): AttendanceStore {
    // Handle data structure changes between versions
    switch (version) {
        case '1.0.0':
            return this.migrateFrom1_0_0(data);
        default:
            return data;
    }
}
```

## 🧪 Testing APIs

### Test Selectors

Components include test identifiers:

```typescript
// In components
render() {
    return html`
        <button data-testid="student-${this.child.id}">
            ${this.child.name}
        </button>
    `;
}
```

### Mock Services

Services can be mocked for testing:

```typescript
class MockStoreService extends StoreService {
    constructor(initialState?: AttendanceStore) {
        super();
        if (initialState) {
            this.store.setState(initialState);
        }
    }
}
```

## 🔒 Security Considerations

### Data Sanitization

User input is sanitized before storage:

```typescript
private sanitizeChildName(name: string): string {
    return name.trim().replace(/[<>]/g, '');
}
```

### Content Security Policy

The app supports CSP headers:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline'">
```

## 📊 Performance Optimizations

### Component Lazy Loading

Non-critical components can be lazy loaded:

```typescript
const LazyComponent = lazy(() => import('./expensive-component.js'));
```

### Memory Management

Components clean up resources:

```typescript
disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up event listeners, timers, etc.
}
```

### Bundle Optimization

Vite configuration optimizes the bundle:

```typescript
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['lit'],
                    utils: ['./src/services', './src/models']
                }
            }
        }
    }
});
```

## 🔍 Debugging

### Development Tools

Enable debug mode with environment variables:

```typescript
if (import.meta.env.DEV) {
    console.log('Debug info:', debugData);
}
```

### Error Boundaries

Components handle errors gracefully:

```typescript
updated(changedProperties: PropertyValues) {
    try {
        super.updated(changedProperties);
        // Component logic
    } catch (error) {
        console.error('Component error:', error);
        this.handleError(error);
    }
}
```

---

This API documentation provides a comprehensive overview of the application's architecture and internal APIs for developers working on the codebase.