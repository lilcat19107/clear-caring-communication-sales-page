# Clear & Caring Communication Sales Page

Static landing page mockup for the Clear & Caring Communication virtual summit.

## Cloudflare Pages

Recommended deployment settings:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`

The site is a static `index.html` with local assets in `assets/`.

## Circle Checkout

All registration buttons link to the single $45 Circle checkout:

- `https://medthrive.circle.so/checkout/clear-and-caring-communication`

The ticket includes live summit access, three expert-led sessions, and 7 days of replay access.

Paste the Microsoft Clarity tracking snippet in the `<head>` where the TODO comment appears.

## Conversion Tracking

The CTA buttons already include click-tracking hooks:

- `regular_paywall_click`

When the Microsoft Clarity snippet is added, these custom events will fire on paywall button clicks.

Optional additional launch snippets:

- Google Analytics 4 for traffic source reporting and campaign attribution.
- Meta Pixel or LinkedIn Insight Tag only if you will run ads on those platforms.
- UTM parameters on outreach links from societies, LinkedIn, email, and speaker channels.

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8026
```

Then visit `http://127.0.0.1:8026`.
