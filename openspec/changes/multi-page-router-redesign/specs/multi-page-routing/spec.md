## ADDED Requirements

### Requirement: Multi-page routing via React Router
The application SHALL use React Router v6+ to enable independent page-based navigation with URL routing. Each major section (home, how it works, team, about) SHALL have its own URL route. The router SHALL preserve browser history (back/forward buttons work correctly) and support direct URL access to any page.

#### Scenario: User navigates via header link
- **WHEN** user clicks "How It Works" in the header navigation
- **THEN** browser URL changes to `/how-it-works` and the corresponding page component renders with smooth page transition

#### Scenario: User uses browser back button
- **WHEN** user navigates to `/how-it-works`, then clicks browser back button
- **THEN** user returns to previous page (e.g., `/`) and URL reflects the change

#### Scenario: User bookmarks a specific route
- **WHEN** user bookmarks the URL `gibbor.io/team`
- **THEN** user can visit that URL directly in a new browser session and the Team page loads correctly

### Requirement: Shared layout across routes
The Header and Footer components SHALL render consistently across all routes. All page components SHALL share the same Layout wrapper ensuring visual cohesion.

#### Scenario: Header visible on all pages
- **WHEN** user navigates between any routes (/, /how-it-works, /team, /about)
- **THEN** Header with navigation remains visible at the top of each page

#### Scenario: Footer visible on all pages
- **WHEN** user is on any page and scrolls to bottom
- **THEN** Footer renders with consistent styling and links across all pages

### Requirement: Active navigation indicator
The Header navigation SHALL display which route is currently active (highlighted state) to help users understand their location.

#### Scenario: Active link highlighting on route change
- **WHEN** user navigates to `/team`
- **THEN** the "Team" link in the header shows an active/highlighted state indicating current page

### Requirement: Route table
The application SHALL support the following routes:

| Route | Page Component | Purpose |
|-------|----------------|---------|
| `/` | HomePage | Home/Hero section with project introduction |
| `/how-it-works` | HowItWorksPage | Detailed how it works workflow |
| `/team` | TeamPage | Team member profiles |
| `/about` | AboutPage | About section |

#### Scenario: All routes accessible
- **WHEN** each route is navigated to
- **THEN** the corresponding page component renders with appropriate content

### Requirement: Mobile navigation for routing
The Header mobile hamburger menu SHALL trigger on screen sizes ≤639px and provide navigation links to all routes. Menu SHALL close after link selection.

#### Scenario: Mobile navigation link selection
- **WHEN** user taps hamburger menu on mobile (≤639px)
- **THEN** menu opens showing route links; tapping a link navigates to that route and closes the menu
