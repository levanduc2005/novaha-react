# NovaHA Project Structure

## 📁 Cấu trúc dự án

```
src/
├── components/           # React components
│   ├── common/          # Reusable components (Button, Card, Modal, etc.)
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/               # Page components
│   ├── admin/          # Admin pages
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   ├── public/         # Public pages
│   │   ├── HomePage.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Team.jsx
│   │   ├── Recruitment.jsx
│   │   ├── TalentHub.jsx
│   │   ├── Student.jsx
│   │   └── Contact.jsx
│   └── index.jsx
├── services/           # API services
│   └── api.js
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
│   ├── helpers.js      # Common helper functions
│   └── storage.js      # LocalStorage utilities
├── constants/          # Constants
│   ├── routes.js       # Route paths
│   ├── navigation.js   # Navigation data
│   └── team.js         # Team data
├── config/             # Configuration
│   └── api.js          # API configuration
├── types/              # Type definitions (TypeScript)
│   └── index.d.ts
├── styles/             # Global styles
│   ├── variables.css   # CSS variables
│   ├── global.css      # Global styles
│   └── ...
├── assets/             # Static assets (images, icons)
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── README.md           # This file
```

## 🎯 Naming Conventions

### Components

- PascalCase for component files: `UserProfile.jsx`, `Button.jsx`
- One component per file (unless it's a small related component)
- Subfolder for component groups

### Pages

- PascalCase for page files: `HomePage.jsx`, `AdminLogin.jsx`
- Organize by feature/section in subfolders

### Functions & Variables

- camelCase for functions and variables: `getUserData()`, `isActive`
- UPPER_SNAKE_CASE for constants: `API_URL`, `MAX_RETRIES`

### CSS Classes

- kebab-case for CSS classes: `.user-profile`, `.btn-primary`
- Use CSS variables defined in `styles/variables.css`

## 📝 File Organization Guidelines

### Components (`components/`)

- `common/` - Reusable UI components
- `layout/` - Layout-related components (Header, Footer, etc.)
- Group related components in subfolders

### Pages (`pages/`)

- `public/` - User-facing pages
- `admin/` - Admin dashboard pages
- One page per file
- Page-specific styles inline or in separate `.css` file

### Services (`services/`)

- API calls and data fetching logic
- One service file per resource/feature
- Use consistent naming: `userService.js`, `projectService.js`

### Utils (`utils/`)

- Reusable helper functions
- No component logic here
- Pure functions preferably

### Constants (`constants/`)

- Application constants and configuration
- Navigation data, route paths
- Team/company information

## 🔄 Import/Export Best Practices

```javascript
// ✅ Good
import { Button, Card } from "@/components/common"
import { formatDate } from "@/utils/helpers"
import { API_ENDPOINTS } from "@/config/api"

// ❌ Avoid
import Button from "../../../components/common/Button"
import { formatDate } from "../../../utils/helpers"
```

## 🎨 Styling

- Use CSS variables defined in `styles/variables.css`
- Prefer global styles over inline styles when possible
- Mobile-first responsive design
- Dark mode support built-in

## 📚 Additional Resources

- [React Best Practices](https://react.dev)
- [CSS Variables Reference](./styles/variables.css)
- [Type Definitions](./types/index.d.ts)
