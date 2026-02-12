# BW Supply Chain — Design System

A refined, professional design language for a global supply chain consultancy. Every element communicates precision, trust, and international reach.

---

## 1. Color Palette

| Token              | Hex       | Usage                                      |
|---------------------|-----------|---------------------------------------------|
| **Navy** (Primary)  | `#0a192f` | Headers, hero backgrounds, footer, nav text |
| **Gold** (Accent)   | `#c5a059` | Highlights, borders, CTAs, hover states     |
| **Charcoal**        | `#1a202c` | Body headings, primary text                 |
| **Slate**           | `#4a5568` | Body copy                                   |
| **Ash**             | `#718096` | Captions, secondary text, meta              |
| **Pearl**           | `#f7fafc` | Alternate section backgrounds               |
| **Fog**             | `#e2e8f0` | Borders, dividers                           |
| **White**           | `#ffffff` | Cards, primary backgrounds                  |

---

## 2. Typography Hierarchy

**Font Families**
- Headings: *Playfair Display* (serif) — conveys gravitas and heritage
- Body & UI: *Inter* (sans-serif) — clean, modern readability

| Level       | Font            | Size     | Weight | Line-Height | Letter-Spacing | Usage                        |
|-------------|-----------------|----------|--------|-------------|----------------|------------------------------|
| **Display** | Playfair Display | 4rem     | 700    | 1.1         | -0.02em        | Hero headline                |
| **H1**      | Playfair Display | 3rem     | 700    | 1.2         | -0.01em        | Page titles                  |
| **H2**      | Playfair Display | 2.25rem  | 600    | 1.3         | 0              | Section headings             |
| **H3**      | Playfair Display | 1.5rem   | 600    | 1.4         | 0              | Subsection headings          |
| **H4**      | Inter            | 1.125rem | 600    | 1.5         | 0              | Card headings, labels        |
| **Overline**| Inter            | 0.75rem  | 600    | 1           | 3px            | Section labels (uppercase)   |
| **Body**    | Inter            | 1rem     | 400    | 1.7         | 0              | Paragraph text               |
| **Body Lg** | Inter            | 1.15rem  | 400    | 1.8         | 0              | Lead paragraphs, intros      |
| **Small**   | Inter            | 0.875rem | 400    | 1.6         | 0              | Captions, footnotes          |

---

## 3. Spacing Scale

Based on an 8px grid:

| Token   | Value  | Usage                              |
|---------|--------|------------------------------------|
| `xs`    | 4px    | Tight inline spacing               |
| `sm`    | 8px    | Icon gaps, tight padding           |
| `md`    | 16px   | Default element spacing            |
| `lg`    | 24px   | Card padding, paragraph margins    |
| `xl`    | 40px   | Section heading margins            |
| `2xl`   | 64px   | Section inner padding              |
| `3xl`   | 100px  | Section vertical padding           |
| `4xl`   | 120px  | Hero and major section padding     |

---

## 4. Buttons

### Primary Button
- Background: Gold (`#c5a059`)
- Text: White, Inter 500, 0.95rem
- Padding: 14px 32px
- Border: 2px solid Gold
- Border-radius: 0 (sharp — conveys precision)
- Hover: Background transparent, text Gold, border Gold
- Transition: all 0.3s ease

### Secondary Button (Outlined)
- Background: Transparent
- Text: Navy, Inter 500
- Border: 2px solid Navy
- Hover: Background Navy, text White

### Ghost Button (Text)
- Background: none
- Text: Gold, Inter 500
- Decoration: none; on hover, underline offset 4px
- Arrow indicator (`→`) appended

### Contact Button (Nav)
- Background: Navy
- Text: White, uppercase, 0.85rem, letter-spacing 1px
- Padding: 10px 24px
- Hover: Background Gold

---

## 5. Cards

### Service Card
- Background: White
- Padding: 40px
- Border-top: 4px solid transparent
- Shadow: `0 4px 6px rgba(0,0,0,0.07)`
- Hover: border-top Gold, translateY(-5px), shadow `0 20px 40px rgba(0,0,0,0.08)`
- Transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)

### Showcase/Case Study Card
- Background: White
- Padding: 0 (image top, content bottom)
- Border: 1px solid Fog
- Shadow: `0 2px 8px rgba(0,0,0,0.04)`
- Hover: shadow `0 12px 32px rgba(0,0,0,0.1)`, translateY(-4px)
- Image overlay on hover: slight darken

### Feature Card (Accent border-left)
- Background: White
- Padding: 32px
- Border-left: 4px solid Gold
- Shadow: `0 2px 5px rgba(0,0,0,0.05)`

---

## 6. Interactions & Micro-animations

| Element            | Trigger | Animation                                    | Duration |
|--------------------|---------|----------------------------------------------|----------|
| **Links**          | Hover   | Color → Gold                                 | 0.3s     |
| **Buttons**        | Hover   | Background/color swap                        | 0.3s     |
| **Cards**          | Hover   | Lift + shadow intensify                      | 0.4s     |
| **Nav links**      | Hover   | Color → Gold, active state underline         | 0.3s     |
| **Footer links**   | Hover   | Color → Gold, paddingLeft +5px               | 0.3s     |
| **FAQ accordion**  | Click   | Max-height expand/collapse, icon rotate 45°  | 0.3s     |
| **Policy tabs**    | Click   | Content fade-in (opacity 0→1, Y 10→0)       | 0.5s     |
| **Scroll reveal**  | Scroll  | Fade up (opacity 0→1, Y 30→0) via observer  | 0.6s     |
| **Overline label** | Static  | Gold left-border accent bar                  | —        |

---

## 7. Layout

- **Max width:** 1200px, centered
- **Grid system:** CSS Grid, 30px gap default
- **Section padding:** 100px vertical (desktop), 60px (mobile)
- **Hero height:** 90vh
- **Header:** Sticky, white with blur backdrop, 80px height
- **Footer:** Navy background, 80px top padding, 30px bottom

### Breakpoints
| Name     | Width     | Behavior                              |
|----------|-----------|---------------------------------------|
| Desktop  | > 1024px  | Full grid layouts                     |
| Tablet   | ≤ 1024px  | 2-column → single column collapse     |
| Mobile   | ≤ 768px   | Single column, nav collapsed, stacked |

---

## 8. Iconography & Decorative Elements

- **Section dividers:** 80px wide, 3px tall Gold bar, centered
- **List markers:** 8px Gold circles (::before pseudo-element)
- **Overline labels:** Uppercase, letter-spacing 3px, Gold left-border 3px
- **Quote accents:** Left-border 4px Gold on blockquotes
- **Arrow indicators:** `→` character appended to ghost links

---

## 9. Imagery Guidelines

- **Hero images:** Full-bleed, dark overlay (rgba 0,0,0,0.55)), high-contrast text
- **Card images:** 16:10 aspect ratio, object-fit cover
- **Placeholder pattern:** Navy background, centered italic text

---

## 10. Component Summary

| Component        | Location        | Notes                              |
|------------------|-----------------|------------------------------------|
| Header           | `components/`   | Sticky nav — Home, Showcase only   |
| Footer           | `components/`   | Quick Links, Contact, Hours        |
| Hero             | `index.html`    | Full viewport, overlay, CTA        |
| Service Cards    | `index.html`    | 3-up grid, hover lift              |
| Capability Blocks| `index.html`    | Full-width alternating sections    |
| Showcase Cards   | `showcase.html` | Case study grid with images        |
| FAQ Accordion    | `faq.html`      | Click-expand, icon rotation        |
| Policy Tabs      | `policy.html`   | Sidebar tabs, content fade-in      |
