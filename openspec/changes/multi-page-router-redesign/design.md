## Context

Current state: Single-page application (SPA) with all content in one Landing.jsx, using scroll-based navigation via smooth scrolling to element IDs. Navigation header uses a scroll listener to detect current section and highlight corresponding nav link. Background is pure white (#FFFFFF), team section displays 6 placeholder members, How It Works section uses vertically-centered cards.

Constraints:
- Must remain static/client-side (no backend)
- Maintain Cupertino design system consistency
- Compatible with existing deployment platforms (Vercel, Netlify, GitHub Pages)
- Support browser history/back button navigation
- Preserve existing responsive breakpoints (320px, 640px, 1024px)

## Goals / Non-Goals

**Goals:**
- Implement React Router v6+ for independent page-based routing
- Update visual design: apply cream/beige background (#FFFBF5 or #FFF9F3), update How It Works cards to horizontal left-to-right layout
- Adjust team component to show 3 members instead of 6
- Add external GitHub link to documentation CTA
- Maintain mobile-first responsive design across all pages
- Enable future scalability for blog/documentation sections

**Non-Goals:**
- Backend API implementation (remains static)
- Database integration
- Authentication/user accounts
- Dark mode toggle (phase 2)
- Analytics implementation (phase 2)
- Component library refactoring (leave Button, Card, etc. unchanged except color adjustments)

## Decisions

### 1. React Router Architecture

**Decision**: Use React Router v6 with BrowserRouter at App level, separate page components for each route, shared Header/Footer/Layout wrapper.

**Rationale**: 
- BrowserRouter at root ensures entire app uses consistent routing context
- Page-level components keep code organized and scalable
- Shared Header/Footer remain consistent across pages
- Enables future nested routes (e.g., `/about/careers`, `/docs/guide`)

**Alternative Considered**: Context API + custom routing → Too much boilerplate; Router handles it better

**Implementation Pattern**:
```
App.jsx (BrowserRouter)
├── Header (shared across all routes)
├── Routes
│   ├── Route path="/" element={<HomePage />}
│   ├── Route path="/how-it-works" element={<HowItWorksPage />}
│   ├── Route path="/team" element={<TeamPage />}
│   └── Route path="/about" element={<AboutPage />}
└── Footer (shared across all routes)
```

### 2. Color Scheme Implementation

**Decision**: Apply cream/beige background (#FFFBF5) globally via index.css body/background, update all section backgrounds to use this tone instead of white.

**Rationale**:
- Single CSS variable update cascades cleanly
- Maintains text contrast ratios (WCAG AA compliance)
- Warm tone provides professional yet approachable aesthetic

**Changes**:
- Update `--color-background` in tokens.js to `#FFFBF5`
- Update Card default background to light beige variant (`#FFFEF7`)
- Button hover states adjust to new background tone (ensure contrast)
- Section backgrounds shift from `--neutral-50` to cream variants

### 3. How It Works Card Layout

**Decision**: Convert from vertically-centered card stack with emoji indicators to horizontal left-to-right flow using CSS Grid (desktop) or flex column (mobile).

**Rationale**:
- Left-to-right flow matches reading direction and implies workflow progression
- Better visual storytelling for the 6-step process
- Takes advantage of wider desktop viewports

**Implementation**:
```
Desktop (1024px+): 
  Grid 3 columns × 2 rows, cards display left-to-right
  Arrow connectors positioned horizontally between cards

Tablet (640-1023px):
  Grid 2 columns × 3 rows, same flow maintained

Mobile (320-639px):
  Flex column, vertical stack, arrows positioned below each card
```

### 4. Team Member Count: 6 → 3

**Decision**: Update TeamSection to render exactly 3 team member cards (hard-coded), remove the remaining 3 placeholders.

**Rationale**: Reflects actual current team size, removes visual clutter, allows better card sizing and spacing

**Changes**:
- Update `teamMembers` array in TeamSection.jsx to 3 entries
- Grid already responsive (will show 1-col mobile, 2-col tablet, 3-col desktop) so no layout changes needed

### 5. Documentation CTA as External Link

**Decision**: Add `href` prop to Button component (defaults to undefined for interactive/onClick buttons, but supports string URLs). "View Documentation" button uses `href="https://github.com/EliaquimI/GibborHackaton"` with `target="_blank" rel="noopener noreferrer"`.

**Rationale**:
- Semantic HTML: use <a> tag under the hood when href is provided
- Handles both internal routes (via Link from React Router) and external URLs
- Maintains button styling/UX

**Alternative Considered**: Create separate external `<a>` element → Less cohesive; Button component should handle this

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Old bookmarks become invalid | Users lose direct URLs to specific sections | Document URL migration; potentially add redirects in router (e.g., /#how-it-works → /how-it-works) |
| Router initial load slightly slower than single page | Negligible (Router bundle ~50KB gzipped) | Lazy load routes using React.lazy() if bundle grows |
| Mobile nav hamburger needs refactor for routing | Breaking change to Header logic | Update Header.jsx to use Link from react-router-dom instead of scroll logic |
| Warm background reduces contrast on some text | WCAG compliance risk | Test contrast ratios (target WCAG AA); may need text darkening on light backgrounds |
| How It Works horizontal layout breaks on very small screens | Mobile UX degradation | Use vertical fallback stack for <480px devices |

## Migration Plan

**Phase 1 - Setup (15 mins)**
1. Install react-router-dom: `npm install react-router-dom`
2. Update App.jsx to wrap with BrowserRouter, define Routes

**Phase 2 - Refactor Existing Content (45 mins)**
1. Create new page components (HomePage, HowItWorksPage, TeamPage, AboutPage)
2. Move section components from Landing.jsx into page components
3. Update Header.jsx for React Router Link navigation (remove scroll handlers)
4. Remove old Landing.jsx (or keep as utility)

**Phase 3 - Design Updates (30 mins)**
1. Update tokens.js background colors
2. Update CSS modules for cream background
3. Refactor HowItWorks layout to horizontal grid
4. Update TeamSection to 3 members

**Phase 4 - CTA Updates (10 mins)**
1. Update Button component to support href prop
2. Change "View Documentation" button href to GitHub repo
3. Test all links

**Phase 5 - QA & Build (15 mins)**
1. Test all routes: homepage, nav links, browser back button
2. Test responsive breakpoints
3. Run `npm run build` for production build verification
4. Manual smoke test on mobile device

**Rollback Strategy**: All code in git branches; revert commits if critical issues arise. Warm background only in CSS (revert to #FFFFFF if needed). Router changes all in App.jsx and Header.jsx (easy to undo).

## Open Questions

1. Should `/` redirect to `/home` for consistency, or stay as `/`? (Recommendation: stay as `/` for simplicity)
2. Do we want 404 page for invalid routes? (Recommendation: not now; add in phase 2)
3. Should "About" section link within the page or be a separate route? (Recommendation: separate route as proposed)
4. Do we preserve smooth scroll behavior when navigating between pages? (Recommendation: use scroll-to-top utility on route change)
