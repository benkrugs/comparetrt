# Professional Medical Authority Design System

## CSS Variables

```css
:root {
  --color-primary: #1a56a8;          /* Medical blue */
  --color-primary-dark: #0d3b7a;     /* Darker blue for hover */
  --color-primary-light: #e8f0fe;    /* Light blue backgrounds */
  --color-heading: #1a1a2e;          /* Near-black for headings */
  --color-body: #374151;             /* Gray for body text */
  --color-muted: #6b7280;            /* Muted gray */
  --color-bg: #ffffff;               /* White backgrounds */
  --color-bg-alt: #f8fafb;           /* Alt background */
  --color-border: #e2e8f0;           /* Borders */
  --color-success: #059669;          /* Green checkmarks */
  --color-danger: #dc2626;           /* Red X marks */
  --color-cta: #1a56a8;              /* CTA buttons */
  --color-dark: #1a2e44;             /* Dark navy headers */
  
  --font-heading: 'Inter', -apple-system, system-ui, sans-serif;
  --font-body: 'Georgia', 'Times New Roman', serif;
  --font-ui: 'Inter', system-ui, sans-serif;
  
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}
```

## Typography

- **Headings**: Inter (sans-serif) - authoritative, modern
- **Body**: Georgia (serif) - readable, editorial
- **UI elements**: Inter (sans-serif) - clean, professional

## No Emojis

Use CSS for visual indicators:
- Checkmarks: `content: '\2713'` in green
- X marks: `content: '\2717'` in red

## Scoring

- **Bar style**: Horizontal progress bars (not circular badges)
- **Colors**: Medical blue (#1a56a8) for scores

## Buttons

- **Border radius**: 6px (not 100px rounded)
- **Style**: Solid, professional
- **Colors**: Medical blue primary, white text

## Tables

- **Header**: Dark navy (#1a2e44) background, white text
- **Rows**: Alternating white/light gray
- **Borders**: Light gray (#e2e8f0)

## Cards

- **Background**: White with subtle shadow
- **Border**: 1px solid light gray
- **Radius**: 8px
- **Padding**: 24-32px

## Applied To

- [x] cost.astro
- [ ] [slug].astro (main review)
- [ ] reviews.astro
- [ ] legit.astro
- [ ] discount.astro
