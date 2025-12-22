# Project Structure Documentation

## 📊 Architecture Overview

NovaHA React application follows a feature-based modular architecture optimized for scalability and maintainability.

```
├── 📁 src/
│   ├── 🎨 components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── ...
│   │   └── layout/          # Layout components
│   │       ├── Header/
│   │       └── Footer/
│   │
│   ├── 📄 pages/
│   │   ├── admin/          # Admin panel pages
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── public/         # Public website pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Team.jsx
│   │   │   └── ...
│   │   └── index.jsx
│   │
│   ├── 🔌 services/        # API communication layer
│   │   ├── api.js          # Axios instance & base config
│   │   ├── userService.js
│   │   ├── projectService.js
│   │   └── ...
│   │
│   ├── 🪝 hooks/           # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── ...
│   │
│   ├── 🛠️ utils/            # Utility functions
│   │   ├── helpers.js      # Common helpers (format, truncate, etc.)
│   │   ├── storage.js      # LocalStorage/SessionStorage utilities
│   │   └── validators.js   # Form & data validation
│   │
│   ├── ⚙️ constants/        # Application constants
│   │   ├── routes.js       # All route paths
│   │   ├── navigation.js   # Navigation menu data
│   │   ├── team.js         # Team members data
│   │   └── index.js        # Export all constants
│   │
│   ├── 🔧 config/          # Configuration files
│   │   └── api.js          # API endpoints & config
│   │
│   ├── 📋 types/           # TypeScript definitions
│   │   └── index.d.ts      # Type definitions
│   │
│   ├── 🎨 styles/          # Global styles
│   │   ├── variables.css   # CSS custom properties
│   │   ├── global.css      # Global styles
│   │   └── ...
│   │
│   ├── 🖼️ assets/           # Static assets
│   │   └── (images, icons, etc)
│   │
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
│
├── 📁 public/              # Static files (served directly)
├── .env.example            # Environment template
├── .gitignore              # Git ignore rules
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
├── DEVELOPMENT_GUIDE.md    # Development guide
└── README.md               # Project README
```

## 📚 Directory Details

### `components/`

Reusable React components organized by type:

- **common/** - UI components (Button, Card, Modal, Form inputs, etc.)
- **layout/** - Layout components (Header, Footer, Sidebar, Navigation)

Each component typically has:

```
Component/
├── Component.jsx      # Component logic
├── Component.module.css (optional)
└── index.js          # Export
```

### `pages/`

Application pages/routes:

- **admin/** - Admin dashboard pages
- **public/** - Public-facing pages

Pages map to routes and can use multiple components.

### `services/`

API communication layer:

- Centralized API calls
- Consistent error handling
- Request/response interceptors
- Data transformation

```javascript
// Example: userService.js
export const userService = {
  getUser: (id) => api.get(`/users/${id}`),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
}
```

### `hooks/`

Custom React hooks for reusable logic:

```javascript
// Example: useAuth.js
export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  // ... hook logic
  return { user, loading, login, logout }
}
```

### `utils/`

Pure utility functions:

- No component imports
- No side effects
- Reusable across the app

```javascript
// Example: helpers.js
export const formatDate = (date) => { ... }
export const capitalize = (str) => { ... }
```

### `constants/`

Application-wide constants:

- Route definitions
- Navigation structure
- Team/company data
- API constants

### `types/`

TypeScript type definitions for better IDE support and type safety.

### `styles/`

Global stylesheets:

- **variables.css** - CSS custom properties (colors, spacing, fonts, etc.)
- **global.css** - Global styles, resets, utilities

## 🔄 Data Flow

```
User Interaction
    ↓
Component (Page/UI)
    ↓
Hook (useAuth, useFetch, etc.)
    ↓
Service (API call)
    ↓
Backend API
    ↓
Response → Store in State
    ↓
Re-render Component
```

## 📦 Key Features

### 1. Separation of Concerns

- Components: UI logic only
- Services: API communication
- Utils: Business logic
- Constants: Configuration

### 2. Reusability

- Common components in `components/common`
- Custom hooks in `hooks/`
- Utilities in `utils/`

### 3. Scalability

- Feature-based organization
- Easy to add new pages/features
- Consistent patterns across codebase

### 4. Maintainability

- Clear folder structure
- Consistent naming conventions
- Centralized configuration
- Type definitions

## 🎯 Best Practices

### Component Organization

```javascript
// Good: Single responsibility
export const UserCard = ({ user }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
)

// Avoid: Mixed concerns
export const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null)
  // ... fetch logic in component
}
```

### Service Layer Usage

```javascript
// Good: Centralized API calls
// In: userService.js
export const getUser = (id) => api.get(`/users/${id}`)

// Usage in component
const { data: user } = await userService.getUser(id)

// Avoid: Direct API calls in components
const response = await axios.get(`/api/users/${id}`)
```

### Hooks for Logic Reuse

```javascript
// Good: Custom hook
export const useUser = (id) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  // ... logic
  return { user, loading }
}

// Avoid: Duplicate logic in multiple components
```

### Constants Organization

```javascript
// Good: Centralized constants
// In: constants/routes.js
export const ROUTES = { HOME: "/", ABOUT: "/about" }

// Usage
import { ROUTES } from "@/constants"
navigate(ROUTES.HOME)

// Avoid: Magic strings
navigate("/")
```

## 🚀 Adding New Features

### 1. Create New Page

```bash
# Create page file
touch src/pages/public/NewPage.jsx

# Add route in constants/routes.js
export const PUBLIC_ROUTES = { ..., NEW_PAGE: '/new-page' }

# Add navigation in constants/navigation.js

# Update App.jsx with new route
```

### 2. Create New Service

```bash
# Create service file
touch src/services/newService.js

# Add API endpoint in config/api.js

# Export from services/index.js
```

### 3. Create Reusable Component

```bash
# Create component folder
mkdir src/components/common/NewComponent
touch src/components/common/NewComponent/NewComponent.jsx
touch src/components/common/NewComponent/index.js
```

---

**Last Updated:** December 2024
**Version:** 1.0
