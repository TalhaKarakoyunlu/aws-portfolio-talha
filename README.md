# AWS Portfolio – Talha

Personal portfolio built with React + Vite, deployed on AWS using S3 and CloudFront, and shipped through an automated GitHub Actions pipeline.

## Highlights

- React 19 + Vite 7 for a fast developer and runtime experience
- Static hosting on S3 with global delivery via CloudFront
- CI/CD with GitHub Actions and OIDC-based AWS authentication
- Automated CloudFront cache invalidation on every deployment

## Architecture

- `vite build` generates the static `dist/` output.
- The `dist/` folder is synced to the S3 bucket `portfolio-website-talha-2026`.
- CloudFront serves the site globally from the S3 origin.
- GitHub Actions builds and deploys on every push to `main`.

## CI/CD Pipeline

Workflow: `github/workflows/deploy.yml`

Steps:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies and build
4. Assume AWS role via OIDC
5. Sync `dist/` to S3
6. Invalidate CloudFront cache

## Getting Started

Prerequisites:
- Node.js 20+
- npm 9+

Install dependencies:
```
npm install
```

Start the dev server:
```
npm run dev
```

Production build:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Required GitHub Secrets

- `AWS_ROLE_ARN` – IAM role for OIDC-based deployment
- `CLOUDFRONT_DISTRIBUTION_ID` – CloudFront distribution to invalidate

## Project Structure

- `src/` – React application source
- `github/workflows/deploy.yml` – CI/CD pipeline
- `dist/` – Vite production build output (generated)

## Notes

- AWS region is set to `eu-north-1` in the workflow.
- Update the S3 bucket name in the workflow if deploying to a different bucket.
