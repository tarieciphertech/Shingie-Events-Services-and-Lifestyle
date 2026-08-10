# Shingie Events Services and Lifestyle

This repository contains the production-ready website for **Shingie Events Services and Lifestyle**.

## Live site

Expected GitHub Pages URL:

https://tarieciphertech.github.io/Shingie-Events-Services-and-Lifestyle/

> If the site shows a 404 page, please confirm the repository GitHub Pages settings are configured to use the `gh-pages` branch as the publishing source.

## Deployment

This repository uses GitHub Actions to build the site and publish the generated `dist` folder to the `gh-pages` branch.

Workflow file:

- `.github/workflows/deploy.yml`

### Build commands

- `npm install`
- `npm run build`

### Notes

- The Pages site may take a few minutes to become available after the first deployment.
- If the site remains unavailable, verify repository Pages settings in GitHub and make sure `gh-pages` is selected as the source branch.
