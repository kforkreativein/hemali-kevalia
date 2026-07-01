# CLAUDE.md — Hemali Kevalia Landing Page

## Project Overview

Single-page Meta-ads landing page for **Hemali Kevalia**, Clinical Dietitian at Krish Wellness Center.
- **Primary goal:** Drive WhatsApp enquiries and Calendly bookings
- **Target audience:** Indian families, women with PCOS/thyroid, anyone struggling with weight
- **Ad traffic source:** Meta (Facebook + Instagram)
- **Primary market:** Vadodara, Surat, Mumbai — and online across India

## Files

```
hemali-kevalia/
├── index.html       ← Single landing page — all sections here
├── style.css        ← All styles (CSS custom properties, no framework)
├── script.js        ← Nav scroll, FAQ accordion, lightbox, FB Pixel events
├── CLAUDE.md        ← This file
└── assets/
    ├── hemali-hero.jpg    ← REPLACE placeholder (hero portrait, 700×860px)
    ├── hemali-about.jpg   ← REPLACE placeholder (about section, 700×700px)
    └── results/
        ├── result-1.jpg   ← Client transformation photos (square or 9:16)
        ├── result-2.jpg
        ├── result-3.jpg
        ├── result-4.jpg
        ├── result-5.jpg
        └── result-6.jpg
```

## Brand Facts (Always Use These Exactly)

| Field | Value |
|---|---|
| Name | Hemali Kevalia |
| Credential | Clinical Dietitian — Certified by IICTN |
| Experience | 12+ years |
| Clients | 500+ individuals & families |
| Phone / WhatsApp | +91 90675 99220 |
| WhatsApp link | `https://wa.me/919067599220` |
| Email | hello@hemalikevalia.com |
| Location | Vadodara, Gujarat, India |
| Instagram | @hemali_kevalia24 |
| Facebook | profile.php?id=100063670346023 |
| Brand name | Krish Wellness Center |
| Copyright | © 2026 Krish Wellness Center |

## Design Tokens

```css
--bg:        #f2f5f2   /* pale mint — default page background */
--bg-dark:   #1a3d28   /* deep forest green — dark sections */
--bg-card:   #e6f0ea   /* light green — card backgrounds */
--green:     #1d5c3a   /* primary green — CTAs, links */
--green-lbl: #2d6b48   /* small label text */
--text:      #1a2e1e   /* dark body text */
--text-muted:#5a7265   /* secondary text */
--wa:        #25D366   /* WhatsApp green — ONLY for wa buttons */
```

Fonts: `Playfair Display` (headings, italic accents) + `Inter` (body, labels, buttons)

## CTA Rules — CRITICAL

### WhatsApp button copy: NEVER write "WhatsApp X" as the button label.

**Wrong:**
- "WhatsApp Hemali Now"
- "WhatsApp Me"
- "Chat on WhatsApp"
- "WhatsApp to Enquire"

**Right — always outcome-led:**
- "Get My Free Diet Plan →"
- "Claim My Free Consultation →"
- "Start My Weight Loss Journey →"
- "Yes, I Want to Lose Weight →"
- "Book My Free 15-Min Call →"
- "I Want Results Like These →"
- "Get My Personalized Plan →"
- "Talk to a Dietitian — Free →"

### General CTA rules
- Every section must have at least one CTA button
- Primary CTA = WhatsApp (green, `btn-wa`) — highest conversion in India
- Secondary CTA = Calendly booking (`btn-outline` or `btn-primary`)
- Button text = **action verb + what they get** — never just a noun
- Never use: "Submit", "Learn More", "Click Here", "Sign Up"

### WhatsApp pre-filled message text (the `?text=` param)
Keep it natural, first-person, specific to the section context:
- Hero: `I'd like to book a free consultation`
- Pain section: `I want to fix my diet and lose weight for good`
- Services: `I'm interested in the [specific] program`
- Results: `I saw your client results and want the same for me`
- FAQ: `I have a question before booking`

## Task Tracking Rules

**Always use TaskCreate at the start of any multi-step work.** Mark each task:
- `in_progress` the moment you start it
- `completed` the moment it's done

Never batch-complete at the end. The user watches the task list in real time.

## Placeholder Replacement Checklist

Before going live, the user must:
- [ ] Replace `YOUR_PIXEL_ID_HERE` in `<head>` with actual Facebook Pixel ID
- [ ] Replace Unsplash hero photo with `assets/hemali-hero.jpg` (Hemali's real photo)
- [ ] Replace Unsplash about photo with `assets/hemali-about.jpg`
- [ ] Add 6 result photos to `assets/results/result-1.jpg` through `result-6.jpg`
- [ ] Add Calendly URL (instructions in index.html booking section comments)
- [ ] Verify all WhatsApp links open correctly on mobile

## Sections & Order

1. `#hero` — Outcome headline + WhatsApp CTA + social proof
2. `#pain` — 4 pain cards + bridge CTA
3. `#about` — Story + IICTN credentials + CTA
4. `#services` — 3 program cards, each with CTA
5. `#how` — 3-step process + CTA
6. `#stats` — 4 stat numbers
7. `#results` — 6-card image gallery (swipe on mobile) + lightbox + CTA
8. `#testimonials` — 3 testimonial cards + CTA
9. `#booking` — Calendly embed + WhatsApp fallback
10. `#faq` — Accordion + CTA
11. `#footer` — Brand info + socials + contact

## Mobile Notes

- Mobile is the PRIMARY target (Meta ads traffic)
- Results grid scrolls horizontally on mobile (snap scroll)
- All CTAs go full-width on `max-width: 480px`
- Sticky side book button is hidden on mobile (`display: none` at 600px)
- WhatsApp float button handles mobile booking access
- Min tap target: 48px height on all buttons (`min-height: 50px` on `.btn`)
