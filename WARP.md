# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
npm run dev
```
Starts the Vite development server with HMR (Hot Module Replacement).

### Build
```bash
npm run build
```
Creates a production build using Vite.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Linting
```bash
npm run lint
```
Runs ESLint on the codebase. The project uses ESLint with React-specific plugins (react-hooks, react-refresh).

### Code Formatting (Biome)
The project also has Biome configured for formatting and linting:
```bash
npx biome check .
```
Checks files for formatting and linting issues.

```bash
npx biome check --write .
```
Automatically fixes formatting and linting issues.

## Architecture

### Tech Stack
- **Framework**: React 19 with Vite
- **3D Graphics**: Three.js via React Three Fiber (@react-three/fiber) and Drei (@react-three/drei)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP with @gsap/react
- **Additional Libraries**:
  - `react-responsive` for responsive breakpoints
  - `leva` for debug controls (currently commented out)
  - `maath` for math utilities and easing
  - `react-globe.gl` for globe visualizations

### Project Structure
```
src/
├── components/     # Reusable 3D and UI components
├── sections/       # Page sections (hero, about, projects, contact, etc.)
├── constants/      # Configuration data (nav links, project data, etc.)
├── main.jsx        # App entry point
└── App.jsx         # Main app component composing all sections
```

### Component Architecture
The app follows a **section-based layout** where `App.jsx` composes multiple page sections:
- Navbar
- Hero (with 3D scene)
- About
- Projects
- Clients
- Experience
- Contact
- Footer

### 3D Scene Architecture
The Hero section contains the main Three.js scene using React Three Fiber:
- **Canvas**: Top-level container from @react-three/fiber
- **Suspense**: Wraps 3D components with `CanvasLoader` fallback
- **HeroCamera**: Custom camera controller with pointer-based rotation (disabled on mobile)
- **3D Models**: HackerRoom (main scene), with optional Target, ReactLogo, Cube, and Rings components
- **Lighting**: Ambient and directional lights
- **Responsive Sizing**: Uses `calculateSizes()` utility from constants for responsive positioning

### Responsive Design
The project uses `react-responsive` with three breakpoints:
- **isSmall**: maxWidth 440px
- **isMobile**: maxWidth 768px
- **isTablet**: minWidth 768px, maxWidth 1024px

These are passed to `calculateSizes()` to adjust 3D model scales and positions.

## Code Style

### Formatting
- **Indentation**: Tabs (configured in biome.json)
- **Quotes**: Double quotes for JavaScript
- **Unused Variables**: ESLint rule allows uppercase-prefixed unused vars (e.g., constants)

### File Naming
- Components use kebab-case: `hero-camera.jsx`, `canvas-loader.jsx`
- Sections use kebab-case: `hero.jsx`, `about.jsx`

### Import Organization
Biome is configured to organize imports automatically on save.

## 3D Development Notes

### Debug Tools
The project has `leva` installed for debugging 3D scenes. You can uncomment the Leva controls in `hero.jsx`:
```jsx
// import { Leva, useControls } from "leva";
// <Leva />
```

### Camera Controls
OrbitControls code is present but commented out in the Hero section. To enable manual camera control during development, uncomment the OrbitControls component.

### 3D Assets
Models, textures, and assets are stored in `/public`:
- `/public/models/` - 3D models
- `/public/textures/` - Texture files and project videos
- `/public/assets/` - Images and other static assets

## Data Management

Project data (projects, client reviews, navigation) is centralized in `src/constants/index.js`. Update this file to modify content displayed in sections.
