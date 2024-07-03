## SellCrea8

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Project Details](#project-details)
  - [Scope of the Product](#scope-of-the-product)
  - [Overview](#overview)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
  - [Branch Structure](#branch-structure)
  - [Creating a New Branch](#creating-a-new-branch)
  - [Pull Requests](#pull-requests)
  - [Commit Messages](#commit-messages)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Project Details

### Scope of the Product

SellCrea8 will be a web application featuring:
- Landing page
- User onboarding
- Dashboard for managing services
- Payment integration
- Appointments and calendar booking
- Project tracking
- Customer support
- Additional "nice-to-have" features

### Overview

SellCrea8 aims to centralize creative and digital services into an affordable and user-friendly platform, supporting various business needs with high-quality, personalized solutions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribution Guidelines

### Branch Structure

We have three main branches in our repository:

- **main**: This is the production branch. No direct pushes are allowed.
- **staging**: This branch is used for hosting on a subdomain before going to production. No direct pushes are allowed.
- **dev**: This is the development branch where all new features and bug fixes are merged first.

### Creating a New Branch

When working on any features or fixes, create a new branch from `dev` using the following naming conventions:

- **Feature implementation**: `feat/name-of-feature`
- **Bug fixes**: `bug/name-of-bug`
- **UI design implementation**: `design/name-of-design`
- **Codebase cleanup**: `cleanup/description`

Example:
```bash
git checkout dev
git pull origin dev
git checkout -b feat/awesome-new-feature
```

### Pull Requests

1. Ensure your branch is up to date with `dev`.
2. Once your work is complete, push your branch to the remote repository.
3. Create a Pull Request (PR) to merge your branch into `dev`.
4. Add the team lead (or designated reviewer) for approval.
5. After the PR is approved and merged, delete the branch to keep the repository clean.

### Commit Messages

All commit messages must be descriptive and follow these guidelines:

- Use the present tense ("Add feature" not "Added feature").
- Be concise but descriptive ("Fix crash on load" not "Fix bug").
- Use a prefix for your commits:
  - **feat**: for new features
  - **fix**: for bug fixes
  - **design**: for design changes
  - **cleanup**: for codebase cleanup

Example:
```bash
git commit -m "feat: add user authentication"
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
