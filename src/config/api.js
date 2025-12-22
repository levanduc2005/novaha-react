// API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  TIMEOUT: 10000,
  HEADERS: {
    "Content-Type": "application/json",
  },
}

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/auth/register",
  },
  USERS: {
    LIST: "/users",
    GET: (id) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
  },
  PROJECTS: {
    LIST: "/projects",
    GET: (id) => `/projects/${id}`,
    CREATE: "/projects",
    UPDATE: (id) => `/projects/${id}`,
    DELETE: (id) => `/projects/${id}`,
  },
}
