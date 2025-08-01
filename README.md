# README: Component Assistant

This project is an interactive prototype of a "Natural Language to Component Suggestion Tool," as assigned. The concept is a web application where a developer can describe a UI component in plain English and receive a generated code snippet and a live preview in real-time.  The application has included features where they could access a componet library with pre-built components from Visa's documentation page, allowing the dev to use them as a starting point if needed.  The application also has a saved component feature where the developer can save a component they worked and have it stored for later use.  

## 🚀 Live Demo
https://chavetoni.github.io/Component-generator-assistant/


## Your Approach and Technical Choices

My approach was to create an loosely agentic expirience and conversational UI that feels like a collaborative partner rather than a static tool. The main vision for this application was to create a environment and system that would benefit a developer.  I envisioned myself as if i were to use the tool on a daily basis and noted things that would help me or hinder me in my workflow.

**Technical Choices:**

**React + JavaScript Architecture**: This application was built with modern React patterns using JavaScript.  Since this tech stack i am more familiar with and it allows me to orginize and architect the codebase efficiently. 

**Vite Build System**: This was chosen for fast development cycles and optimized production builds. It is developer friendly with its development experience and build performance.

**Conversational Interface with Persistent State**: The main interaction model is a chat interface with localStorage persistence. This tries to resemble a agentic experience where the user can input natural language requests while also getting component suggestions. 

**Three-View Application Structure**: The UI is structured into three distinct areas: Dashboard (Conversation + Live Preview + Code Output), Component Library Browser, and My Components Manager. This layout provides the developer to have clear workflow from their request, visual results, and code ouput while also allowing them to discover and manage their own buit components.


## Any Assumptions or Shortcuts You Made

To deliver a polished, production-ready prototype, I made several key assumptions and shortcuts:

**Simulated AI w/ Keyword Matching**: The "assistant" uses pattern matching and hardcoded component recipes rather than real AI. I chose this route since it would showcase the core functionality and would help visulize if there were AI intergration . This allowed me to focus on the UX while demonstrating the interaction patterns.

**Mock Component Library**: Used hardcoded component definitions from Visa's Product Design System documentation.  The goal was to give an idea of how the system would work if it were fully integrated with the actual design system. This also allowed me to focus on the interaction and UI rather than building a full backend.

**Client-Side Only**: No backend server - all data stored in localStorage. This simplified development to focus on the frontend experience.

**Static HTML Previews**: The live preview renders HTML representations rather than fully interactive React components. This was done to keep the prototype simple and focused on the core interaction within the application.

**Predefined Component Patterns**: The application recognizes specific keywords and generates a curated set of components (login forms, profile cards, button groups, etc.). I chose this to demonstrates the core concept of the workflow without creating too much complexity.

## What You Would Improve or Add with More Time

With more time, I would focus on enhancing the intelligence and expanding the capabilities to make it a truly a agentic development asistant.

**Real AI Integration**: I would want to replace the keyword matching with OpenAI/Claude API integration for sophisticated natural language understanding. This would improve conversations and component customization requests.

**Live React Component Previews**: Replace static HTML with a sandboxed React environment that renders actual interactive components. Users could modify components in real-time and see immediate visual feedback.

**Actual NOVA Integration**: Connect to Visa's official design system APIs and component libraries, making this a production tool rather than a prototype.

**Beyond just single component generation**: I would expand the system to handle more complex workflows, such as generating entire pages or multi-component layouts based on user requests.

## Other Notes ##

**AI tools use**: For full closure, I used AI tools (Gemini & Claude) to assist with researching, brainstorming, and generating complex code snippets. AI was use as a lecturer and partner instead of a replacement.

## Development

```bash
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

