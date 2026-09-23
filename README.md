# comp-js

A React component library built with Vite, TypeScript, and Tailwind CSS v4. Components ship with their own self-contained, precompiled CSS, so they render correctly regardless of whether the consuming app uses Tailwind, what version, or what theme it's configured with.

## Installation

```bash
npm install comp-js
```

Peer dependencies (install alongside):

```bash
npm install react react-dom
```

## Usage

Import the compiled stylesheet once in your app's entry point, then use components as usual:

```tsx
import "comp-js/style.css";
import { Button } from "comp-js";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## Theming

Component colors are driven by CSS custom properties with built-in defaults, so you can restyle them without touching Tailwind or knowing anything about the library's internals. For example, to recolor `Button`:

```css
:root {
  --cj-button-primary-bg: #16a34a;
  --cj-button-primary-bg-hover: #15803d;
}
```

See `src/lib/styles.css` for the full list of available variables.

## Development

```bash
npm run start    # dev server with a live showcase (src/App.tsx) for building/testing components
npm run build    # type-check and build the library to dist/
npm run test     # run the test suite (Vitest + React Testing Library)
npm run lint     # run ESLint
```

### Adding a component

1. Create `src/lib/components/<Name>/<Name>.tsx`.
2. Add a barrel `src/lib/components/<Name>/index.ts` that re-exports it.
3. Re-export the new barrel from `src/lib/components/index.ts`.
4. If the component needs themeable colors, define CSS custom properties and semantic classes in `src/lib/styles.css` (see `Button` for the pattern) rather than hardcoding Tailwind colors directly in the component — this keeps styling self-contained and consistent with how the library ships.
5. Add tests alongside the component (`<Name>.test.tsx`) and render it in `src/App.tsx` to check it visually via `npm run start`.

## Project structure

```
src/
  lib/            # the published library
    components/   # component source, one folder per component
    styles.css     # theme variables + component CSS (compiled to dist/style.css)
    index.ts       # public exports
  hooks/          # shared hooks (re-exported from the library)
  App.tsx         # local dev showcase, not shipped in the library
```
