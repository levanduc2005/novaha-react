# NovaHA Development Guide

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create .env file from template
cp .env.example .env

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173
```

## 📁 Project Structure

```
novaha-react/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (organized by route)
│   ├── services/            # API services & data fetching
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions & helpers
│   ├── constants/           # App constants & configuration
│   ├── config/              # Configuration files
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Global styles & CSS variables
│   ├── assets/              # Images, icons, static files
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── public/                  # Static assets served directly
├── vite.config.js           # Vite configuration
├── .env.example             # Environment variables template
├── package.json
└── README.md
```

## 🎯 Development Best Practices

### 1. Component Organization

- Keep components small and focused
- Reusable components go in `components/common`
- Layout components in `components/layout`
- Page-specific components in their respective page folders

### 2. Styling

- Use CSS variables from `styles/variables.css`
- Follow mobile-first responsive design
- Keep component styles in the same file or create `.css` alongside
- Support dark mode with CSS variables

### 3. Import Paths

```javascript
// Use absolute imports (if configured)
import { Button } from "@/components/common"
import { formatDate } from "@/utils/helpers"
import { API_ENDPOINTS } from "@/config/api"

// Avoid relative imports
// import Button from '../../../components/common/Button'
```

### 4. Constants & Configuration

- Define all constants in `constants/`
- API endpoints in `config/api.js`
- Route paths in `constants/routes.js`
- Navigation data in `constants/navigation.js`

### 5. Data Fetching

- Create service files for API calls in `services/`
- Use consistent error handling
- Implement loading and error states
- Consider caching strategies for frequently used data

### 6. State Management

- Use React hooks (useState, useContext) for local state
- Create custom hooks in `hooks/` for reusable logic
- Consider Redux/Zustand for global state if needed

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server (Vite)

# Build & Deploy
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Deployment
npm run deploy       # Deploy to Vercel (configured)
```

## 📝 Naming Conventions

| Type        | Convention       | Example           |
| ----------- | ---------------- | ----------------- |
| Components  | PascalCase       | `UserProfile.jsx` |
| Functions   | camelCase        | `getUserData()`   |
| Constants   | UPPER_SNAKE_CASE | `API_BASE_URL`    |
| CSS Classes | kebab-case       | `.user-profile`   |
| Variables   | camelCase        | `isLoading`       |

## 🎨 CSS Variables

All CSS variables are defined in `src/styles/variables.css`:

```css
/* Colors */
--primary: #0f172a
--accent-1: #0ea5ff
--accent-2: #0080b8

/* Spacing */
--space-2: 8px
--space-4: 16px
--space-6: 24px

/* Typography */
--font-family: system fonts
--radius: 8px

/* Shadows */
--shadow: standard shadow
--shadow-lg: large shadow
```

Use them in your CSS:

```css
.my-component {
  color: var(--primary);
  padding: var(--space-4);
  border-radius: var(--radius);
}
```

## 🔐 Environment Variables

Create `.env` from `.env.example`:

```bash
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

Access them in code:

```javascript
const apiUrl = import.meta.env.REACT_APP_API_URL
```

## 📦 Dependencies

- React 18+ - UI library
- React Router - Routing
- Vite - Build tool
- ESLint - Code quality
- Prettier - Code formatting

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
npm run build
vercel
```

### Other Platforms

1. Run `npm run build`
2. Deploy the `dist/` folder
3. Configure environment variables on the platform

## 🐛 Debugging

```javascript
// Browser DevTools
// Open DevTools: F12 or Cmd+Option+I

// React DevTools Extension
// Install from Chrome/Firefox extension store

// Console logging
console.log("value:", value)
console.error("error:", error)
console.warn("warning:", warning)
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## ❓ FAQ

**Q: Where should I put API calls?**
A: In `services/` folder, create a service file for each resource.

**Q: How do I add new pages?**
A: Create a new file in `pages/public` or `pages/admin`, add route in `App.jsx`.

**Q: How do I style components?**
A: Use CSS files alongside components or inline styles with CSS variables.

**Q: How do I manage global state?**
A: Start with Context API, upgrade to Redux/Zustand if needed.

## 📧 Support

For questions or issues:

1. Check existing documentation
2. Review similar implementations
3. Ask team members on Slack/Discord
4. Create an issue on GitHub

---

**Last Updated:** December 2024
**Maintained By:** NovaHA Team
