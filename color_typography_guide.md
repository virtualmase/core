# Coreweaver Labs - Color Palette and Typography Guide

## Color Palette

### Primary Colors
- **Teal (Primary):** #2A9D8F
  - Use for primary buttons, important UI elements, and accents
  - Represents innovation and technology

- **Dark Blue (Secondary):** #264653
  - Use for headers, footers, and secondary elements
  - Represents trust and stability

- **Gold (Accent):** #E9C46A
  - Use for highlights, call-to-action elements, and special features
  - Represents value and premium quality

### Neutral Colors
- **Off-white (Light Background):** #F5F5F0
  - Use for page backgrounds and light sections
  - Creates a clean, modern feel

- **White (Card Background):** #FFFFFF
  - Use for cards, content containers, and form elements
  - Provides contrast against the off-white background

- **Dark Gray (Text):** #333333
  - Use for body text and headings
  - Ensures readability while being softer than pure black

- **Light Gray (Subtle Elements):** #E0E0E0
  - Use for dividers, subtle backgrounds, and disabled states
  - Creates visual hierarchy without being distracting

### Status Colors
- **Success Green:** #4CAF50
  - Use for success messages, "LIVE" badges, and positive indicators

- **Info Blue:** #2196F3
  - Use for information messages, "BETA" badges, and neutral indicators

- **Warning Orange:** #FF9800
  - Use for warning messages and attention-requiring elements

- **Error Red:** #F44336
  - Use for error messages and critical alerts

## Typography

### Headings
- **Font Family:** Space Grotesk
- **Weights:** 500 (Medium), 700 (Bold)
- **Sizes:**
  - H1: 3.5rem (56px)
  - H2: 2.5rem (40px)
  - H3: 1.8rem (28.8px)
  - H4: 1.5rem (24px)
  - H5: 1.25rem (20px)
  - H6: 1rem (16px)
- **Line Height:** 1.2
- **Letter Spacing:** 0px (H1, H3-H6), 1px (H2)
- **Text Transform:** Uppercase for H2 only

### Body Text
- **Font Family:** Inter
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Sizes:**
  - Body Large: 1.2rem (19.2px)
  - Body Regular: 1rem (16px)
  - Body Small: 0.875rem (14px)
  - Caption: 0.75rem (12px)
- **Line Height:** 1.6
- **Letter Spacing:** 0px

### Buttons and UI Elements
- **Font Family:** Inter
- **Weight:** 600 (Semi-Bold)
- **Size:** 0.875rem (14px) to 1rem (16px)
- **Text Transform:** Uppercase for primary buttons
- **Letter Spacing:** 1px

## Usage Guidelines

### Headings
- Use Space Grotesk for all headings to maintain the tech-forward, modern aesthetic
- Maintain consistent heading hierarchy (H1 → H6) for proper document structure
- Use uppercase for H2 section titles to create visual separation between major sections

### Body Text
- Use Inter for all body text, form elements, and UI components
- Maintain a minimum font size of 14px for readability
- Use appropriate font weights to create hierarchy:
  - 400 (Regular) for general body text
  - 500 (Medium) for slightly emphasized text
  - 600 (Semi-Bold) for subheadings and important UI elements
  - 700 (Bold) for strong emphasis within body text

### Color Application
- Maintain sufficient contrast between text and background colors
- Use the primary color (Teal) sparingly for maximum impact
- Apply the accent color (Gold) only for elements that need special attention
- Use status colors consistently across the interface

### Accessibility Considerations
- Ensure text has sufficient contrast against backgrounds (WCAG AA compliance)
- Avoid using color alone to convey meaning
- Maintain a minimum text size of 14px for body text
- Ensure interactive elements have clear focus states

## Font Implementation

### Web Fonts
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');

/* Font Variables */
:root {
  --heading-font: 'Space Grotesk', sans-serif;
  --body-font: 'Inter', sans-serif;
}
```

### Font Fallbacks
- For Space Grotesk: sans-serif
- For Inter: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
