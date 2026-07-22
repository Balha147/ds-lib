# Angular UI Components Library

A reusable and maintainable UI component library designed to provide a consistent foundation for building modern Angular applications.

The project explores how to build a scalable Angular Design System while keeping a clear separation between:

- Component behavior and application logic
- Reactive state and Angular Signals
- Form integration
- Design tokens and visual identity
- Component styles
- Bootstrap configuration
- Angular Material / CDK primitives
- Documentation and development workflows

---

## ✨ Highlights

- 🧩 Reusable and composable Angular UI components
- ⚡ Angular 22 and modern Angular APIs
- 🔄 Angular Signals for reactive state management
- 📝 Signal Forms integration
- 🎨 Centralized Design System and design tokens
- ♿ Accessibility-first component architecture
- 📚 Storybook-driven development and documentation
- 🧪 Unit testing and component validation
- 📱 Responsive design
- 🎨 Bootstrap integration
- 🧱 Angular Material / CDK integration
- 🏗️ Scalable SCSS architecture
- 📦 Library-oriented architecture and entry points
- 🔧 Automated scripts for icons, flags and library generation

---

## 🎯 Why this project?

This project is an exploration of how to design and structure a scalable Angular Design System.

The goal is not simply to build a collection of UI components, but to establish a maintainable architecture where each responsibility remains clearly defined.

The library separates:

```text
Angular Components
        │
        ├── Behavior
        ├── Signals
        ├── Inputs / Models
        ├── Events
        ├── Accessibility
        └── Form integration
                │
                ▼
        Design System Layer
                │
        ├── Design tokens
        ├── Variables
        ├── Typography
        ├── Component styles
        ├── Forms
        └── Responsive rules
                │
        ┌───────┴────────┐
        ▼                ▼
   Bootstrap       Angular Material