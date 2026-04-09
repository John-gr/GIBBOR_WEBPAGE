## ADDED Requirements

### Requirement: Visualize the incident response workflow step-by-step
The "How It Works" section SHALL display the complete workflow from incident trigger through evidence anchoring, broken into clear sequential steps.

#### Scenario: Workflow steps are clearly numbered
- **WHEN** user views "How It Works" section
- **THEN** section displays steps in visual sequence (e.g., Step 1, Step 2, etc.) showing: incident trigger → recording → blockchain anchoring → queryable record

#### Scenario: Each step includes clear description
- **WHEN** user views workflow steps
- **THEN** each step has brief text (1-2 sentences) explaining what happens and why

#### Scenario: Visual layout supports understanding
- **WHEN** user views steps
- **THEN** layout uses icons, connecting lines, or cards to show workflow progression clearly

### Requirement: Explain the blockchain integration flow
The section SHALL clarify how data flows from the user's phone to the blockchain and how it provides legal value.

#### Scenario: Blockchain anchoring step is explained
- **WHEN** user views "How It Works" section
- **THEN** one dedicated step explains: GPS + timestamp → hashed and written to Stellar smart contract → immutable record → queryable via GoldSky

#### Scenario: Evidence integrity process is clear
- **WHEN** user reads workflow
- **THEN** section explains: video hash stored on-chain, actual video stays on device, future comparison proves no tampering

### Requirement: Section is visually engaging for investor presentations
The "How It Works" section SHALL use design principles that make it memorable and suitable for investor pitch decks.

#### Scenario: Visual design is professional and minimalist
- **WHEN** user views section
- **THEN** design uses clean lines, adequate whitespace, professional color palette, and cohesive iconography

#### Scenario: Section is responsive across devices
- **WHEN** user views on mobile
- **THEN** workflow steps stack vertically with clear visual continuation indicators

#### Scenario: Section is responsive on desktop
- **WHEN** user views on desktop (1024px+)
- **THEN** steps may display horizontally or in grid, utilizing full width effectively
