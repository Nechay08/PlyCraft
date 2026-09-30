# PlyCraft

The original bilingual PlyCraft website, synchronized from published Sites version 8 (28 September 2026), source commit `156c03ae7e439e531b215510bf432545502fe0d7`.

This replaces the reconstructed copy with the published design, Latvian/English content, original logo, current photographs, and locally hosted Manrope fonts. All 11 photographs used on the page are included under `assets/`, alongside the logo and four font files. Removed photographs from earlier designs are not displayed.

## Edit

- `index.html`: layout and Latvian content
- `app.js`: English translations, language selection, animations, contact form
- `style.css`: desktop and mobile styling
- `fonts.css`: local font declarations
- `assets/`: images and fonts referenced by the site

## Preview

Run `python3 -m http.server 8000` from this directory, then open `http://localhost:8000`. No build step or external dependencies are required.

## Hosting

Serve this directory as a static website. For GitHub Pages, select the `main` branch and `/ (root)` in the repository's Pages settings. A repository commit by itself does not change the existing Sites publication at `https://plycraft.eu`; configure the desired host separately before changing domain records.

## Contact form

The form validates required fields and opens the visitor's email application with a prepared enquiry addressed to `info@plycraft.eu`. The visitor must send that message. This is not a server-side email service. The address is assembled in JavaScript to reduce simple email scraping; it is not complete protection against bots.
