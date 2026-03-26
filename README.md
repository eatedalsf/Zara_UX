# Zara UX Redesign — Clickable Prototype

**Course:** UX/UI Design 755-01 · Spring 2026  
**Author:** Eatedal Alfadhel  
**Project:** Redesigning the dress-shopping journey on Zara.com

---

## What This Is

A fully interactive HTML prototype demonstrating a redesigned shopping journey on Zara.com. The prototype covers five screens in sequence:

1. **Homepage** — H&M-style persistent navigation with ZARA logo, category links, and icon row. Full-bleed editorial hero.
2. **Navigation Overlay** — ZARA logo as the home/close link. Consistent taxonomy (product type / collections / condition).
3. **Category (Browse + Filter/Sort)** — Trunk test applied. Breadcrumb + page title always visible. Sort and Filter separated. Pill filter bar with active chips.
4. **Product Page** — Size selector always visible before the Add button. Add button disabled until size is chosen. Scarcity signals, wishlist, delivery info, fabric table.
5. **Cart Review** — Quantity stepper (trash / count / +). Prominent order total in large display type. Clear CTA hierarchy.

The prototype also includes a full footer (email signup, link columns, social icons) and a site-wide flow indicator bar at the bottom.

---

## How to Open Locally

No build tools or server required. Just open the file directly:

1. Download or clone this repository
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)
3. Use the flow indicator bar at the bottom to navigate between screens

```
double-click index.html  →  opens in your default browser
```

Or via terminal:
```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

---

## File Structure

```
zara-ux-prototype/
├── index.html      # All screen markup (homepage, nav, category, product, cart)
├── style.css       # All styling — design tokens, layout, components, screens
├── script.js       # All interactivity — navigation, filters, size selection, cart
└── README.md       # This file
```

### File responsibilities

| File | Contents |
|------|----------|
| `index.html` | 5 screen divs, navigation overlay, filter/sort panels, flow indicator, footer |
| `style.css` | CSS variables (design tokens), shared components, all 5 screen styles, footer, annotation bars |
| `script.js` | Screen switching, nav open/close, filter/sort panels, size selection, add-to-bag, cart quantity stepper, toast notification |

---

## Key UX Fixes Demonstrated

| Finding | Fix in Prototype |
|---------|-----------------|
| F1 — Homepage suppresses navigation | H&M-style nav with logo, category links, icon row |
| F2 — Size selection hidden | Size selector always visible; Add disabled until size chosen |
| F3 — Inconsistent taxonomy | Single classification logic in nav + sidebar |
| F4 — Hierarchy flattened | Quantity stepper + prominent total + clear CTA order |
| F5 — No spatial orientation | Breadcrumb + page title on all inner screens (Trunk Test) |

---

## Notes

- Checkout is intentionally out of scope — clicking "Continue to checkout" shows an alert
- Prototype uses placeholder gradient images (no real product photography)
- All interactions are fully functional: size selection, add to bag, filter toggle, density switch, cart quantity stepper
- Fonts loaded from Google Fonts (requires internet connection for typography to render correctly)
