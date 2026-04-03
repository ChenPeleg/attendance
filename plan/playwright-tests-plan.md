# Playwright Tests Plan

## Current State

Two test files exist in `e2e/`:

| File | Tests | Coverage |
|---|---|---|
| `example.spec.ts` | 1 (smoke test against example.com) | None – should be removed |
| `mark-children.spec.ts` | 4 | Attendance view: mark child, mark all, finish, sort by name |

### Gaps
- No tests for **SchoolBus** view
- No tests for **DaySettings** view
- No tests for **navigation** between tabs
- No tests for **grid / list** display toggle
- No tests for **sort order** (ascending/descending) toggle
- No tests for **add / remove children** (manual children)
- No tests for **data sharing** (copy list, share URL)
- No tests for **theme** switching
- No tests for **PWA offline** behavior
- No tests for **check-out** (unmark a marked child)

---

## Test File Structure

```
e2e/
├── mark-children.spec.ts      # (existing – extend)
├── navigation.spec.ts         # Tab navigation & view switching
├── day-settings.spec.ts       # DaySettings view
├── school-bus.spec.ts         # SchoolBus view
├── sorting.spec.ts            # All sort options and orders
├── display-mode.spec.ts       # List vs Grid view toggle
├── children-management.spec.ts# Add / remove children
├── data-sharing.spec.ts       # Copy list & URL sharing
└── theme.spec.ts              # Theme switching (light/dark)
```

---

## Test IDs Needed (data-testid)

Some features need new `data-testid` attributes added before tests can be written.

| Attribute | Component | Purpose |
|---|---|---|
| `nav_Attendance` | app-cockpit.ts | Already present via `nav_${DisplayType}` |
| `nav_SchoolBus` | app-cockpit.ts | Already present |
| `nav_DaySettings` | app-cockpit.ts | Already present |
| `child_${id}_day-set` | app-child.ts | Already present |
| `sort-Class` | sorting-options.ts | Already present |
| `sort-Name` | sorting-options.ts | Already present |
| `sort-Gender` | sorting-options.ts | Already present |
| `sort-order-toggle` | sorting-options.ts | **New – needed for order tests** |
| `display-toggle` | app-cockpit or layout | **New – needed for list/grid toggle** |
| `add-child-button` | add-child component | **New – needed for management tests** |
| `add-child-input` | add-child component | **New – needed for management tests** |
| `remove-child_${id}` | app-child.ts | **New – needed for management tests** |
| `copy-list-button` | copy-list-button.ts | **New – needed for sharing tests** |
| `share-data-button` | data-share-button.ts | **New – needed for sharing tests** |
| `theme-toggle` | theme-button.ts | **New – needed for theme tests** |

---

## Test Scenarios

### 1. `mark-children.spec.ts` – Extend Existing

**Existing (keep):**
- Clicking a child marks it as present (check-mark visible)
- Marking all 6 children shows `all-children-checked` button
- Clicking `children-count` after marking all clears marks
- Changing sort to Name changes child order

**Add:**
- Clicking a marked child **unmarks** it (check-out)
- `children-count` shows correct fraction (e.g., `3/6`) as children are marked
- Marking all then clicking finish removes `all-children-checked` and resets check-marks

---

### 2. `navigation.spec.ts` – Tab Navigation

- Page loads in **Attendance** view by default (`nav_Attendance` is active)
- Clicking `nav_SchoolBus` switches to SchoolBus view (children show `child_${id}_attend`)
- Clicking `nav_DaySettings` switches to DaySettings view (children show `child_${id}_day-set`)
- Clicking `nav_Attendance` from DaySettings returns to Attendance view
- Navigation state persists across page reload (via localStorage)

---

### 3. `day-settings.spec.ts` – DaySettings View

- Children list shows with DaySettings testids (`child_${id}_day-set`)
- Clicking a child in DaySettings marks them **absent for the day**
- An absent child no longer appears in Attendance view
- Re-clicking an absent child in DaySettings marks them **present** again
- Marking a child absent, switching to Attendance, then back to DaySettings preserves the absent state

---

### 4. `school-bus.spec.ts` – SchoolBus View

- Children list is visible in SchoolBus view
- Clicking a child marks them for school bus (check-mark visible)
- Unmarking a child removes the school bus mark
- Bus-marked children remain marked after navigating away and back
- Count / progress indicator (if present) updates correctly

---

### 5. `sorting.spec.ts` – Sorting Options

- Default sort is **Class ascending** (child_1 class א appears before child_4 class ב)
- Switching sort to **Name ascending** reorders correctly (alphabetical by Hebrew name)
- Switching sort to **Gender** groups children by gender
- Toggling sort **order** (ascending → descending) reverses the list for each sort type
- Sort preference persists after page reload (via localStorage)
- Closing side menu hides sorting options

---

### 6. `display-mode.spec.ts` – List vs Grid Toggle

- Default view is **List** (single-column layout)
- Clicking the display toggle switches to **Grid** (2-column layout)
- Children are still clickable in Grid mode
- Clicking the toggle again returns to List mode
- Display preference persists after page reload

---

### 7. `children-management.spec.ts` – Add / Remove Children

- Clicking **add-child-button** shows the add-child form
- Typing a name and submitting adds the child to the attendance list
- The new child appears with a testid following `child_${id}_attend` pattern
- Clicking **remove** on a manually-added child removes it from the list
- Default (seeded) children cannot be removed (or have no remove button)
- Added child persists after page reload (stored in localStorage)

---

### 8. `data-sharing.spec.ts` – Copy List & URL Sharing

- Clicking **copy-list-button** copies the children list to the clipboard (or shows a confirmation)
- Clicking **share-data-button** generates a shareable URL containing encoded state
- Loading the app with a valid share URL restores the shared attendance state
- Loading with an invalid/missing URL param renders the default state without errors

---

### 9. `theme.spec.ts` – Theme Switching

- Default theme loads without errors (light or dark based on system preference)
- Clicking **theme-toggle** switches between light and dark themes
- Theme preference persists after page reload (via localStorage)
- Theme class/attribute is applied to the root element

---

## Implementation Order (Priority)

| Priority | File | Reason |
|---|---|---|
| 1 | Extend `mark-children.spec.ts` | Core feature, already partially covered |
| 2 | `navigation.spec.ts` | Foundation for all other views |
| 3 | `day-settings.spec.ts` | Second most-used view |
| 4 | `school-bus.spec.ts` | Third view, mirrors attendance patterns |
| 5 | `sorting.spec.ts` | Existing partial coverage, straightforward |
| 6 | `display-mode.spec.ts` | Simple toggle behavior |
| 7 | `children-management.spec.ts` | Requires new data-testid attributes |
| 8 | `data-sharing.spec.ts` | Complex URL/clipboard interactions |
| 9 | `theme.spec.ts` | Visual, lower risk |

---

## Conventions & Best Practices

- Use `baseURL` from `playwright.config.ts` — write `page.goto('/')` not full URLs
- Use `page.getByTestId()` for all element queries (avoid CSS selectors or text)
- Add `data-testid` attributes in components before writing the test that needs them
- Each `describe` block maps to one feature area
- Each `test` should navigate fresh (`page.goto('/')`) to avoid state leakage — unless the test explicitly tests state persistence
- For persistence tests, use `page.reload()` instead of `page.goto('/')`
- Shadow DOM: Playwright pierces Shadow DOM automatically — `getByTestId` works across shadow roots
- For clipboard tests, grant clipboard permissions: `context.grantPermissions(['clipboard-read', 'clipboard-write'])`
- Remove `example.spec.ts` — it tests an external URL and provides no value
