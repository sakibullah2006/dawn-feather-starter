# Dawn Feather Starter

A modern Shopify theme starter built on top of Shopify's Dawn theme, enhanced with Tailwind CSS v4, Alpine.js, and Vite for an improved developer experience.

[Getting started](#getting-started) |
[Tech stack](#tech-stack) |
[Development](#development) |
[Project structure](#project-structure) |
[Developer tools](#developer-tools) |
[License](#license)

## Overview

Dawn Feather Starter combines the solid foundation of Shopify's Dawn theme with modern web development tools:

- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **Alpine.js** - Lightweight JavaScript framework for interactive components
- **Vite** - Next-generation frontend tooling for fast builds and hot module replacement
- **Dawn Theme** - Shopify's reference theme with Online Store 2.0 features

This starter maintains Dawn's HTML-first, performance-focused approach while providing modern developer tools and workflows.

## Tech Stack

- **Theme Base**: Shopify Dawn
- **CSS**: Tailwind CSS v4 with Vite plugin
- **JavaScript**: Alpine.js v3
- **Build Tool**: Vite v7
- **Package Manager**: pnpm
- **Code Formatting**: Prettier with Tailwind plugin

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) - For theme development

### Installation

1. Clone this repository:

```sh
git clone <your-repo-url>
cd dawn-feather-starter
```

2. Install dependencies:

```sh
pnpm install
```

3. Start the development servers:

In one terminal, start Tailwind/Vite watch mode:

```sh
pnpm dev:tailwind
```

In another terminal, start Shopify theme development:

```sh
pnpm dev:shopify
```

This will compile your Tailwind CSS and start the Shopify theme preview with hot reload.

## Development

### Available Scripts

- `pnpm dev:tailwind` - Runs Vite in watch mode to compile Tailwind CSS
- `pnpm dev:shopify` - Starts Shopify CLI theme development server
- Run both scripts simultaneously for full development workflow

### Tailwind CSS Setup

Tailwind CSS is configured through Vite and outputs to the assets directory. The main configuration can be found in [vite.config.js](vite.config.js).

### Alpine.js Usage

Alpine.js is included as a dependency and can be initialized in your theme's JavaScript files. Use Alpine's directives (`x-data`, `x-show`, `x-on`, etc.) in your Liquid templates for reactive components.

## Project Structure

```
dawn-feather-starter/
├── assets/          # Compiled CSS/JS and theme assets
├── config/          # Theme settings and configuration
├── layout/          # Theme layout files
├── locales/         # Translation files
├── sections/        # Theme sections
├── snippets/        # Reusable Liquid snippets
├── src/             # Source files (compiled by Vite)
├── templates/       # Page templates
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

## Staying up to date with Dawn changes

To pull in the latest Dawn theme changes:

1. Add the Dawn repository as an upstream remote:

```sh
git remote add upstream https://github.com/Shopify/dawn.git
```

2. Fetch and merge Dawn updates:

```sh
git fetch upstream
git pull upstream main
```

Note: Be careful when merging as it may conflict with your custom Tailwind and Alpine.js integrations.

## Developer tools

This starter is set up with modern development tools to enhance your workflow.

### Shopify CLI

[Shopify CLI](https://github.com/Shopify/shopify-cli) helps you build Shopify themes faster and is used to automate and enhance your local development workflow. It comes bundled with a suite of commands for developing Shopify themes—everything from working with themes on a Shopify store (e.g. creating, publishing, deleting themes) or launching a development server for local theme development.

You can follow this [quick start guide for theme developers](https://shopify.dev/docs/themes/tools/cli) to get started.

### Theme Check

We recommend using [Theme Check](https://github.com/shopify/theme-check) as a way to validate and lint your Shopify themes.

We've added Theme Check to Dawn's [list of VS Code extensions](/.vscode/extensions.json) so if you're using Visual Studio Code as your code editor of choice, you'll be prompted to install the [Theme Check VS Code](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension upon opening VS Code after you've forked and cloned Dawn.

You can also run it from a terminal with the following Shopify CLI command:

```bash
shopify theme check
```

### Prettier

Code formatting is handled by Prettier with the Tailwind CSS plugin for consistent class ordering.

### Vite

Vite provides fast build times and an excellent developer experience. Configuration can be found in [vite.config.js](vite.config.js).

## Best Practices

### Styling with Tailwind

- Use Tailwind utility classes directly in your Liquid templates
- Keep custom CSS minimal - leverage Tailwind's utilities first
- Use Tailwind's configuration for theme consistency

### JavaScript with Alpine.js

- Use Alpine.js for interactive components and state management
- Keep JavaScript minimal and progressive - enhance, don't replace functionality
- Alpine works well with Shopify's server-rendered approach

### Performance

- This starter maintains Dawn's performance-first approach
- Tailwind CSS is compiled and optimized through Vite
- Alpine.js is lightweight (15kb gzipped) and doesn't impact performance

## Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Dawn Documentation](https://github.com/Shopify/dawn)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Alpine.js Documentation](https://alpinejs.dev)
- [Vite Documentation](https://vitejs.dev)

## License

This project is based on Shopify's Dawn theme. Original Dawn theme: Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.

---

Built with ❤️ using Dawn, Tailwind CSS, Alpine.js, and Vite
