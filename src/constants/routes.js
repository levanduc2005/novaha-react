// Public routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  PRICING: "/pricing",
  TEAM: "/team",
  RECRUITMENT: "/recruitment",
  TALENT_HUB: "/talent-hub",
  CONTACT: "/contact",
  STUDENT: "/student",
  DICHVU_MVP: "/dichvu-mvp",
  DICHVU_PHANMEM: "/dichvu-phanmem",
  DICHVU_WEB: "/dichvu-web",
}

// Admin routes
export const ADMIN_ROUTES = {
  LOGIN: "/admin/login",
  DASHBOARD: "/admin/dashboard",
}

// All routes
export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...ADMIN_ROUTES,
}
