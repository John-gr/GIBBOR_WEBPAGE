## ADDED Requirements

### Requirement: Horizontal card layout for How It Works section
The How It Works cards SHALL be arranged in a horizontal left-to-right flow instead of vertical centered stacking. On desktop (1024px+), cards SHALL display in a 3-column grid (6 cards = 2 rows). On tablet (640-1023px), cards SHALL display in a 2-column grid. On mobile (≤639px), cards SHALL stack vertically.

#### Scenario: Desktop layout shows 3 columns
- **WHEN** user views How It Works section on desktop (1024px+)
- **THEN** cards are arranged in 3 columns × 2 rows with left-to-right reading order maintained

#### Scenario: Tablet layout shows 2 columns
- **WHEN** user views How It Works section on tablet (640-1023px)
- **THEN** cards are arranged in 2 columns × 3 rows with responsive padding adjustments

#### Scenario: Mobile layout stacks vertically
- **WHEN** user views How It Works section on mobile (≤639px)
- **THEN** cards are arranged in a single column vertical stack with appropriate spacing

### Requirement: Card connector visualization
Visual flow indicators (arrows or connectors) between consecutive How It Works cards SHALL be adjusted to reflect horizontal layout. On desktop, connectors appear between cards horizontally. On mobile, connectors appear below each card vertically.

#### Scenario: Horizontal connectors on desktop
- **WHEN** user views How It Works on desktop
- **THEN** visual connectors (animated arrows) appear horizontally between cards indicating workflow progression

#### Scenario: Vertical connectors on mobile
- **WHEN** user views How It Works on mobile
- **THEN** connectors appear vertically below each card, maintaining visual flow in single-column layout

### Requirement: Card content readability in horizontal layout
Each card SHALL maintain clear, scannable content (emoji indicator, step number, description) readable in the horizontal flow. Card size SHALL be responsive and consistent with responsive breakpoints.

#### Scenario: Step cards display clearly in horizontal grid
- **WHEN** user views a How It Works step card
- **THEN** emoji, step title, and description are clearly visible and readable within the card dimensions

### Requirement: Responsive grid system
The grid layout SHALL use CSS Grid on desktop/tablet and flexbox on mobile. Column count and gaps SHALL adjust based on viewport width using media queries.

#### Scenario: Grid adjusts automatically on resize
- **WHEN** user resizes browser window from 1024px to 640px
- **THEN** layout smoothly re-flows from 3-column to 2-column grid without jumping or text overflow
