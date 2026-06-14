# Mind Mystery AI 🕵️🔍👻
<img width="1910" height="1035" alt="image" src="https://github.com/user-attachments/assets/47ef77bf-ac84-43a3-a7b9-10bf4e0a6c6a" />

A premium AI-powered detective game master built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, Zustand, Axios, and @dnd-kit.

## Features

- Modern dark detective interface with glassmorphism
- Landing page with hero, features, testimonials, and FAQ
- Authentication prototype with Login, Register, and Forgot Password screens
- Dashboard with active cases, solved cases, score, achievements, and progress
- AI Case Generator with difficulty/theme options and loading skeletons
- Investigation workspace with suspect and evidence panels
- Interactive evidence board powered by @dnd-kit drag-and-drop
- Suspect interrogation chat with typewriter narration and quick questions
- Notebook editor with autosave mock behavior and version history
- Hint system with tiered prompts and accusation flow
- Result page with verdict, accuracy, rank, and XP
- Profile screen with avatar, stats, and settings

## Project Structure

- `src/components` - reusable UI components
- `src/pages` - page views for the app
- `src/store` - Zustand state stores for auth, cases, and notebook
- `src/services` - Axios API service with interceptors
- `src/data` - realistic mock game data
- `src/theme.ts` - theme tokens for consistent styling

## Getting Started

```bash
npm install
npm run dev
```

Open the app at `http://localhost:4173`.

## Build

```bash
npm run build
```

## Notes

This project is designed as a hackathon-ready frontend prototype with a polished UI, responsive interaction, and mock AI-driven gameplay flow. The API layer is set up for future backend integration.
