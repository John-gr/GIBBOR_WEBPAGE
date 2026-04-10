## Why

On mobile, the page currently has no visible navbar or mobile menu, which makes navigation difficult and reduces discoverability. In addition, the footer quicklinks do not redirect users to the correct section or tab, causing confusion and broken navigation behavior.

## What Changes

- Add a responsive mobile navigation experience with a hamburger menu and visible section links.
- Keep the desktop header intact while introducing a mobile-friendly collapsed navigation that expands on tap.
- Fix footer quicklinks so they map to the correct page anchors or tabs and navigate reliably on all viewports.
- Ensure navigation state and accessibility attributes are handled correctly for mobile users.

## Impact

- Improves mobile usability by giving users a clear way to navigate the page.
- Restores trust in footer quicklinks and prevents broken or misleading navigation.
- Affects header/navigation and footer components, with possible updates to section IDs or link targets in landing page sections.
- Has low implementation risk and provides a measurable usability improvement for small-screen visitors.
