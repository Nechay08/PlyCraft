# PlyCraft website

Static GitHub-ready website for **PlyCraft SIA**.

## Files

- `index.html` — page structure and content
- `styles.css` — full visual design / responsive layout
- `script.js` — LV/EN switch, mobile menu, animations, contact email logic
- `assets/` — website imagery
- `favicon.svg` — browser icon

## Open locally

Double-click `index.html` or open it in a browser.

## Publish with GitHub Pages

1. Create a new GitHub repository, e.g. `plycraft-website`.
2. Upload **the contents of this folder** to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)` and click **Save**.
6. GitHub will publish the site and give you a `github.io` address.

## Connect `plycraft.eu`

After GitHub Pages works:

1. In **Settings → Pages → Custom domain**, enter `plycraft.eu`.
2. GitHub will show the DNS records you need.
3. Add those records at your domain/DNS provider.
4. After verification, enable **Enforce HTTPS**.

## Contact form

The current form is fully static and opens the visitor's email application with a prepared message to `info@plycraft.eu`. The email address is assembled in JavaScript rather than printed as a plain mailto link in the HTML.

For true server-side form delivery without opening an email app, connect a form backend such as Formspree or your own API endpoint.

## Notes

This package is a clean static reconstruction prepared for GitHub from the latest available PlyCraft project materials. It is not a direct source-code export from the previously published ChatGPT-hosted instance, because that original hosted source bundle was not available as an exportable project file.
