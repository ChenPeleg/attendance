# Contributing to נוחכות פיסטוק (Pistachio Attendance)

Thank you for your interest in contributing to Pistachio Attendance! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Basic knowledge of TypeScript, Lit, and modern web development

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/attendance.git
   cd attendance
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to `http://localhost:5173`

## 📋 Code Guidelines

### Code Style

- **TypeScript**: All code should be written in TypeScript with proper typing
- **Lit Components**: Use Lit web components following the established patterns
- **CSS**: Use Tailwind CSS utility classes, avoid custom CSS when possible
- **Naming**: Use descriptive, self-documenting variable and function names
- **Comments**: Add comments for complex logic, especially in Hebrew for UI-related text

### File Organization

- **Components**: Place reusable UI components in `src/components/`
- **Layout**: Navigation and layout components go in `src/layout/`
- **Services**: Business logic and utilities in `src/services/`
- **Models**: TypeScript interfaces and types in `src/models/`
- **Translations**: Hebrew text constants in `src/translations/`

### Component Structure

Follow this pattern for Lit components:

```typescript
import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

@customElement('my-component')
export class MyComponent extends LitElement {
    @property({type: String}) prop: string = '';
    @state() private internalState: boolean = false;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div class="flex flex-col">
                <!-- Your template here -->
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-component': MyComponent;
    }
}
```

## 🌐 Hebrew Language Support

### Text Management

- All Hebrew text should be added to `src/translations/translations.ts`
- Use the `Txt` object to reference translated strings
- Follow the existing naming convention for keys

Example:
```typescript
// In translations.ts
const translations = {
    'myNewFeature': 'התכונה החדשה שלי',
    // ...
} as const;

// In component
import {Txt} from '../translations/translations.ts';

render() {
    return html`<div>${Txt.myNewFeature}</div>`;
}
```

### RTL (Right-to-Left) Support

- The app uses CSS logical properties for RTL support
- Use Tailwind's RTL-aware classes when available
- Test your changes in both LTR and RTL modes

## 🧪 Testing

### Running Tests

```bash
# Run end-to-end tests
npm run e2e
```

### Writing Tests

- Place test files in the `e2e/` directory
- Use Playwright for end-to-end testing
- Test critical user flows and new features
- Include tests for both Hebrew and English scenarios if applicable

Example test:
```typescript
import { test, expect } from 'playwright/test';

test('attendance tracking works', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    // Test Hebrew interface
    await expect(page.getByText('נוכחות')).toBeVisible();
    
    // Test functionality
    await page.getByTestId('student-button-1').click();
    await expect(page.getByText('נמצא/ת')).toBeVisible();
});
```

## 🔄 Pull Request Process

### Before Submitting

1. **Code Quality**
   - Ensure TypeScript compiles without errors
   - Follow the established code style
   - Add appropriate type annotations

2. **Testing**
   - Test your changes manually in the browser
   - Run existing tests: `npm run e2e`
   - Add new tests for new features

3. **Build**
   - Ensure the app builds successfully: `npm run build`
   - Test the production build: `npm run preview`

### PR Guidelines

1. **Title**: Use a clear, descriptive title
   - ✅ "Add student search functionality"
   - ❌ "Fix stuff"

2. **Description**: Include:
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots for UI changes

3. **Size**: Keep PRs focused and reasonably sized
   - One feature or fix per PR
   - Break large changes into smaller, reviewable chunks

4. **Commits**: 
   - Use clear commit messages
   - Reference issues when applicable

### Review Process

1. **Automated Checks**: Ensure all CI checks pass
2. **Code Review**: Address all reviewer feedback
3. **Testing**: Verify functionality works as expected
4. **Documentation**: Update docs if needed

## 🐛 Bug Reports

### Before Reporting

1. **Search Existing Issues**: Check if the bug has already been reported
2. **Reproduce**: Ensure you can consistently reproduce the issue
3. **Environment**: Note your browser, OS, and device type

### Bug Report Template

```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- Browser: [e.g. Chrome 120]
- OS: [e.g. iOS 17]
- Device: [e.g. iPhone 15]
```

## 💡 Feature Requests

### Guidelines

- **Use Cases**: Explain the use case and why it's valuable
- **Scope**: Keep requests focused and well-defined
- **Alternatives**: Consider if existing features can solve the problem
- **Compatibility**: Ensure requests align with the app's goals

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature.

**Use Case**
Why is this feature needed? What problem does it solve?

**Proposed Solution**
How should this feature work?

**Alternatives**
Any alternative solutions you've considered?

**Additional Context**
Any other context or screenshots about the feature request.
```

## 🌟 Types of Contributions

### Code Contributions
- Bug fixes
- New features
- Performance improvements
- Code refactoring
- Test coverage improvements

### Non-Code Contributions
- Documentation improvements
- Translation updates
- Design suggestions
- User experience feedback
- Bug reports and testing

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Pull Request Comments**: For code-specific questions

### Questions?

If you have questions about contributing:

1. Check existing documentation
2. Search through GitHub issues
3. Open a new issue with the "question" label

## 🎉 Recognition

We appreciate all contributions! Contributors will be:

- Listed in release notes for significant contributions
- Credited in the repository
- Welcomed into the community

## 📝 Code of Conduct

### Our Commitment

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background, identity, or experience level.

### Expected Behavior

- **Be Respectful**: Treat all community members with respect
- **Be Inclusive**: Welcome newcomers and diverse perspectives  
- **Be Collaborative**: Work together constructively
- **Be Patient**: Help others learn and grow

### Unacceptable Behavior

- Harassment, discrimination, or offensive language
- Personal attacks or inflammatory comments
- Spam or off-topic discussions
- Any behavior that creates an unwelcoming environment

### Reporting Issues

If you experience or witness unacceptable behavior, please report it by opening an issue or contacting the maintainers directly.

---

**Thank you for contributing to נוחכות פיסטוק! Together we can build better tools for education.** 🎓