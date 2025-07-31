# NOVA Component Assistant

A Natural Language → Component Suggestion Tool for the Visa Product Design System (NOVA). This application allows developers to describe UI components in natural language and receive suggested NOVA components with auto-generated code snippets.

## Features

- **Natural Language Input**: Describe what you want to build in plain English
- **Component Suggestions**: Get relevant NOVA components based on your description
- **Code Generation**: Automatically generate React code using NOVA components
- **Live Preview**: See a visual preview of your generated components
- **Component Library**: Browse all available NOVA components
- **Save & Export**: Save your favorite component snippets for later use
- **Dark/Light Theme**: Toggle between light and dark modes
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Lucide React for icons
- CSS for styling (no CSS frameworks)
- localStorage for persistence

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd visa-component-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Dashboard View

1. **Chat & Build Components**: Type a description of what you want to build (e.g., "login form with remember me")
2. **Live Preview**: See a visual representation of your component
3. **Code Editor**: View and edit the generated code with syntax highlighting

### Component Library

Browse all available NOVA components organized by category:
- Forms
- Buttons
- Layout
- Navigation
- Data Display
- Feedback
- Overlays

### My Components

- Save your favorite component snippets
- Search through saved components
- Export components as JSON files
- Copy code with one click

## Supported Patterns

The assistant currently recognizes these patterns:
- Login forms
- Navigation menus
- Buttons and button groups
- Cards and containers
- Data tables
- Modal dialogs
- Generic forms

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, MainContent
│   ├── dashboard/       # ChatCard, PreviewCard, CodeCard
│   ├── views/          # DashboardView, ComponentLibraryView, MyComponentsView
│   └── ui/             # Button, Card, Tabs
├── hooks/              # Custom React hooks
├── data/               # Component database and patterns
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global CSS styles
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Development Notes

- The application uses a mock NOVA component library
- Component suggestions are based on keyword matching
- All data is stored locally in the browser
- The preview shows static representations of components

## Future Enhancements

- Real NOVA component integration
- Advanced natural language processing
- Component composition and nesting
- Export to various frameworks
- Team collaboration features
- Version control for saved components

## License

This project was created as an interview assignment for Visa.