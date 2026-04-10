## Overview

This change updates the favicon used by the app so the browser tab displays the `logo_placeholder.png` asset already stored in `public/`.

## Strategy

- Keep the change minimal and static.
- Use Vite's existing public asset handling to serve the favicon from `/logo_placeholder.png`.
- Avoid changing application code by only modifying `index.html`.

## Implementation Details

- In `index.html`, replace the current favicon link:
  - `href="/favicon.svg"`
- With the new logo asset:
  - `href="/logo_placeholder.png"`

## Validation

- Confirm the file `public/logo_placeholder.png` exists.
- After updating `index.html`, preview locally with `npm run dev` to ensure the browser tab icon updates.
- Optionally, inspect the generated `dist/` build or a Vercel preview deployment to confirm the favicon is served correctly.
