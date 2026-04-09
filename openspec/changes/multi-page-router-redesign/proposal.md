## Why

Current landing page presents all content in a single scrollable page, which works for the initial MVP. However, as the product grows and more content sections are added, the architecture needs to scale. React Router enables independent page routes, better SEO support for future blog/documentation sections, and clearer information hierarchy for users navigating between core sections (Home, How It Works, Team, About). Additionally, visual refinements (warm color scheme, horizontal card layouts, team count adjustment) improve design coherence and user experience.

## What Changes

- **Routing Structure**: Replace single-page scroll navigation with React Router-based multi-page routing
  - `/` → Home/Hero section
  - `/how-it-works` → How It Works detailed page  
  - `/team` → Team section page
  - `/about` → About section page
  - Preserve smooth transitions and active nav indicators
  
- **Visual Design Updates**:
  - Change page background from pure white to warm cream/beige tone (`#FFFBF5` or similar)
  - Reconfigure How It Works cards to horizontal left-to-right flow (instead of vertical centered)
  - Update Card component styling to match new layout orientation
  
- **Team Section**:
  - Reduce team member placeholders from 6 to 3 (shows current team size)
  - Keep same card styling and responsive grid
  
- **CTA Links**:
  - "View Documentation" button now links to GitHub repo: `https://github.com/EliaquimI/GibborHackaton`
  - Update button component to support external href prop

- **Dependencies**: Add React Router DOM to package.json

## Capabilities

### New Capabilities

- `multi-page-routing`: React Router v6+ integration enabling independent page routes, URL preservation, and browser history support
- `warm-color-scheme`: Implementation of cream/beige background color throughout app with component adjustments for contrast
- `horizontal-card-layouts`: Layout system for left-to-right card flows (replacing vertical centered stacks) with responsive fallback

### Modified Capabilities

- `team-component`: Updating team member count from 6 to 3, adjusting grid layout expectations
- `documentation-cta`: Adding support for external URL navigation in CTA buttons

## Impact

- **Files Modified**: 
  - App.jsx (add BrowserRouter and Routes)
  - package.json (add react-router-dom dependency)
  - Header.jsx (update nav link behavior for routing vs scroll)
  - HeroSection, ProjectOverview, HowItWorks, TeamSection (move to individual page components)
  - All CSS modules (color theme, layout adjustments)

- **New Files**:
  - src/pages/HomePage.jsx
  - src/pages/HowItWorksPage.jsx
  - src/pages/TeamPage.jsx
  - src/pages/AboutPage.jsx
  - Updated navigation and routing utilities

- **No Backend Required**: Remains entirely static/client-side; compatible with free deployment services (Vercel, Netlify, GitHub Pages)

- **Breaking Change**: URL structure changes; users bookmarking specific scroll positions will need updated links
