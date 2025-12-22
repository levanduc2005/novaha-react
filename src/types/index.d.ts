// Type definitions for the application

// User types
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  createdAt?: string
  updatedAt?: string
}

// Team types
export interface TeamMember {
  id: string
  name: string
  position: string
  subtitle?: string
  image: string
  desc: string
  experience?: string[]
  role?: string
}

export interface Mentor extends TeamMember {
  role: string
}

// Project types
export interface Project {
  id: string
  name: string
  description: string
  image?: string
  technologies?: string[]
  status: "planning" | "ongoing" | "completed"
  createdAt?: string
  updatedAt?: string
}

// Service types
export interface Service {
  id: string
  name: string
  description: string
  icon?: string
  features?: string[]
  price?: number
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// API Response
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
