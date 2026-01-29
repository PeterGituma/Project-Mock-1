# CLI Prompts Showcase

A small React + TypeScript app that showcases commonly-used command-line prompts (git, docker, kubernetes, curl, ssh, linux coreutils, and more).

## Features

- Searchable, filterable list of prompts
- Prompt detail with copy-to-clipboard
- Export JSON / CSV of dataset
- Syntax-highlighted command blocks
- Ready for Netlify deployment

## Quick start (macOS / Linux)

1. Install dependencies

   npm install

2. Run dev server

   npm run dev

3. Build

   npm run build

4. Run preview

   npm run preview

## Deploy to Netlify (recommended)

This project is ready to be deployed on Netlify. Two common ways:

1. Connect your GitHub repo to Netlify and set the build command to `npm run build` and publish directory to `dist`.

2. Use the Netlify CLI:
   - Install netlify-cli: `npm i -g netlify-cli`
   - Run `npm run build`
   - Deploy: `netlify deploy --dir=dist --prod`

> SPA routing: the `netlify.toml` and `public/_redirects` files include a redirect rule so client-side routing works correctly.

### Automatic deploy via GitHub Actions

A sample GitHub Actions workflow has been added in `.github/workflows/netlify-deploy.yml`. To enable it you must add two repository secrets:

- `NETLIFY_AUTH_TOKEN` (your personal access token)
- `NETLIFY_SITE_ID` (site id for your Netlify site)

The workflow builds the project and runs `netlify deploy` using those secrets.

## Adding a new prompt

Edit `data/prompts.json`. Each entry is an object with: `id`, `title`, `category`, `description`, `command`, `tags`.

Example:

```json
{
  "id": "my-new-prompt",
  "title": "My new useful command",
  "category": "misc",
  "description": "Short description",
  "command": "echo 'hello world'",
  "tags": ["example", "demo"]
}
```
