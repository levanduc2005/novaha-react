import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

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

// API endpoints
export const studentService = {
  // Lấy danh sách sinh viên (public)
  getStudents: () => api.get('/students'),

  // Đăng ký sinh viên mới
  createStudent: (formData) => api.post('/students', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

export const adminService = {
  // Đăng nhập admin
  login: (username, password) => api.post('/admin/login', { username, password }),

  // Lấy danh sách sinh viên (admin only)
  getStudents: () => api.get('/admin/students'),
};

export default api;
