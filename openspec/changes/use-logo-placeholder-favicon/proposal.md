## Why

The current tab icon uses the default SVG favicon, but the repository already contains a real project logo at `public/logo_placeholder.png`. Using this logo in the browser tab will strengthen branding and make the site appear more polished and cohesive.

## What Changes

- Update the browser favicon to use `public/logo_placeholder.png` instead of `public/favicon.svg`.
- Ensure the favicon path in `index.html` points to the new asset.
- Optionally verify that the current page title is appropriate for the Gibbor project.

## Capabilities

### Modified Capabilities
- `branding`: Align browser favicon with the repository logo asset.
- `static-assets`: Serve the new favicon from the existing Vite `public/` folder.

## Impact

- Minimal frontend change with no code refactor required.
- Uses the static asset already present in `public/` and requires only a small change in HTML.
- Improves brand consistency for Vercel deploys and local previews.
