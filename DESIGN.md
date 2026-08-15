---
name: CLINITAXi
description: Taxímetros certificados y no adulterables — El de la caja azul
colors:
  primary: "#0e192f"
  primary-container: "#123a75"
  on-primary: "#ffffff"
  secondary: "#0e1625"
  on-secondary: "#ffffff"
  accent: "#1c6fd8"
  on-accent: "#ffffff"
  cool: "#3f93e8"
  success: "#0f8a4b"
  error: "#ef4343"
  surface: "#fbfcfd"
  surface-alt: "#f2f4f8"
  surface-dark: "#0e1625"
  surface-dark-alt: "#121f36"
  on-surface: "#0e1625"
  on-surface-variant: "#5a687c"
  on-surface-dark: "#ffffff"
  on-surface-dark-variant: "#9aa8bd"
  outline: "#e2e7ee"
  outline-variant: "#d7dee8"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, sans-serif"
    fontSize: "3.75rem"
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, sans-serif"
    fontSize: "2.25rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: "700"
    lineHeight: "1.4"
  wordmark:
    fontFamily: "Saira Condensed, Space Grotesk, ui-sans-serif, sans-serif"
    fontStyle: "italic"
    fontWeight: "700"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: "500"
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-nav:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-nav-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
---

# Design System: CLINITAXi

## Overview

**Creative North Star: "La Caja Azul"**

CLINITAXi's visual language is built around a single organizing truth: this is a physical, certified instrument — solid, precise, and officially stamped. The system does not perform modernity; it performs authority. Every surface is either the deep night navy of the device body or the near-white of a clean technical document. The blue arrives as a mark of certification and identity — it is the exact blue of the company's physical pendón and taxi-roof signage, "la caja azul" made literal — and its presence signals brand, action, and trust wherever it appears.

The design is official and precise, like a well-designed government form: structure is always visible, actions are never ambiguous, and ornament earns its presence only when it carries information. The system leans on weight, position, and a disciplined two-blue palette for emphasis rather than a rainbow of hues. When navy dominates, it means reliability; when the medium blue appears, it means "this is CLINITAXi" or "act now." There is no pastiche modernism here — only the confidence of 25+ years of a company that knows exactly what it is.

The voice is direct and technical without being cold. The product is a legal requirement; the design acknowledges that gravity without being intimidating. A taxi driver on a phone should feel, in three seconds, that they have found the right place.

**Key Characteristics:**
- Navy-first surfaces establish authority before the user reads a word
- Medium "caja azul" blue as the brand and certification signal — CTAs, credential icons, nav CTA
- Navy header — the fixed nav is the same institutional navy as hero/footer, not the accent blue
- Space Grotesk headlines carry the brand's precision; Inter body text keeps it accessible
- Saira Condensed italic bold for the "CLINITAXi" wordmark, echoing the lettering on the company's pendón
- JetBrains Mono labels add the "technical instrument" register in small doses
- The pendón swoosh image is the hero's only decorative element — all else is functional
- Glassmorphism in the fixed nav is the only depth trick; everything else is flat or tonal

## Colors

Deep navy authority meets the "caja azul" brand blue — a palette that reads as official before it reads as beautiful, and is drawn directly from the company's pendón signage.

### Primary
- **Azul Noche Institucional** (`#0e192f`): The dominant surface for hero sections, the fixed navigation, and the footer. This is the visual weight of the State — the navy that says "this organization has been here for 25 years." Never tinted, never lightened within its role.
- **Azul Profundo** (`#0e1625`): The deepest surface, used for TrustBar and footer backgrounds. One degree darker than primary — creates hierarchy within dark surfaces without introducing a new hue.
- **Azul Intermedio** (`#121f36`): Dark surface alt for hover states and layered dark containers.

### Secondary
- **Azul Caja** (`#1c6fd8`): The medium, high-visibility blue lifted from the CLINITAXi pendón — used as `accent` for CTAs and brand-carrying icons. This is the "caja azul" color; it is the brand as much as the navy is.
- **Azul Hover** (`#123a75`): Mid-dark blue used as `primary-container`, the hover/pressed state for navy (`primary`) buttons and links. Sits between Azul Noche and Azul Caja in value.
- **Azul Cielo** (`#3f93e8`): Lighter blue used as `cool`, reserved for gradient transitions and secondary highlights — the lightest step in the swoosh gradient seen on the pendón. Never a CTA color on its own.

### Tertiary
- **Verde Aprobación** (`#0f8a4b`): The success signal — confirms that something has been validated or completed. Currently overused as section eyebrow color; its correct role is state feedback (form validation, completed steps).

### Neutral
- **Blanco Técnico** (`#fbfcfd`): The primary light surface — nearly white with a cold blue tint from the navy's presence. Used for the Services and Contact sections.
- **Gris Formulario** (`#f2f4f8`): Secondary light surface for cards, stat boxes, and form backgrounds. The feeling of a government form: clean but not clinical.
- **Slate Variante** (`#5a687c`): Body text on light surfaces — accessible blue-gray that maintains the navy register without the full weight.
- **Perla Oscura** (`#9aa8bd`): Secondary text on dark surfaces — the muted register that doesn't compete with white primaries.
- **Contorno Suave** (`#e2e7ee`): Primary border and divider color — keeps surfaces structured without hardness.
- **Contorno Variante** (`#d7dee8`): Secondary border for inputs and container edges.

### Named Rules

**La Regla del Azul Caja.** Azul Caja (`#1c6fd8`) appears only on: primary CTAs (including the header's nav CTA), the accent stripe of the credential card, and certification icons on dark surfaces. On light surfaces, Azul Caja exists only in CTA buttons and brand-carrying text (e.g. "El de la caja azul" in the hero). It never backgrounds a full section — including the header, which stays institutional navy; it certifies and identifies, it does not decorate.

**La Regla del Éxito.** Success green (`#0f8a4b`) is reserved for state feedback — form validation confirmations, certification status chips, completed-step indicators. It is not a section label color. When it appears mid-page outside a feedback context, remove it.

## Typography

**Display / Heading Font:** Space Grotesk (with Inter, ui-sans-serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)
**Label / Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** Space Grotesk's geometric construction gives headlines the structured, architectural quality of a certification document — precise without being cold. Inter's near-universal neutrality in body copy keeps long paragraphs readable and keeps the focus on information, not aesthetics. JetBrains Mono signals "technical instrument" — used only for badges, tags, and data labels where precision is the message.

### Hierarchy

- **Display** (800 weight, 3.75rem/60px, 1.1 line-height, −0.02em tracking): Hero h1 only. Maximum 2 lines at desktop. The brand's loudest typographic moment.
- **Headline** (700 weight, 2.25rem/36px, 1.2 line-height, −0.01em tracking): Section h2s. Establishes each section's authority.
- **Title** (700 weight, 1.125rem/18px, 1.4 line-height): Component headings within sections — service items, product names, contact labels.
- **Body** (400 weight, 1rem/16px, 1.6 line-height): All paragraph text. Keep lines within 65–75ch on desktop.
- **Label** (JetBrains Mono, 500 weight, 0.75rem/12px, 0.05em tracking, uppercase): Metadata tags, stat labels, and data identifiers. Used sparingly — its monospace register is meaningful; overuse makes it a costume.

### Named Rules

**La Regla del Peso.** Emphasis comes from font weight and size, never from gradient text. A word that needs emphasis becomes Bold (700); a number that matters becomes Extrabold (800). Color alone never carries importance.

## Layout

The grid follows a **1280px fixed-fluid model**: full-width sections with `container-max mx-auto` constraining content to 1280px and `px-4 md:px-12` providing 16px mobile and 48px desktop margins.

Sections use `py-24` (96px) vertical padding as the default rhythm — ample breathing room that signals each section has earned its position. The hero departs from this with `pt-40 pb-28 md:pt-48 md:pb-36` to accommodate the fixed header offset.

**Grid patterns:**
- Hero: 1 column mobile, 2 columns (content + credential card) desktop (`lg:grid-cols-2 gap-16`)
- Services, Coverage, Contact: 1 column mobile, 2 columns desktop
- TrustBar: 2 columns mobile, 4 columns desktop
- Footer: 1 column mobile, 4 columns desktop
- Products, News: single column with card grid

**Responsive breakpoints** (Tailwind defaults): sm 640px, md 768px, lg 1024px, xl 1280px.

**The fixed header** (h-20 = 80px) requires 80px+ top padding on all page-start sections. The hero's `pt-40` handles this on desktop; `pt-40` also handles it on mobile.

## Elevation & Depth

This system is **flat-by-default with one glassmorphism exception** and relies on tonal contrast rather than shadows to establish depth.

Dark navy surfaces (hero, TrustBar, footer) read as deeper/closer than light surfaces (Services, Contact) through lightness contrast alone — no shadows needed. Card components on light backgrounds use Tailwind's `shadow-md` sparingly.

### Shadow Vocabulary

- **Nav glass** (`backdrop-filter: blur(12px)` + `bg-primary/95`): The fixed header only. Glassmorphism here is functional — the nav overlays content as the user scrolls and must remain legible without a hard edge.
- **Credential card depth** (`shadow-2xl shadow-black/40`): The hero credential card uses a heavy shadow to suggest physical depth — as if the certification plate were an actual object resting on the dark surface. Only this element on the entire page.
- **Standard card** (`shadow-md`): Light-surface cards may use a standard medium shadow on hover or as default depth. Used conservatively.

### Named Rules

**La Regla de Plano.** Surfaces are flat at rest. The glassmorphism nav and the credential card shadow are the only elevation effects on the page. Adding a third shadow context dilutes all three.

## Shapes

The form language is **structured and institutional** — geometric, clean-cornered, and consistent within each tier of component size.

- **Small components** (buttons, inputs, icon containers): 8px radius (`rounded-sm`). Official and precise — not softened into approachability, not squared into coldness.
- **Medium components** (icon wrappers within cards, stat boxes): 12px radius (`rounded-md`). Slightly more open than buttons.
- **Large containers** (cards, form containers, credential plates): 16px radius (`rounded-lg`). Provides visual warmth at section scale without losing structural authority.
- **Extra-large decorative** (hero right column outer glow, large visual blocks): 24px radius (`rounded-xl`).
- **Circular** (round icon buttons, contact method circles): `rounded-full` (9999px). Exclusively for decorative support icons in the Contact section and the mobile call button.
- **Hero swoosh**: The single organic shape in the system. The pendón's navy-to-blue curve sits as the Hero's background image over a matching `bg-surface-dark` base, so it reads seamlessly into the TrustBar below (same dark surface, no divider needed). This is the page's only departure from geometric shapes and should remain isolated to the hero.

## Components

### Buttons

**Character:** official and direct — state their purpose, demand a decision.

- **Shape:** 8px radius on all variants. Consistent across the system.
- **Primary (azul caja CTA):** Azul Caja background (`#1c6fd8`) · White text (`#ffffff`) · 16px top/bottom, 32px left/right padding · 700 weight · `hover:brightness-110` · `active:scale-95`
- **Ghost (white outline on dark):** 2px `rgba(255,255,255,0.3)` border · White text · 14px top/bottom, 32px left/right · `hover:bg-white/10`
- **Nav CTA (azul caja on navy header):** Azul Caja background (`#1c6fd8`) · White text · 10px/20px padding · 600 weight · `hover:brightness-110`

### Cards / Containers

- **Light surface cards:** `bg-surface-alt` (`#f2f4f8`) background · 16px radius · No border · `py-8 px-8` padding
- **Dark accent card (credential):** `bg-white/5` with `border border-white/10` · 16px radius · Azul Caja 4px top stripe · `shadow-2xl shadow-black/40` · Internal padding 32px
- **Form container:** `bg-surface-alt` · 16px radius · `border border-outline-variant/60` · 32px–40px padding

### Inputs / Fields

- **Style:** White background · 1px `#d7dee8` border · 8px radius · 48px height · 16px horizontal padding
- **Focus:** 2px `#0e192f` ring via `focus:ring-2 focus:ring-primary` · Border shifts to primary
- **Placeholder text:** `#9aa8bd` (on-surface-dark-variant)

### Navigation

- **Fixed header:** 80px height · Azul Noche navy background (`#0e192f` at 95% opacity) · Glassmorphism (`backdrop-blur-12px`) · Bottom border `border-white/10`
- **Logo:** Local taxi icon (Material Symbols) + "CLINITAXi" wordmark in Saira Condensed, 700 weight italic, 20px+ · `text-on-primary` (white)
- **Nav links:** `text-on-primary/90` at rest · `text-on-primary` on hover · 14px 500 weight Inter
- **Mobile:** Nav links hidden; white/15-on-navy call icon button (44×44px) + azul caja Contáctanos CTA only

### Trust Bar

- **Style:** Dark surface (`#0e1625`) · 2-column mobile / 4-column desktop grid · 1px `rgba(255,255,255,0.1)` dividers between cells
- **Cell:** Material Symbol icon in azul caja + 14px 500 weight white/90 label · 20px padding mobile, 24px desktop

### Certification Badge (Signature Component)

The credential plate in the hero right column. This is the brand's primary trust artifact — the visual representation of "la caja azul."

- **Structure:** 16px radius container · 4px azul caja top stripe · `bg-white/5 border border-white/10` background · 32px internal padding
- **Content:** 48px × 48px azul-caja-tinted icon container (azul caja 20% bg + 30% border) · Extrabold white heading · Horizontal white/10 divider · Icon + text list items in white/80 · Brand footer in white/50
- **Depth:** `shadow-2xl shadow-black/40` + small `border border-accent/20` offset rectangle behind

### Wordmark

The "CLINITAXi" name-mark, echoing the italic condensed lettering on the company's pendón, appears in Header and Footer.

- **Font:** Saira Condensed, 700 (or 800) weight, italic style · uppercase or brand mixed-case ("CLINITAXi")
- **Usage:** Only for the standalone wordmark — never for section headings or body copy, which stay on Space Grotesk / Inter.

## Do's and Don'ts

### Do:
- **Do** use `#0e192f` navy as the background for authority-bearing sections: hero, TrustBar, footer. The dark surface signals permanence before the user reads a word.
- **Do** treat Azul Caja (`#1c6fd8`) as the brand and certification color — reserve it for primary CTAs (including the header's nav CTA) and credential icons. It's the exact blue of the pendón and the taxi-roof box; every appearance is deliberate.
- **Do** keep the fixed header on institutional navy (`#0e192f`), matching hero and footer — the header is a dark authority surface, not an accent surface.
- **Do** apply Space Grotesk at 700–800 weight for all section headings. The geometric construction is the brand's typographic character; never swap it for a softer display face.
- **Do** set the "CLINITAXi" wordmark in Saira Condensed italic bold, matching the pendón lettering — but only the wordmark, not other headings.
- **Do** make the phone number a `<a href="tel:+56950646818">` link everywhere it appears. The primary user is on mobile.
- **Do** keep the azul caja top stripe on the credential card — it is the visual "stamp" that makes the card read as certified.
- **Do** use `rounded-sm` (8px) on all interactive controls (buttons, inputs). Consistency here is the system's precision signal.

### Don't:
- **Don't** reintroduce amber/gold anywhere in the palette — it was based on an unrelated reference and does not match CLINITAXi's real signage. Azul Caja (`#1c6fd8`) is the only accent.
- **Don't** use success green (`#0f8a4b`) as a section label or eyebrow color. It means "validated" — not "here begins a new section."
- **Don't** add a third shadow context. The glassmorphism nav and the credential card shadow are the system's only two elevation moments.
- **Don't** use gradient text. Emphasis is weight and size; gradient is a costume.
- **Don't** use `hidden md:block` on trust signals. The TrustBar's four MTT/experience/coverage/attention items must be visible on mobile — that is the primary usage context.
- **Don't** use plain `<span>` for the phone number. Every appearance of `+569 5064 6818` must be a tappable `<a href="tel:">` link.
- **Don't** use the Azul Caja accent color as a section background, including the header. On light pages, Azul Caja means CTA — not surface.
- **Don't** use JetBrains Mono for section labels or eyebrows. Its register signals data and measurement; eyebrow kickers above headings are banned entirely — the heading carries its own weight.
- **Don't** apply the Saira Condensed wordmark font to running text or headings — it is reserved for the "CLINITAXi" name-mark only.
