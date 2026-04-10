## Overview

This change updates the team section to use real static images from `public/team` instead of placeholder avatars from an external image generator. It also corrects team naming so the cohort is called `Gibborim` while preserving `Gibbor` as the project name.

## Static Asset Strategy

- Add real photos to `public/team/`.
- Use image paths like `/team/jane-doe.jpg`, `/team/john-smith.jpg`, and `/team/sarah-johnson.jpg`.
- If the real files use different names, map each team member explicitly in the component data.
- Do not import image files in React code; rely on Vite/Vercel serving `public/` assets as static URLs.

## Component Update

- In `src/components/landing/TeamSection.jsx`, replace external `dicebear.com` `image` values with the corresponding `/team/<filename>` URL.
- Keep the current card layout and responsive styles intact.
- Maintain accessible `alt` text using each member's name.
- Ensure the team copy uses **Gibborim** where the team name appears.

## Branding Correction

- Update the team heading or descriptive copy to present the team as `Gibborim`.
- Ensure references to the product/project continue to use `Gibbor`.
- This is a naming clarification, not a product rename.

## Validation

- Preview the team page locally after the change to confirm all images load correctly.
- Confirm that Vercel static hosting will serve the images from `/team/...` without additional configuration.
