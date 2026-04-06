# Dioriza Resume

Professional resume website built with [Hugo](https://gohugo.io/).

This project presents Bobby Ananta Dioriza's professional profile as a responsive personal resume site, with:

- professional resume layout
- dark mode by default
- print/download-friendly resume export
- mobile-friendly presentation

## Tech Stack

- Hugo Extended
- Hugo templates
- custom CSS
- vanilla JavaScript

## Project Structure

Key files and directories:

- `content/_index.md`  
  Main resume content and structured data.

- `layouts/index.html`  
  Homepage layout.

- `layouts/partials/`  
  Resume content partials for main and sidebar sections.

- `assets/css/main.css`  
  Main styles, including responsive and print styles.

- `assets/js/theme.js`  
  Theme toggle and download/print behavior.

- `static/`  
  Static assets such as images and favicon files.

## Requirements

Install Hugo Extended:

- Windows: `winget install Hugo.Hugo.Extended`
- Verify installation: `hugo version`

## How To Run

Start the local development server:

```powershell
hugo server
```

Then open:

```text
http://localhost:1313
```

If `hugo` is newly installed and not yet available in the current shell, restart the terminal first.

## Build

Generate the production site:

```powershell
hugo
```

The generated static site will be available in:

```text
public/
```

## Content Editing

Most resume content is maintained in:

```text
content/_index.md
```

Update this file to change:

- profile summary
- experience
- education
- skills
- projects
- contact links
- blog/footer link

## Download Resume

The site includes a `Download Resume` button.

This uses the browser print dialog so the resume can be saved as PDF. Print styles are customized so the exported version is cleaner than the web UI.

## Notes

- The web version and print version are intentionally different.
- Footer blog content is hidden during print/export.
- Favicon assets are served from `static/`.
