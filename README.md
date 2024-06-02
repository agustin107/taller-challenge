# Taller Challenge

### Setup Instructions

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. The app should be up and running at http://localhost:3000

### Design and Architectural Choices

- This monorepo is composed of a single Next.js site ([./apps/app](./apps/app)) that has installed one local packages:
  - `./packages/ui`: Exports UI components that use TypeScript and Tailwind CSS and is compiled by SWC.
- The monorepo is using [Turborepo](https://turborepo.org/) and [pnpm workspaces](https://pnpm.io/workspaces) to link packages together.

Decided to start from the monorepo example with a single Next.js site that has installed two local packages. I've updated to use a single package and tweaked different parts of the app to make it more modular and scalable.

The app is architected to be modular and scalable. The UI components are separated into a package to be reused across the app. The app is built with TypeScript and Tailwind CSS, and compiled by SWC.

The app has the following structure:

```
monorepo
├── apps
│   └── app
│       ├── public (static assets)
│       ├── src
│       │   ├── components (app-specific components)
│       │   ├── contexts (React contexts)
│       │   ├── hooks (custom hooks)
│       │   ├── pages (Next.js pages)
│       │   ├── types (TypeScript types)
│       └── ...
└── packages
    └── ui (UI components)
        └── ...
```
