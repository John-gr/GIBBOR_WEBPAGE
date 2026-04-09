## MODIFIED Requirements

### Requirement: CTA button supports external URLs
The Button component SHALL support an optional `href` prop for external links. When href is provided and is an absolute URL (http:/https:), the button SHALL render as an `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`.

#### Scenario: Documentation button links to external GitHub repo
- **WHEN** "View Documentation" button is clicked with href="https://github.com/EliaquimI/GibborHackaton"
- **THEN** new browser tab opens to the GitHub repository

#### Scenario: Button maintains styling with external link
- **WHEN** Button component renders with href prop
- **THEN** button styling (size, variant, colors) remains identical whether used as link or button

#### Scenario: Internal router links still supported
- **WHEN** Button is used without href prop or with an onClick handler
- **THEN** button behaves as an interactive element without navigation attribute
