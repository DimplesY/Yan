# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Architecture Overview

This is a Next.js 15 personal portfolio site for DimplesY using the App Router architecture.

### Key Technologies
- **Next.js 15** with App Router and experimental view transitions
- **TypeScript** with strict configuration
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **Lenis** for smooth scrolling
- **next-themes** for theme switching

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `ui/` - Base UI components
  - `page-*` - Layout-specific components (header, footer, layout)
- `providers/` - React context providers
- `lib/` - Utility functions
- `public/` - Static assets

### Core Layout Pattern
The site uses a three-layer layout structure:
1. **RootLayout** (`app/layout.tsx`) - Global layout with fonts, theme provider, and smooth scrolling
2. **PageLayout** (`components/page-layout.tsx`) - Content container with consistent styling
3. **PageHeader/PageFooter** - Navigation and footer components

### Styling Approach
- Uses Tailwind CSS v4 with custom CSS variables for theming
- Implements dark/light theme switching via next-themes
- Custom font configuration with Geist Sans, Geist Mono, and Fira Code

### Animation System
- Uses Motion (Framer Motion) for page transitions and component animations
- Implements view transitions for smooth page changes
- ReactLenis provides smooth scrolling throughout the site

## Development Notes

- The site uses `pnpm` as the package manager
- TypeScript paths are configured with `@/*` alias pointing to project root
- ESLint and Prettier are configured for code quality
- The project includes lint-staged for pre-commit hooks

## Component Architecture

### UI Components
- Base UI components in `components/ui/` follow shadcn/ui patterns
- Components use `class-variance-authority` for variant-based styling
- Radix UI primitives provide accessible component foundations

### Theming System
- Theme switching implemented via `next-themes` with system preference detection
- CSS custom properties defined in `app/globals.css` for light/dark themes
- Theme-aware components use Tailwind's dark: modifier

### Typography & Fonts
- Primary: Geist Sans (variable font)
- Monospace: Geist Mono and Fira Code
- Font loading optimized with Next.js font optimization

## Configuration Details

- **Turbopack** enabled for fast development builds
- **View Transitions API** experimental feature enabled
- **Image optimization** configured for GitHub avatars
- **Strict TypeScript** configuration with comprehensive type checking