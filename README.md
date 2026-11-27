# Rares Georgescu — Portfolio

A static portfolio site built with HTML, CSS, and JavaScript.

## Update the portfolio

- Add or edit project cards in the `projects` array at the top of `script.js`.
- Add a real contact email and GitHub or LinkedIn links when you have the URLs.
- Keep descriptions accurate: mark work as in progress until the feature exists.

The site is responsive and does not require a build step or external service to display. Google Fonts are used when a network connection is available; system fonts remain as a fallback.

## Publishing

The site is served by GitHub Pages from the `gh-pages` branch, which holds only the contents of `dist/`. After committing changes on `main`, publish them with:

```bash
git push origin main && git subtree push --prefix dist origin gh-pages
```
