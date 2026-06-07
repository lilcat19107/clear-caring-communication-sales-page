# Clear & Caring Communication Sales Page

Static landing page mockup for the C3 / Clear Care Communication virtual summit.

## Cloudflare Pages

Recommended deployment settings:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`

The site is a static `index.html` with local assets in `assets/`.

## Final Launch Replacements

Replace these placeholder links in `index.html` after Circle Paywalls are created:

- `#circle-paywall-regular` -> Regular ticket Circle Paywall checkout link
- `#circle-paywall-vip` -> VIP ticket Circle Paywall checkout link

Paste the Microsoft Clarity tracking snippet in the `<head>` where the TODO comment appears.

## Conversion Tracking

The CTA buttons already include click-tracking hooks:

- `regular_paywall_click`
- `vip_paywall_click`

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
