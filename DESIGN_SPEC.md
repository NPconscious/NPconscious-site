# NPconscious — Design & Motion Specification (`DESIGN_SPEC.md`)

**Phase:** 2 (Read-Only Design Contract — Source files in `src/` unchanged)  
**Reference Site Inspected:** `https://brilliant.org/` (via Playwright MCP at `1440x900` desktop and `390x844` mobile, 0 console errors)  
**Brand Palette Source:** NPconscious official logo ([`public/site.png`](public/site.png) / [`public/logo.webp`](public/logo.webp))  
**Scope Rule:** Borrow **layout structure, typography scale, spacing rhythm, border radii, elevation, and calm motion physics** from `https://brilliant.org/`. Never copy reference copy, illustrations, icons, or logos.

---

## 1. Viewport & Responsive Verification (Observed on Reference)

- **Desktop (`1440x900`):** `scrollWidth <= innerWidth` (0 horizontal overflow). Floating centered pill navigation (`1176px` wide, `55px` tall) above a centered single-column hero, alternating full-bleed white (`#FFFFFF`) and warm neutral (`#F5F3F1`) bands, `1110px` two-column feature rows, `1176px` tabbed explorer, card carousel, and dark closing CTA band.
- **Mobile (`390x844`):** `scrollWidth <= innerWidth` (0 horizontal overflow). Pill navigation collapses cleanly (`336px` wide, `55px` tall), horizontal section padding settles to `20px` (`px-5`), and alternating vertical padding tightens from `88px–117px` to `56px–64px`.

---

## 2. Layout Structure & Spacing Rhythm

### Container Widths
- **Floating Header Pill / Tabbed Explorer:** `max-width: 1176px` (`max-w-[1176px]`)
- **Two-Column Feature / Offering Rows:** `max-width: 1110px` (`max-w-[1110px]`) with `gap: 48px–112px` (`gap-8 lg:gap-20` to `lg:gap-28`)
- **Reading / FAQ / Form Columns:** `max-width: 896px` (`max-w-4xl`)

### Section Cadence & Vertical Padding
- **Hero Section:**
  - Desktop: `padding: 40px 20px 64px`
  - Mobile: `padding: 24px 20px 48px`
- **Standard Content Sections (Alternating Surface Rhythm):**
  - Desktop: `padding: 88px 0 117px` (`py-20 lg:py-24`)
  - Mobile: `padding: 56px 0 64px` (`py-14`)
- **Feature Split Rows:** `padding: 64px 0` to `100px 0` desktop (`py-12 lg:py-20`)
- **Surface Alternation Pattern:** Crisp White (`#FFFFFF`) ↔ Soft Warm Canvas (`#F5F3F1`) → Dark Sanctuary Closing CTA (`#0B1324`) → Footer.

### Card & Container Geometry
- **Floating Nav Pill:** `height: 55px`, `border-radius: 9999px`, `padding: 0 8px 0 32px` (desktop) / `0 8px 0 20px` (mobile), `border: 1px solid var(--border-subtle)`.
- **Content / Offering / Testimonial Cards:** `border-radius: 28px` (`1.75rem`), `padding: 28px–36px` (`p-7 sm:p-9`), `border: 1px solid var(--border-subtle)`.
- **Inner Panels / Interactive Boxes:** `border-radius: 24px` (`1.5rem`) and `14px–16px` (`0.875rem–1rem`) for sub-tiles.
- **Filter / Topic Pills:** `height: 46px`, `padding: 0 20px`, `border-radius: 9999px`, `gap: 10px`.

---

## 3. Typography Scale & Hierarchy

The reference uses **CoFo Robert** (display) + **CoFo Brilliant** (UI/body) with restrained medium-weight (`500`) headings rather than ultra-heavy `800` weights, creating an approachable, calm editorial hierarchy. For NPconscious, we map this scale onto Google Fonts **`Plus Jakarta Sans`** (display + UI) and **`Inter`** (long-form reading fallback):

| Role | Desktop (`>=1024px`) | Mobile (`390px`) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `54px` (`3.375rem`) | `36px` (`2.25rem`) | `500`–`600` | `1.10` (`59.4px` / `39.6px`) | `-1px` (`-0.02em`) desktop / `-0.36px` mobile |
| **Section H2** | `44px` (`2.75rem`) | `32px` (`2rem`) | `500`–`600` | `1.10` (`48.4px` / `35.2px`) | `-0.84px` / `-0.4px` (`-0.015em`) |
| **Card / Feature H3** | `30px` (`1.875rem`) | `24px` (`1.5rem`) | `400`–`500` | `1.25` (`37.5px` / `30px`) | `-0.36px` (`-0.012em`) |
| **Body Lead** | `18px` (`1.125rem`) | `16px` (`1rem`) | `400` | `1.60` | `0em` |
| **Body Default** | `16px` (`1rem`) | `16px` (`1rem`) | `400` | `1.50`–`1.70` (`24px`–`27px`) | `0em` |
| **Pill / Button Text** | `15.5px`–`16px` | `15px` | `500` | `1.25` | `-0.01em` |
| **Nav / Micro Label** | `14px` | `14px` | `400`–`500` | `1.25` (`17.5px`) | `-0.01em` |

---

## 4. Shadows, Borders & Interactive Controls

Extracted directly from `brilliant.org` computed styles:

- **Subtle Elevation (`--shadow-subtle`):** `0 1px 3px rgba(0, 0, 0, 0.04)`
- **Pill Tab Elevation (`--shadow-pill`):** `0 4px 10px 0 rgba(0, 0, 0, 0.05)`
- **Card Focus Elevation (`--shadow-card`):** `0 12px 40px 0 rgba(10, 31, 20, 0.06)`
- **Tactile 3D Pill Button (`--shadow-btn-*`):**
  - Reference pattern: `border-radius: 60px` (`9999px`), `padding: 14px 20px–24px`, bottom-lip solid shadow `0 4px 0 0 <lip-color>` that depresses cleanly (`translateY(2px)` + `0 2px 0 0`) on hover/active.
  - Secondary white pill button: `#FFFFFF` surface with `1px solid #E4E4E4` and bottom lip `0 4px 0 0 #DCDAD8`.
- **Standard Border:** `1px solid #E4E4E4` (`--border-subtle`).

---

## 5. Color Roles — Warm Beige + Editorial Charcoal & Soft Sage

`brilliant.org`'s structural color roles (crisp white cards alternating with warm neutral canvas, high-contrast neutral CTAs, and restrained accents) are preserved and tuned into a **Warm Beige Sanctuary** palette. The colorful blue/green NPconscious logo ([`public/site.png`](public/site.png)) remains untouched in the header/footer so it stands out cleanly against neutral warm surfaces without competing UI colors. All text/button pairs meet WCAG AA contrast (`>= 4.5:1`):

| Color Role (from Reference) | Reference Value | NPconscious Token | NPconscious Value | Usage & Contrast Note |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Surface** | `#FFFFFF` | `--bg-primary` | `#FFFFFF` | Crisp card islands, floating nav pill, clean content bands |
| **Secondary Canvas (Beige / Oat)** | `#F5F3F1` | `--bg-secondary` | `#F5F1EA` | Warm beige sanctuary background & alternating sections |
| **Canvas Soft Tint** | `#FBFAF9` | `--bg-elevated-soft` | `#FAF8F4` | Subtle nested boxes, FAQ panels, and warm highlights |
| **Sand Accent Tint** | `#F5F3F1` | `--bg-sand-soft` | `#ECE5D8` | Warm neutral pill tags & non-loud badge surfaces |
| **Primary Ink** | `#000000` | `--text-primary` | `#141414` | Editorial charcoal for headings, active tabs, and primary CTAs |
| **Secondary Ink** | `#383838` | `--text-secondary` | `#3B3B38` | Warm charcoal body copy (`> 10:1` contrast on white & beige) |
| **Muted Ink** | `rgba(0,0,0,0.4)` / `#666` | `--text-muted` | `#5F5D57` | Captions, inactive tab text, subtle labels (`>= 5.2:1` WCAG AA) |
| **Border Subtle** | `#E4E4E4` | `--border-subtle` | `#E3DDD3` | Warm sand card outlines, pill tabs, nav pill border |
| **Border Strong** | `#CCC` | `--border-strong` | `#CFC7BA` | Hover borders, inputs, and secondary button outlines |
| **Primary CTA (Editorial Charcoal)** | `#000000` | `--cta-primary` | `#141414` | Primary action pills (`> 17:1` w/ `#FFFFFF` text) |
| **Primary CTA Hover / Lip** | `#1E1E1E` | `--cta-primary-hover` / `--cta-primary-lip` | `#292927` / `#000000` | Smooth hover lift & tactile 3D bottom lip shadow |
| **Secondary Accent (Soft Sage)** | `#29CC57` (green-500) | `--accent-sage` | `#2F6B55` | Muted forest-sage for Free Career Guidance CTAs & checks (`6.0:1` w/ `#FFFFFF`) |
| **Secondary Accent Hover / Lip** | `#15B441` | `--accent-sage-hover` / `--accent-sage-lip` | `#245543` / `#193D30` | Hover fill & tactile 3D bottom lip shadow |
| **Secondary Accent Soft Tint** | `#EAFAEE` | `--accent-sage-soft` | `#E7F2EC` | "Free" Career Guidance badges & verification highlights |
| **Warm Ochre Highlight (Subtle)** | — | `--accent-ochre` / `--accent-ochre-soft` | `#9A5B13` / `#F6EBDC` | Subtle warm callouts (`6.0:1` text on soft ochre / white) |
| **Dark Sanctuary Surface** | `#000000` / `#141414` | `--bg-inverse` | `#161615` | Closing CTA band & high-trust dark cards |
| **Ambient Sanctuary Gradient** | Subtle warm/sage dark glow | `--gradient-sanctuary-dark` | `linear-gradient(135deg, #161615 58%, #1E2823 84%, #26231C 100%)` | Calm charcoal-to-sage-sand atmospheric depth on dark CTA cards |

---

## 6. Motion & Animation Inventory (Calm Sanctuary Rules)

Every motion rule uses **GPU-composited properties only (`transform`, `opacity`, `box-shadow`, `backdrop-filter`)** and respects `prefers-reduced-motion: reduce`:

| Pattern | Trigger | Reference Timing / Easing | NPconscious Implementation |
| :--- | :--- | :--- | :--- |
| **Nav Scroll Polish** | Scroll past top | `background-color 0.25s, backdrop-filter 0.25s, box-shadow 0.25s` | Smooth translucent backdrop blur + subtle shadow on scroll |
| **Hero Entrance** | Initial load | `700ms cubic-bezier(0.22, 1, 0.36, 1)` fade + slight Y rise | Calm `550ms–700ms cubic-bezier(0.22, 1, 0.36, 1)` translateY(`12px -> 0`) + opacity (`0 -> 1`) |
| **Tactile Pill Press** | Hover / Active on CTA | `transform 0.1s ease-out, box-shadow 0.1s ease-out` | Gentle `translateY(1px)` hover / `translateY(3px)` active compression of bottom-lip shadow |
| **Filter / Tab Switch** | Click tab | `color 0.15s, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)` | Instant crisp switch + subtle panel fade-in (`220ms`) |
| **Section / Card Reveal** | Scroll into view (`IntersectionObserver` / `motion` `inView`) | `0.75s cubic-bezier(0.22, 1, 0.36, 1)` | Calm opacity + `16px` Y-rise once (`once: true`), max `60ms` stagger |
| **Page Navigation** | Route change | — | Astro `ClientRouter` (`astro:transitions`) cross-fade (`160ms` out / `240ms` in) |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` | — | Disables/zeroes all keyframe animations, scroll reveals, transitions, and View Transitions |

---

## 7. Non-Copy Guardrails (Phase 3–4 Reminder)

- Do **not** copy Brilliant's Koji mascot, black-friday banner, app-store badges, accreditation seals, or curriculum artwork.
- Keep `motion` calm and purposeful—no aggressive bouncy springs or fast flashing effects that clash with **"A Sanctuary for Young Minds"**.
- Maintain `CONTENT.md` as the sole content source of truth during Phase 4 build.
