import axios from 'axios';

// For development, use localhost; for production, use environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : 'https://your-backend-url.com/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Thêm token admin vào header nếu có
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers['X-Admin-Token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Mock data cho offline mode
let mockStudents = [];
let mockAdmins = [
  { id: 1, username: 'admin', password: 'admin123', token: 'mock-token-12345' }
];

// Load mock students từ JSON file
const loadMockStudents = async () => {
  try {
    const response = await fetch('/data-students.json');
    mockStudents = await response.json();
  } catch (e) {
    console.log('Mock data file not found');
    mockStudents = [];
  }
};

// Initialize mock data
loadMockStudents();

// Fallback API khi backend không có
const fallbackAPI = {
  studentService: {
    getStudents: () => Promise.resolve({ data: mockStudents }),
    createStudent: (formData) => {
      const newStudent = { ...formData, id: Date.now().toString(), createdAt: new Date().toISOString() };
      mockStudents.push(newStudent);
      return Promise.resolve({ data: { ok: true, student: newStudent } });
    },
    deleteStudent: (id) => {
      mockStudents = mockStudents.filter(s => s.id !== id);
      return Promise.resolve({ data: { ok: true } });
    },
    getProjects: () => Promise.resolve({
      data: [
        { id: 1, title: "E-Commerce Platform", description: "Full-stack web app", status: "completed", progress: 100 },
        { id: 2, title: "Mobile App", description: "React Native app", status: "in-progress", progress: 75 },
        { id: 3, title: "CMS System", description: "Content management", status: "in-progress", progress: 60 },
        { id: 4, title: "Analytics Dashboard", description: "Real-time data", status: "planning", progress: 30 },
      ]
    }),
  },
  adminService: {
    login: (username, password) => {
      const admin = mockAdmins.find(a => a.username === username && a.password === password);
      if (admin) {
        return Promise.resolve({ data: { ok: true, token: admin.token } });
      }
      return Promise.reject({ message: 'Invalid credentials' });
    },
    logout: () => Promise.resolve({ data: { ok: true } }),
  }
};

// API endpoints with fallback
export const studentService = {
  // Lấy danh sách sinh viên (public)
  getStudents: async () => {
    try {
      return await api.get('/students');
    } catch (e) {
      console.warn('Backend unavailable, using mock data');
      return await fallbackAPI.studentService.getStudents();
    }
  },

  // Đăng ký sinh viên mới
  createStudent: async (formData) => {
    try {
      return await api.post('/students', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (e) {
      console.warn('Backend unavailable, using mock data');
      return await fallbackAPI.studentService.createStudent(formData);
    }
  },

  // Xóa sinh viên (admin)
  deleteStudent: async (id) => {
    try {
      return await api.delete(`/admin/students/${id}`);
    } catch (e) {
      console.warn('Backend unavailable, using mock data');
      return await fallbackAPI.studentService.deleteStudent(id);
    }
  },

  // Lấy danh sách dự án (projects)
  getProjects: async () => {
    try {
      return await api.get('/admin/projects');
    } catch (e) {
      return await fallbackAPI.studentService.getProjects();
    }
  },
};

export const adminService = {
  // Đăng nhập admin
  login: async (username, password) => {
    try {
      return await api.post('/admin/login', { username, password });
    } catch (e) {
      console.warn('Backend unavailable, using mock login');
      return await fallbackAPI.adminService.login(username, password);
    }
  },

  // Lấy danh sách sinh viên (admin only)
  getStudents: async () => {
    try {
      return await api.get('/admin/students');
    } catch (e) {
      return await fallbackAPI.studentService.getStudents();
    }
  },

  // Logout
  logout: () => fallbackAPI.adminService.logout(),
};

export default api;
