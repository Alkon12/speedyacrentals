# CLAUDE.md - Speedy AC Rentals Project Guide

## Commands
- `npm run dev`: Start development server with turbopack
- `npm run build`: Build the project for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint code linting

## Code Style Guidelines
- **TypeScript**: Use strict typing with explicit type annotations
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import Component from '@/components/Component'`)
- **Components**: Use functional components with explicit return types
- **Naming**: 
  - PascalCase for components and files (e.g., `Header.tsx`)
  - camelCase for variables, functions, and instances
- **CSS**: Use Tailwind CSS for styling with mobile-first approach
- **Dark Mode**: Support both light and dark color schemes
- **Error Handling**: Use try/catch for async operations with proper error states
- **File Structure**:
  - `/src/app/` - Next.js app router pages
  - `/src/components/` - Reusable UI components
  - `/src/lib/` - Utilities and shared code

## Best Practices
- Follow React's functional programming principles
- Use client/server components properly (mark client components with 'use client')
- Leverage Next.js image optimization with `<Image>` component
- Maintain responsive design using Tailwind's utility classes