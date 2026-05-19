# UK Clear Aligners — Market Intelligence Report

Interactive click-through prototype of a UK clear aligner market intelligence report, prepared for Treeline Dental Care (Lincoln, Nottingham, Sheffield, Sleaford).

## Files

```
index.html      — page structure and content
styles.css      — all styling (16 KB)
app.js          — interactive logic, data, Chart.js renderers (27 KB)
netlify.toml    — Netlify deploy config
README.md       — this file
```

External dependency: Chart.js 4.4.0 from jsDelivr CDN (loaded in `<head>`).

## How to view locally

Open `index.html` in any modern browser. For local development with the multi-file structure, serve from a simple HTTP server so the relative CSS/JS paths resolve:

```bash
# Python 3
python3 -m http.server 8000

# Or Node
npx serve .
```

Then visit http://localhost:8000.

## Deploy to Netlify

### Option 1 — Connect this repo (recommended)

1. Sign in to [app.netlify.com](https://app.netlify.com)
2. **Add new site → Import an existing project → GitHub**
3. Select `renju997/uk-aligners-report`
4. Build settings: Netlify will auto-detect from `netlify.toml`. No build command needed; publish directory is `.` (root).
5. **Deploy site**

Netlify auto-deploys on every push to `main`. The first deploy gives you a random URL like `https://xyz-abc-123.netlify.app`; you can change it under **Site settings → Change site name** or **Domain management → Add custom domain**.

### Option 2 — Drag-and-drop

1. Download or `git clone` this repo
2. Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
3. Done

### Option 3 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init      # link to a new or existing site
netlify deploy --prod
```

## What's covered in the prototype

1. **Dashboard** — at-a-glance market view + jump-to-section cards
2. **Market Sizing** — $367.7m UK 2025 → $2.33bn 2033 forecast (Grand View Research) + Chart.js growth chart
3. **Demand & Demographics** — BOS "Zoom Boom" stats, teen segment acceleration
4. **Brand Profiles** — clickable cards for Invisalign, Spark, ClearCorrect, Angel Aligner, Impress; each opens a side drawer with positioning, pricing, treatment model, trust signals, and strategic read
5. **Provider Density** — 8,229 UK Invisalign providers mapped against Treeline catchments; Sleaford (7), Lincoln (17), Nottingham (89), Sheffield (90)
6. **Search Demand** — Google Keyword Planner verified figures (19 May 2026 pull) including the 25:1 brand-vs-generic ratio in Nottingham
7. **Regulatory Landscape** — GDC, BOS teledentistry, CQC, SmileDirectClub closure context
8. **Trust & Complaints** — ranked complaint themes across UK aligner brands
9. **East Midlands Map** — local competitive set with Treeline highlighted
10. **Opportunity Matrix** — six prioritised plays, filterable by effort and time-to-impact
11. **Ongoing Intelligence System** — free-tools monitoring cadence (monthly / quarterly / annual)

## Data sources

All data is from free public sources. No paid SEO platforms.

- **Market sizing:** Grand View Research, Mordor Intelligence, Fortune Business Insights
- **Demand:** British Orthodontic Society, BDJ
- **Regulatory:** GDC, BOS, CQC
- **Trust:** Trustpilot (Invisalign UK, smile2impress)
- **Provider density:** alignerlocal.co.uk public Invisalign directory
- **Keyword volumes (primary):** Google Keyword Planner direct pull, May 2026
- **Keyword volumes (industry):** dominatedental.com SEO guides

## Caveats

- Market sizing figures are analyst estimates behind paid reports; only free abstracts were used.
- Google Keyword Planner data was pulled with AUD currency default — UK-only location filtering should be explicitly verified before relying on the "Invisalign Lincoln 500/mo" figure (may include Lincoln, Nebraska traffic).
- Provider counts include all GDC-registered Invisalign clinics regardless of tier (Bronze → Diamond).
- See the prototype's "Sources & Method" section for the full caveat list.

## Generated

19 May 2026.

## License

Internal use. Not for redistribution without permission.
