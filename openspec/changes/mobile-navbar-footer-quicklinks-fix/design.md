## Context

The current landing page experience is missing a mobile-specific navigation affordance. Desktop users may still be able to access the page content through inline links, but mobile users have no clear navigation menu. The footer quicklinks are also not wired to the right section anchors or tabs, which undermines user trust and makes it harder to move through the page.

## Goals

- Provide a clear and consistent navigation experience on mobile devices.
- Add a collapsible mobile nav menu with the same section links used in desktop navigation.
- Fix footer quicklinks so they point to the correct section IDs or tabs.
- Maintain the existing desktop layout while improving mobile behavior.
- Preserve accessibility with keyboard focus, aria labels, and responsive touch targets.

## Approach

1. **Unify navigation links**
   - Use a single navigation data source for header and footer links to avoid mismatched targets.
   - Ensure each link points to a valid section ID in the page.

2. **Mobile header/navigation**
   - Add a hamburger menu button in `Header.jsx` that toggles mobile navigation.
   - Display mobile nav items in a panel or dropdown when opened.
   - Keep the default desktop header unchanged for larger screens.
   - Use `aria-expanded`, `aria-controls`, and visually hidden labels for screen reader users.

3. **Footer quicklinks**
   - Update quicklink href values in `Footer.jsx` to match the normalized nav targets.
   - Prefer the same shared `navItems` array used by the header.
   - Ensure each quicklink opens the expected anchor on click.

4. **Section anchors**
   - Confirm that page sections have explicit IDs such as `#home`, `#features`, `#team`, or whichever anchors are used.
   - Add missing IDs if necessary to support footer and header anchor navigation.

5. **Responsive styling**
   - Implement mobile-first CSS for the nav menu.
   - When the mobile menu is open, ensure it is fully visible and easy to tap.
   - Close the menu automatically when a link is selected.

## Implementation Details

- Use a shared `navItems` data array exported from the landing page or a shared nav config.
- Add `mobileMenuOpen` state to the `Header` component.
- Render an inline desktop nav for screen widths above the desktop breakpoint, and a hamburger button below it.
- For mobile, render a full-screen overlay or slide-down panel with nav items.
- Use a simple CSS transition for opening/closing the mobile panel.
- Ensure the mobile toggle is accessible and that focus remains visible.

## Accessibility

- Mark the hamburger button with `aria-label="Open navigation menu"` and `aria-expanded={isOpen}`.
- When the mobile menu is open, use `aria-hidden` or proper semantics for the underlying page content if needed.
- Ensure nav links are keyboard-focusable and easy to activate.
- Use touch-friendly spacing around mobile menu items.

## Success Criteria

- On mobile, a visible hamburger icon appears and tapping it reveals the page navigation.
- Mobile nav links close the menu after navigation and move the user to the selected section.
- Footer quicklinks navigate to the correct section or tab without error.
- Desktop navigation remains unchanged and continues to work normally.
- No broken links remain in the footer or header.
