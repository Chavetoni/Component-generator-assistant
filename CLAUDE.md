# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **NOVA Component Assistant**, a Natural Language → Component Suggestion Tool for the Visa Product Design System. It's a React + TypeScript application that allows developers to describe UI components in natural language and receive suggested NOVA components with auto-generated code snippets.

## Essential Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Node.js Compatibility Note
# This project requires Node.js 18+ due to Vite 5.x and React 18 compatibility
# If using Node.js 18, the current versions are compatible
# Avoid upgrading to Vite 7+ or React 19+ without Node.js 20+
```

## Architecture Overview

### Core Data Flow
The application centers around a **conversation-driven component generation system**:

1. **Input**: User types natural language in chat (e.g., "login form")
2. **Processing**: `patternMatching.ts` maps input to component patterns via keyword matching
3. **Data Source**: `componentDatabase.ts` contains predefined component configurations
4. **Output**: Three synchronized views update: Chat, Preview, and Code Editor

### Key Architecture Patterns

**State Management**: 
- No external state library - uses React hooks and context
- `useChat` hook manages conversation flow and component suggestions
- `useTheme` hook handles dark/light mode with localStorage persistence

**Component Database Structure**:
```typescript
// Each pattern maps to: components[], code, preview
componentDatabase = {
  login: { components: [...], code: "...", preview: "login" },
  navigation: { components: [...], code: "...", preview: "navigation" }
}
```

**Pattern Matching Logic**:
- Keyword-based matching in `utils/patternMatching.ts`
- Extensible pattern system with fallback to generic forms
- Quick actions generated dynamically based on pattern type

### Component Hierarchy

**Layout**: `App.tsx` → `Header` + `Sidebar` + `MainContent`
**Views**: Three main views switched via sidebar:
- `DashboardView`: 3-card layout (Chat, Preview, Code)
- `ComponentLibraryView`: Browse all NOVA components by category  
- `MyComponentsView`: Manage saved components with localStorage

**Dashboard Cards**:
- `ChatCard`: Handles conversation, message rendering, quick actions
- `PreviewCard`: Renders static HTML previews based on component type
- `CodeCard`: Tabbed interface (Code/Components/Tree) with copy/save functionality

### Styling System

**CSS Architecture**: Pure CSS with CSS custom properties (no frameworks)
- `styles/globals.css`: CSS variables, base styles, component classes
- Theme switching via CSS custom properties and `.dark` class
- Visa brand colors: `--visa-blue: #1a1f71`, `--visa-gold: #f7b600`

### Data Persistence

**localStorage Integration**:
- Theme preference persistence
- Saved components with full CRUD operations via `utils/localStorage.ts`
- Component export/import as JSON files

## Pattern Extension

To add new component patterns:

1. **Add to componentDatabase.ts**: Define components array, code template, preview type
2. **Update patternMatching.ts**: Add keywords to patterns object
3. **Add preview rendering**: Update `PreviewCard.tsx` switch statement
4. **Add quick actions**: Update `getQuickActions()` for pattern-specific modifications

## TypeScript Configuration

Uses strict TypeScript with:
- `verbatimModuleSyntax: true` - requires `import type` for type-only imports
- Separate tsconfig files for app and Node.js code
- React 18 types for compatibility

## Important Implementation Notes

- **Mock NOVA Library**: Uses hardcoded component definitions, not real NOVA components
- **Static Previews**: Preview components are HTML/CSS representations, not interactive React components  
- **Keyword Matching**: Natural language processing is simple keyword-based, not AI/ML
- **Browser Storage**: All user data stored in localStorage, no backend integration
- **Single Page App**: No routing - view switching handled by React state