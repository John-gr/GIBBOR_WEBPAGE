## 1. Setup & Dependencies

- [x] 1.1 Install react-router-dom: `npm install react-router-dom`
- [x] 1.2 Verify installation in package.json (should show react-router-dom in dependencies)

## 2. Router Configuration

- [x] 2.1 Update src/App.jsx: Import BrowserRouter, Routes, Route from react-router-dom
- [x] 2.2 Wrap App component with BrowserRouter at root level
- [x] 2.3 Define Routes container and import page components (to be created in step 3)
- [x] 2.4 Test that App renders without errors (may show route warnings until pages exist)

## 3. Create Page Components

- [x] 3.1 Create src/pages/HomePage.jsx: Move <HeroSection /> and <ProjectOverview /> sections
- [x] 3.2 Create src/pages/HowItWorksPage.jsx: Move <HowItWorks /> section with updated layout
- [x] 3.3 Create src/pages/TeamPage.jsx: Move <TeamSection /> with updated team count (3 members)
- [x] 3.4 Create src/pages/AboutPage.jsx: Create new About page (placeholder content or move existing)
- [x] 3.5 Ensure each page component wraps content in a <main> element and has id for consistency

## 4. Update Header Navigation

- [x] 4.1 Update src/components/landing/Header.jsx: Import Link from react-router-dom
- [x] 4.2 Replace scroll-based nav links with Link components pointing to routes (/, /how-it-works, /team, /about)
- [x] 4.3 Update active link detection: Replace scroll listener with useLocation() hook from react-router-dom
- [x] 4.4 Update mobile hamburger menu to use Link components instead of scroll handlers
- [x] 4.5 Test Header navigation: Clicking links should change URL and render correct page

## 5. Update Button Component for External Links

- [x] 5.1 Update src/components/ui/Button.jsx: Add optional href prop to Button component
- [x] 5.2 Update button JSX: Conditionally render as `<a>` tag when href is provided
- [x] 5.3 Add target="_blank" rel="noopener noreferrer" attributes when href is external URL
- [x] 5.4 Preserve all Button styling and variants when rendered as link

## 6. Update CTA Links

- [x] 6.1 Update src/components/landing/HeroSection.jsx: Add external href to "View Documentation" button
- [x] 6.2 Set href to "https://github.com/EliaquimI/GibborHackaton"
- [x] 6.3 Test button: Clicking should open GitHub in new tab

## 7. Update How It Works Layout

- [x] 7.1 Update src/components/landing/HowItWorks.jsx: Convert from vertical centered layout to CSS Grid
- [x] 7.2 Update HowItWorks.module.css: Change grid layout rules for desktop 3-col, tablet 2-col, mobile 1-col
- [x] 7.3 Reconfigure card connector arrows: Horizontal on desktop (between cards), vertical on mobile (below cards)
- [x] 7.4 Update card animation/transition: Ensure smooth rendering in new layout
- [x] 7.5 Test responsive layout: Resize browser and verify grid changes from 1→2→3 columns

## 8. Update Team Component

- [x] 8.1 Update src/components/landing/TeamSection.jsx: Reduce teamMembers array from 6 to 3 entries
- [x] 8.2 Keep team member data structure (name, title, bio, avatar) consistent
- [x] 8.3 Test Team page: Should display exactly 3 cards with no empty spaces

## 9. Color Scheme Updates - Design Tokens

- [x] 9.1 Update src/styles/tokens.js: Change background color from #FFFFFF to #FFFBF5
- [x] 9.2 Update neutral-50 variant to cream tone (e.g., #FFFEF7)
- [x] 9.3 Verify all color export keys remain unchanged (only values updated)

## 10. Color Scheme Updates - CSS

- [x] 10.1 Update src/index.css: Change body background-color to use new --color-background variable
- [x] 10.2 Update --color-background CSS custom property value to #FFFBF5
- [x] 10.3 Test contrast ratios: Verify text remains readable on new background (WCAG AA compliant)

## 11. Component Styling Adjustments

- [x] 11.1 Update src/components/ui/Card.module.css: Change default card background from white to light beige (#FFFEF7)
- [x] 11.2 Update src/components/landing/ProjectOverview.module.css: Adjust tech card backgrounds
- [x] 11.3 Update src/components/landing/TeamSection.module.css: Adjust team card backgrounds
- [x] 11.4 Update src/components/landing/HeroSection.module.css: Adjust background layer if needed
- [x] 11.5 Test all cards: Verify backgrounds and hover states display correctly

## 12. Layout & Shared Components

- [x] 12.1 Verify Footer renders on all pages (shared component working correctly)
- [x] 12.2 Test Layout wrapper component: Flex column layout maintained across all routes
- [x] 12.3 Verify no layout shift or visual jumps when navigating between pages

## 13. Mobile Responsiveness Testing

- [x] 13.1 Test mobile breakpoint (≤639px): All pages render correctly, single column layouts
- [x] 13.2 Test tablet breakpoint (640-1023px): Two-column grids where applicable
- [x] 13.3 Test desktop breakpoint (1024px+): Three-column grids, full-width optimized layouts
- [x] 13.4 Test hamburger menu: Opens/closes on mobile, navigation works correctly
- [x] 13.5 Test touch targets: All interactive elements ≥44px on mobile

## 14. Navigation & Routing QA

- [x] 14.1 Test direct URL access: Navigate directly to each route (/how-it-works, /team, /about)
- [x] 14.2 Test browser back/forward buttons: History navigation works correctly
- [x] 14.3 Test header links: Clicking each nav link navigates to correct route
- [x] 14.4 Test active link highlighting: Current page link shows active state in header
- [x] 14.5 Test mobile nav: Hamburger menu links work and close after selection

## 15. CTA & Button Testing

- [x] 15.1 Test all external links: "View Documentation" button opens GitHub repo in new tab
- [x] 15.2 Test internal navigation buttons: "Learn More" and other CTAs navigate correctly
- [x] 15.3 Verify button styling: All buttons display with correct sizing, colors, and hover effects

## 16. Build & Production Verification

- [x] 16.1 Run `npm run build`: Verify production build completes without errors
- [x] 16.2 Check bundle size: Confirm react-router-dom dependency added (expect ~50KB gzipped)
- [x] 16.3 Run `npm run preview`: Test production build locally
- [x] 16.4 Verify all routes work in preview: Navigate through all pages
- [x] 16.5 Test URL deep-linking in preview: Direct access to specific routes works

## 17. Visual Regression Testing

- [x] 17.1 Screenshot comparison: Home page before/after (color scheme change)
- [x] 17.2 Screenshot comparison: How It Works page before/after (horizontal layout)
- [x] 17.3 Screenshot comparison: Team page before/after (3-member layout)
- [x] 17.4 Verify no content overflow or text truncation on any page
- [x] 17.5 Verify images/SVG scale correctly in new layouts

## 18. Accessibility & Standards

- [x] 18.1 Verify WCAG AA contrast ratios: All text readable on new cream background
- [x] 18.2 Test keyboard navigation: Tab through all interactive elements
- [x] 18.3 Test screen reader compatibility: Routes and content accessible
- [x] 18.4 Verify heading hierarchy: H1, H2, H3 tags properly ordered on each page

## 19. Documentation & Cleanup

- [x] 19.1 Remove old Landing.jsx if completely replaced (or keep as archived)
- [x] 19.2 Update README.md: Document new routing structure and page organization
- [x] 19.3 Update any internal wiki/docs with new page URLs
- [x] 19.4 Verify no unused imports or dead code in refactored files

## 20. Final QA & Deployment Prep

- [x] 20.1 Full smoke test: Navigate through entire user journey across all pages
- [x] 20.2 Cross-browser testing: Verify on Chrome, Firefox, Safari (mobile and desktop)
- [x] 20.3 Mobile device testing: Test on actual iOS and Android devices
- [x] 20.4 Lighthouse audit: Run Lighthouse and verify acceptable scores
- [x] 20.5 Ready for deployment: All tasks complete, no blockers identified
