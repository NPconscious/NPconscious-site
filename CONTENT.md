# NPconscious — Content & Information Architecture Contract (`CONTENT.md`)

**Status:** Approved Content Contract (Phase 1 Signed Off — `[TBD]` placeholders retained; source files in `src/` unchanged)  
**Positioning Source:** [`docs/NPconscious_Strategic_Repositioning_Team_Plan.pdf`](docs/NPconscious_Strategic_Repositioning_Team_Plan.pdf)  
**Umbrella Identity:** **NPconscious — A Sanctuary for Young Minds**

---

## 1. Content Rules (Mandatory Guardrails)

1. **Identity first:** Lead with **"NPconscious — A Sanctuary for Young Minds"**, then present three clear offerings: **Mathematics**, **Computer Science**, and **Free Career Guidance**.
2. **Maths stays core, not the whole identity:** Protect and continue all existing Mathematics programmes, without letting Mathematics define the entire brand.
3. **NO Physics anywhere:** No mention of Physics in navigation, cards, FAQs, meta tags, alt text, comments, or footer.
4. **Career Guidance is FREE:** Never imply basic career counselling is charged.
5. **Partner referral transparency:** Disclose clearly, in plain language, that NPconscious may earn a commission from qualifying partner referrals, and that recommendations are based on the student's goals, eligibility, budget, and preferences—not on commission. Place this on `/career-guidance` and in the footer.
6. **No outcome guarantees:** Never promise admissions, visas, jobs, scores, or other outcomes outside NPconscious's control.
7. **Listen-first tone:** Students and parents should feel comfortable reaching out even if they do not yet know what they need. Provide a visible **"Not sure yet?"** entry point.
8. **No compulsory cross-selling:** Cross-links between offerings must read as _"if relevant"_ or _"when useful"_, never as mandatory upsells.
9. **No invented Computer Science details:** Keep Computer Science courses, target learners, instructors, formats, and pricing marked `[TBD]` until finalised by the team.

---

## 2. Sitemap & Route Plan

| Route                                                    | Status                | Role & Notes                                                                                                                                                                                                    |
| :------------------------------------------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/` (`src/pages/index.astro`)                            | **Keep & Reposition** | Umbrella Home page: Sanctuary identity first → 3 Offerings → "Not sure yet?" entry point → How offerings connect → Testimonials → Founder spotlight → FAQ → Contact/CTA.                                        |
| `/mathematics` (`src/pages/mathematics.astro`)           | **New**               | Dedicated Mathematics vertical preserving all 6 existing Maths programmes, pedagogical pillars, and interactive intuition preview.                                                                              |
| `/computer-science` (`src/pages/computer-science.astro`) | **New**               | Dedicated Computer Science vertical with `[TBD]` placeholders for unfinalised course, instructor, format, and pricing details + interest intake.                                                                |
| `/career-guidance` (`src/pages/career-guidance.astro`)   | **New**               | Dedicated Free Career Guidance & Counselling vertical (academic choices, career paths, coaching options, overseas education) + plain-language partner referral disclosure.                                      |
| `/founder` (`src/pages/founder.astro`)                   | **Keep & Reposition** | "Our Vision & Philosophy": expands Nikhil Parag's story and educational manifesto from maths-only to the full Sanctuary for Young Minds identity.                                                               |
| `/admission` (`src/pages/admission.astro`)               | **Keep for Now**      | Retained at `/admission` per team decision. Expanded to support enquiries across Mathematics, Computer Science (`[TBD]` waitlist), Free Career Guidance, and "Not sure yet?", plus a student/lead source field. |

> **Flagged Route/Label Decision:**  
> Long-term, review whether **"Admission"** (`Admission` nav label, `Admissions Open 2026` top bar, and `/admission`) still fits as the primary label now that Career Guidance is **free** and students are encouraged to approach even when unsure. For Phase 1–4, `/admission` stays live as requested, with inclusive copy covering both free guidance conversations and programme assessments.

---

## 3. Page-by-Page Section Outline & Draft Copy

### 3.1 Global Shell (`src/layouts/MainLayout.astro`)

- **Default Meta Title:** `NPconscious · A Sanctuary for Young Minds`
- **Default Meta Description:** `NPconscious is a student-friendly sanctuary for young minds offering Mathematics, Computer Science, and free Career Guidance—listening first to help every learner find their right next step.`
- **Top Announcement Bar:**
  - Badge: `A Sanctuary for Young Minds`
  - Text: `Explore Mathematics, Computer Science & Free Career Guidance`
  - Link CTA: `Start a Conversation →` (links to `/admission` or WhatsApp)
- **Primary Navigation (Desktop & Mobile Drawer):**
  - `Home` (`/`)
  - `Mathematics` (`/mathematics`)
  - `Computer Science` (`/computer-science`)
  - `Career Guidance` (`/career-guidance`) — badge/tag `Free`
  - `Our Vision` (`/founder`)
  - `Admission` (`/admission`)
  - Primary Header CTA Button: `Book Free Conversation` / `Talk to Us` (links to `/admission` or WhatsApp)
- **Floating WhatsApp Action:**
  - Label: `Chat on WhatsApp`
  - Updated prefill text: `Hi NPconscious team, I'd like to talk about Mathematics, Computer Science, or free Career Guidance.`
- **Footer:**
  - **Brand Column:** Logo (`/site.webp` / `/site.png`) + _"NPconscious — A Sanctuary for Young Minds. A student-friendly space for Mathematics, Computer Science, and free Career Guidance."_
  - **Explore Column:** Links to `/`, `/mathematics`, `/computer-science`, `/career-guidance`, `/founder`, `/admission`.
  - **Direct Support Column:** Phone (`+91 80112 36456`), WhatsApp, and all 3 email contacts (`help@npconscious.com`, `admission@npconscious.com`, `admin@npconscious.com` with `<!--email_off-->`).
  - **Partner Referral & Commission Disclosure (Footer Strip — Plain Language `[TBD — Team Sign-off on Final Wording]`):**
    > _"Transparency Note: Basic career counselling at NPconscious is always free. When we recommend an external coaching centre, university, college, or overseas education partner and you choose to enrol, NPconscious may earn a referral commission. Every recommendation is guided by your goals, eligibility, budget, and preferences—never by commission."_

---

### 3.2 Home Page (`/`)

**Section 1 — Umbrella Hero (`NPconscious — A Sanctuary for Young Minds`)**

- Eyebrow Pill: `A Student-Friendly Learning Space`
- H1: `NPconscious —` / `A Sanctuary for Young Minds`
- Subtitle: `We listen first, understand what each student actually needs, and support them through Mathematics, Computer Science, and free Career Guidance—without pressure or one-size-fits-all tracks.`
- Primary CTA: `Talk to Us — Free First Step` (WhatsApp / `/admission`)
- Secondary CTA: `Not sure yet? Start here →` (scrolls to `#not-sure-yet`)
- Optional Hero Visual Card: Calm visual overview of the 3 pillars + "Listen First • No Pressure • Student-First" chips. _(The maths-only `(-1) × (-1)` switcher moves to `/mathematics` so Home leads with the umbrella identity.)_

**Section 2 — Three Clear Offerings (`#offerings`)**

- Section Eyebrow: `What We Offer`
- Heading: `Three Clear Ways We Support Students`
- Subheading: `Every learner enters with different questions. Explore the path that fits you right now.`
- **Card 1: Mathematics** _(Core Service)_
  - Tag: `Course Fees • Grades 1–12 & B.Tech`
  - Summary: `Our established, curiosity-first mathematics mentorship—building visual intuition and lasting conceptual clarity across school boards, practical finance, and engineering maths.`
  - Highlights: `1-on-1 & small-group mentoring` • `Grades 1–12, Money & Math, B.Tech` • `CBSE, ICSE, IGCSE, IB & State`
  - CTA: `Explore Mathematics →` (`/mathematics`)
- **Card 2: Computer Science** _(`[TBD]`)_
  - Tag: `Course Fees • [TBD]`
  - Summary: `Computer science and programming learning for students building practical technical thinking and problem-solving skills.`
  - Details: `[TBD — First courses, target learner levels, instructor, format, and pricing are currently being finalised by our team.]`
  - CTA: `View Computer Science [TBD] →` (`/computer-science`)
- **Card 3: Career Guidance** _(Free)_
  - Tag: `Free to Students`
  - Summary: `Free, honest counselling to explore academic choices, career paths, coaching options, and overseas education—with zero counselling fees.`
  - Note: `Basic career counselling is completely free. Suitable external partners are recommended based on your fit, with full transparency.`
  - CTA: `Explore Free Career Guidance →` (`/career-guidance`)

**Section 3 — "Not Sure Yet?" Listen-First Entry Point (`#not-sure-yet`)**

- Eyebrow: `Start Without Pressure`
- Heading: `Not Sure What You Need Yet?`
- Copy: `You do not need to arrive with a fixed plan. Whether a student needs stronger maths confidence, wants to explore technology, or feels uncertain about subjects, careers, or studying abroad, we start by listening.`
- What Happens in a First Conversation (3 calm steps):
  1. **Share where you are:** Grade, interests, or questions on your mind.
  2. **We listen first:** No forced courses or compulsory upsells.
  3. **Clear, honest next step:** A relevant learning plan, free career guidance, or an honest suggestion if something outside NPconscious fits better.
- CTA: `Start a Free Conversation` (`/admission` or WhatsApp)

**Section 4 — How Offerings Connect ("If Relevant")**

- Eyebrow: `Support That Grows With You`
- Heading: `One Sanctuary, Connected Only When Helpful`
- Copy: `Students never have to take more than what fits their goals. When another offering genuinely helps, we introduce it gently:`
- 3 Clean Cards (from Team Plan Section 5):
  - **Arriving for Mathematics:** Can explore Computer Science _if relevant_, or use free Career Guidance _when useful_.
  - **Arriving for Computer Science:** Can access Mathematics support _if needed_, or use free Career Guidance _when useful_.
  - **Arriving for Career Guidance / Studying Abroad:** Can add relevant Mathematics or Computer Science preparation, or explore vetted external partners _when appropriate_.

**Section 5 — Social Proof (`#stories`)**

- Keep the existing parent/student testimonials (`Sarra`, `Maaz`, `Rohit` from `src/pages/index.astro`) **verbatim** per team approval, with space for future Computer Science and Career Guidance stories once collected.

**Section 6 — Founder Spotlight**

- Condensed bridge introducing Nikhil Parag (`January 2026`), why NPconscious evolved from mathematics into a broader Sanctuary for Young Minds, and linking to `/founder`.

**Section 7 — Frequently Asked Questions (`#faq`)**

- Covers all 3 offerings (Mathematics, Computer Science `[TBD]`, Free Career Guidance), how the listen-first conversation works, why basic career counselling is free, how partner referrals work transparently, school boards supported, and scheduling flexibility.

**Section 8 — Final CTA & Direct Contact**

- Calm dark/brand-anchored sanctuary banner inviting parents and students to reach out via WhatsApp, `/admission`, or `help@npconscious.com`.

---

### 3.3 Mathematics Page (`/mathematics`)

- **Meta Title:** `Mathematics Mentorship · NPconscious`
- **Meta Description:** `Curiosity-first mathematics mentorship for Grades 1–12, Money & Mathematics, and Engineering Mathematics across CBSE, ICSE, Cambridge, and IB.`
- **Sections:**
  1. **Hero:** `"Making Mathematics Natural Again"` — preserves existing maths hero copy, metric pills (`160+ Active Learners`, `1-on-1 Dedicated Mentors`, `Student-First Pacing`), and moves the interactive **Intuition Lab (`(-1) × (-1) = +1`)** here.
  2. **Pedagogical Foundation:** Preserves the 3 pillars (`01 Question First`, `02 Visualize & Play`, `03 Lifelong Retention`).
  3. **Programs & Curriculums (`#programs`):** Preserves all 6 existing programmes and filter tabs verbatim:
     - `Money & Mathematics` (Ages 12+ & Adults · 15 Case-Study Sessions · 5 Mentorship Clinics)
     - `Foundation Mathematics` (Grades 1–5 · 12 Interactive Sessions · 5 Doubt Sessions · Bi-weekly Parent Reviews)
     - `Mathematics Concepts I` (Grades 6–10 · 30 Deep-Dive Sessions · 10 Doubt Sessions · CBSE, ICSE, IGCSE & IB)
     - `Mathematics Concepts II` (Grades 11–12 · 20 Intensive Sessions · 5 Proof & Doubt Clinics)
     - `Engineering Mathematics` (Undergrad / B.Tech · 55 Sessions · 25 Live Doubt Hours)
     - `Regular Tuition Program` (Grades 1–10 · Daily/Weekly flexible · 1 hr + 10 min Habit Mentoring)
  4. **"If Relevant" Next Steps:** Soft, non-compulsory cards linking to Computer Science (`/computer-science`) and Free Career Guidance (`/career-guidance`).
  5. **Assessment CTA:** Links to `/admission` and WhatsApp.

---

### 3.4 Computer Science Page (`/computer-science`)

- **Meta Title:** `Computer Science · NPconscious`
- **Meta Description:** `Computer science and programming learning at NPconscious — building technical thinking and practical skills. Curriculum details [TBD].`
- **Sections (All unfinalised specifics explicitly marked `[TBD]`):**
  1. **Hero:**
     - Eyebrow: `Technical Learning • [TBD]`
     - H1: `Computer Science & Programming`
     - Subtitle: `Helping students build foundational technical knowledge and structured problem-solving skills in a calm, curiosity-led environment.`
     - Primary CTA: `Share Your Learning Interest` (WhatsApp / `/admission`)
  2. **Curriculum & Programme Details (`[TBD]` Placeholders):**
     - **Courses & Tracks:** `[TBD — First courses and topic tracks to be confirmed by team]`
     - **Target Learners:** `[TBD — Age groups / grade bands to be confirmed by team]`
     - **Instructors:** `[TBD — Instructor profiles to be added]`
     - **Class Format & Schedule:** `[TBD — Session length, 1-on-1 vs small group format, and schedule to be confirmed]`
     - **Course Fees / Pricing:** `[TBD — Fee structure to be finalised]`
  3. **How It Fits With the Sanctuary (`If Relevant`):**
     - Optional links to Mathematics support (`/mathematics`) if a student wants stronger logic/algebra foundations, and Free Career Guidance (`/career-guidance`) for tech/degree pathway exploration.
  4. **Interest Intake CTA:** Invite students/parents to tell us what they are hoping to learn so the team can notify them when cohorts open.

---

### 3.5 Free Career Guidance Page (`/career-guidance`)

- **Meta Title:** `Free Career Guidance · NPconscious`
- **Meta Description:** `Free, student-first career counselling for academic choices, career paths, coaching options, and overseas education at NPconscious.`
- **Sections:**
  1. **Hero:**
     - Eyebrow: `Always Free for Students`
     - H1: `Free Career & Academic Guidance`
     - Subtitle: `A calm, listen-first space to explore academic choices, career directions, coaching options, and overseas education—with zero counselling charges and zero pressure.`
     - Primary CTA: `Book a Free Guidance Session` (WhatsApp / `/admission`)
  2. **What We Help Students Explore:**
     - Subject & stream decisions (school to college transitions)
     - Career paths & skill roadmaps (including Maths and tech pathways)
     - Coaching & preparation options
     - Overseas education exploration (shortlisting options aligned with eligibility and budget)
     - _"Not sure what to ask yet?"_ reassurance note
  3. **How Our Counselling Works (Listen-First Process):**
     - `[TBD — Exact counselling intake form / slot duration details if team wants specific times published]`
     - Draft flow: (1) Listen to student goals, interests, eligibility, and budget → (2) Map realistic options honestly → (3) Recommend relevant learning or vetted external partners only when appropriate.
  4. **Our Commitments & Plain-Language Referral Disclosure (`[TBD — Team Sign-off on Final Wording]`):**
     - **Free basic counselling:** Students are never charged for basic career counselling.
     - **No outcome guarantees:** We do not promise admissions, visas, jobs, or exam scores.
     - **Partner referrals & commission disclosure:**
       > _"When a student is ready for a next step that NPconscious does not directly provide—such as a partner coaching centre, college, university, or overseas education partner—we may recommend a suitable external option. If you choose to proceed and the referral qualifies, NPconscious may earn a commission. Recommendations are always based on your goals, eligibility, budget, and preferences—never on commission."_
  5. **Optional Next Steps ("If Relevant"):**
     - Links to Mathematics (`/mathematics`) and Computer Science (`/computer-science`) only when relevant to the student's chosen path.

---

### 3.6 Our Vision Page (`/founder`)

- **Meta Title:** `Our Vision & Philosophy · NPconscious`
- **Sections:**
  1. **Hero:** `"Building Thinkers, Not Just Test-Takers"` — broadened slightly so the manifesto speaks to learning, technical curiosity, and life/career clarity across the whole Sanctuary, while retaining Nikhil Parag's credentials (`Information Science Engineer`, `Ex-Bhanzu, Airbnb, Concentrix`) and contact buttons.
  2. **Educational Manifesto (3 Pillars):** Preserves `01. The Real Source of Math Fear` (or broadened framing), `02. Visual Models Before Algebraic Symbols`, and `03. Emotional Safety in the Classroom` (core Sanctuary value!).
  3. **Founder's Letter (`Nikhil Parag`):** Preserves the January 2026 founding story and adds a short closing bridge explaining why NPconscious is growing into _A Sanctuary for Young Minds_ across Mathematics, Computer Science, and free Career Guidance.
  4. **Final CTA:** Links to `/admission` and WhatsApp.

---

### 3.7 Admission Page (`/admission`)

- **Meta Title:** `Admission & First Step · NPconscious`
- **Role (Kept at `/admission` per confirmation):**
  - Preserves the 3-step roadmap, all 5 existing Mathematics Diagnostic Assessment tracks (`Classes 1–5`, `Classes 6–10`, `Classes 11–12`, `Money & Math`, `Engineering`), and WhatsApp booking form.
  - **Additions needed in Phase 4:**
    - Allow selecting interest area in the form: `Mathematics`, `Computer Science [TBD]`, `Free Career Guidance`, or `Not sure yet — help me choose`.
    - Add a **Student / Lead Source** field (`How did you hear about NPconscious?`) per Playbook Part 4 Housekeeping so the student tracker records enquiry sources.
    - Keep `admission@npconscious.com` and `+91 80112 36456`.

---

## 4. Keep Unchanged List (Do Not Break)

- **Phone & WhatsApp Number:** `+91 80112 36456` / `https://wa.me/918011236456`
- **Email Addresses & Cloudflare Protection:** Keep Gmail compose links wrapped in `<!--email_off--> ... <!--/email_off-->`:
  - `help@npconscious.com`
  - `admission@npconscious.com`
  - `admin@npconscious.com`
- **Brand Logo & Icons:** `public/site.webp`, `public/site.png`, `public/logo.webp`, and existing favicon/apple-touch-icon assets.
- **Working Routes:** `/`, `/founder`, `/admission` (and `site: 'https://npconscious.com'` / `CNAME`).
- **Existing Mathematics Programmes (6 cards + 5 diagnostic tracks):** Names, target grades, session counts, school boards (`CBSE, ICSE, IGCSE, IB, State Board`), and WhatsApp inquiry links.
- **Parent & Student Testimonials (`src/pages/index.astro:678-736`):** Keep all three reviews (`Sarra`, `Maaz`, `Rohit`) **verbatim** as currently written.
- **Founder Facts:** `Nikhil Parag`, `Bachelor of Engineering in Information Science`, `Ex-Bhanzu, Airbnb, Concentrix`, founded `January 2026`.

---

## 5. Flagged Review Decisions (Signed Off)

| File & Line | Current Text / Asset | Reason Flagged | Approved Decision |
| :--- | :--- | :--- | :--- |
| `src/layouts/MainLayout.astro:16,19` | `"NPconscious · Making Mathematics Natural Again"` & maths-only meta description | Still maths-only; conflicts with Rule 1 & Part 4 checklist. | **Apply recommendation:** Update default title/description to Sanctuary positioning. |
| `src/layouts/MainLayout.astro:114` | `"Admissions Open 2026"` announcement bar | Implies admission-only / maths tuition; Career Guidance is free. | **Apply recommendation:** Update bar copy to Sanctuary + free guidance / conversation CTA (keeping `/admission` route). |
| `src/layouts/MainLayout.astro:297,340,366-369` | `"your child's math journey?"`, WhatsApp `"maths programs"`, footer `"Making Mathematics Natural Again"` | Maths-only framing in global shell. | **Apply recommendation:** Broaden copy to Sanctuary + 3 offerings. |
| `src/pages/index.astro:91` | `"100% Student-First Pacing"` | Contains `100%` (flagged by Phase 5 QA scan). | **Apply recommendation:** Change to `"Student-First Pacing"`. |
| `src/pages/founder.astro:104` | `"100% Student-First Vision"` | Contains `100%` (flagged by Phase 5 QA scan). | **Apply recommendation:** Change to `"Student-First Vision"`. |
| `src/pages/founder.astro:124` | `"Every child can master math"` | Could read as an outcome claim under Rule 6. | **Apply recommendation:** Reword to `"Every learner can build real understanding"`. |
| `src/pages/index.astro:349` | `"Concepts anchored in intuition never fade."` | Absolute claim under Rule 6. | **Apply recommendation:** Soften to `"Concepts anchored in intuition stay with learners far longer."` |
| `src/pages/index.astro:518` | `"Built for board exam excellence with zero cramming."` | Exam-outcome framing under Rule 6. | **Apply recommendation:** Soften to `"Built for deep board-exam readiness without cramming."` |
| `src/pages/index.astro:689` | Testimonial 1 (`Sarra`): `"After 2 months with NPconscious, he has started explaining proofs to us at dinner!"` | Parent review quote containing timeline detail. | **Keep as-is:** Approved to preserve parent review verbatim. |
| `src/pages/index.astro:709` | Testimonial 2 (`Maaz`): `"The Money & Mathematics module opened my eyes..."` | Learner review quote. | **Keep as-is:** Approved to preserve review verbatim. |
| `src/pages/index.astro:729` | Testimonial 3 (`Rohit`): `"No false promises of 100/100 in two days."` | Explicitly anti-guarantee parent review, but contains `"promises"` and `"100/100"` (will surface in Phase 5 scan). | **Keep as-is:** Approved to preserve parent review verbatim (mark as expected/approved during Phase 5 QA). |
| `src/pages/index.astro:204` | HTML comment: `<!-- ... Inertia Physics -->` | Contains word `Physics` in source comment. | **Apply recommendation:** Rename comment to `Inertia Motion` so repo-wide `Physics` checks return 0 matches. |
| `src/pages/admission.astro:111` | `graph.webp` (`alt="3 out of 5 students fear maths..."`) | Maths-only graphic on `/admission`. | **Apply recommendation:** Move/reuse on `/mathematics` and use a broader Sanctuary visual on `/admission`. |
| Route `/admission` & Nav `"Admission"` | Label `"Admission"` for all entry flows | Flagged in Playbook Phase 1 for free Career Guidance / `"Not sure yet?"`. | **Keep for now:** Retain `/admission` route & label as requested; revisit post-launch. |

---

## 6. `[TBD]` Placeholders Registry

1. **Computer Science (`/computer-science` & Home card):**
   - `[TBD]` First courses / syllabus topics
   - `[TBD]` Target learner ages / grades
   - `[TBD]` Instructor names & bios
   - `[TBD]` Format (1-on-1 vs cohort, session length)
   - `[TBD]` Pricing / course fees
2. **Career Guidance (`/career-guidance` & Footer):**
   - `[TBD]` Team sign-off on final plain-language partner referral & commission disclosure text
   - `[TBD]` Session format / duration / intake hours for free counselling
   - `[TBD]` Vetted partner categories / examples (if any should be named)
3. **Student / Lead Source Field (`/admission` & WhatsApp prefill):**
   - `[TBD]` Confirm dropdown options (e.g., Google Search, Instagram, Word of Mouth / Referral, School, Other) to match the team's student tracker.
