# Copilot / AI Agent Instructions for WithinTemptationReact

Purpose: give an AI coding agent the minimum, high-value context to be productive quickly in this repository.

- **Project type:** React + TypeScript app scaffolded for Vite. Entry: `src/main.tsx`.
- **Build & dev commands:**
  - Dev: `npm run dev` (runs `vite`).
  - Build: `npm run build` (runs `tsc -b && vite build`).
  - Lint: `npm run lint` (runs `eslint .`).
  - Preview: `npm run preview` (runs `vite preview`).

- **Where to look first:**
  - App root: `src/App.tsx` — top-level state, menu-building logic and routing of pages.
  - Entrypoint: `src/main.tsx`.
  - Data model for albums & audio: `src/audio.tsx` — contains the `albums` array, audio file paths, and track objects.
  - Components: `src/components/` — small presentational and stateful components (e.g., `HeroPage.tsx`, `NavSideMenu.tsx`, `MenuList.tsx`).
  - Static assets: `public/` — contains `AudioTracks/`, `images/`, `icons/`, and fonts.

- **Big-picture architecture & conventions**
  - Single-page React app using Vite for dev HMR and build.
  - Components are colocated in `src/components/` as `.tsx` files and are imported with explicit `.tsx` extensions in the codebase (e.g. `import X from "./components/X.tsx"`). Keep this import style when editing for consistency.
  - App-level state is in `src/App.tsx`. It initializes a menu based on the `albums` defined in `src/audio.tsx` (see the `useEffect` that constructs `subAlbumMenu`).
  - Audio is loaded via the DOM `Audio` API in `src/audio.tsx` with paths like `/AudioTracks/theUnforgiving/01 - Why Not Me.mp3`. Static audio files live under `public/AudioTracks/` and are referenced by absolute paths.
  - Styling is mostly plain CSS files under `src/assets/css/` and component imports.

- **Patterns to follow when changing code**
  - Props & types: many components expect typed props (see `type MenuListOptions` in `src/components/MenuList.tsx` and `ListItem.tsx`). Keep TypeScript types consistent and export types when shared.
  - Handlers: parent components supply handler functions to menu items (e.g., `handleMenuListItemClick` passed into `NavSideMenu`). Preserve this pattern rather than adding global state libraries.
  - Mutable initialization: `src/App.tsx` mutates a local `subAlbumMenu` then sets it in state. When editing, prefer keeping initialization inside `useEffect` to avoid breaking first-render logic.

- **Integration points & external deps**
  - `react-player` and `react-youtube` are declared in `package.json` — check for their usage before removing.
  - Vite plugin: `@vitejs/plugin-react` is enabled in `vite.config.ts`.

- **Files to edit for common tasks**
  - Add/remove albums or tracks: edit `src/audio.tsx` (update `albums` array and ensure matching files under `public/AudioTracks/`).
  - Change menu text or structure: edit `src/App.tsx` where `navMenuItemsArray` and `subAlbumMenu` are constructed.
  - Update styling: edit `src/assets/css/*.css` and component imports.

- **Debugging tips**
  - If `npm run dev` fails, run `vite` in a terminal to capture the full error; also run `tsc -v` and `npm run lint` to surface type/lint issues.
  - Missing static assets usually cause runtime 404s — check the `public/` paths and ensure URLs matched (paths in `src/audio.tsx` are absolute from site root).

- **What not to change without confirmation**
  - Do not change the audio loading approach (new Audio(...)) without verifying the browser compatibility and playback flow; many UI components depend on Audio elements created in `src/audio.tsx`.
  - Avoid introducing global state libraries; this codebase passes handlers/props and initializes menus in `App.tsx` intentionally.

If anything above is unclear or you want the instructions expanded (examples for common edits, or test/build checks), tell me which area to expand. 
