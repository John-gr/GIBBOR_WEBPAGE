## Why

The Gibbor website must present the team with real, authentic imagery and correct branding. Current placeholder avatars from DiceBear reduce credibility and hide the real people behind the project. The team should be identified as **Gibborim**, while the product/project remains **Gibbor**.

## What Changes

- Replace placeholder team avatar URLs in `src/components/landing/TeamSection.jsx` with real photos served from `/public/team`.
- Update team card data to reference the actual image filenames that correspond to each person.
- Correct copy and branding so the people are presented as **Gibborim** and the product is still **Gibbor**.
- Keep the change static and deployable on Vercel with no backend required.

## Capabilities

### Modified Capabilities
- `team-section`: Use real team photographs and correct branding text.
- `team-page`: Render the team section with static assets from the public folder.

## Impact

- **Frontend-only change** in the existing Vite + React app.
- **Static assets** served directly from Vercel via `/public/team`.
- Increases trust and professionalism by replacing generated placeholders with real team photos.
- Requires a short content update and verification of image loading in preview.
