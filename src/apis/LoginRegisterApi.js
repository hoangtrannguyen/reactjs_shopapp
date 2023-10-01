import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Đổi thành URL API thực tế của bạn

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm gọi API đăng nhập
export const login = async (username, password) => {
  try {
    const response = await api.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Hàm gọi API đăng kí
export const register = async (username, password, email) => {
  try {
    const response = await api.post('/api/register', { username, password, email });
    return response.data;
  } catch (error) {
    throw error;
  }
};
