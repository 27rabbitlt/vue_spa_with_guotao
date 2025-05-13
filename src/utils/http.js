import axios from 'axios';

const backendInstance = axios.create({
  baseURL: '/api', // Mock 基础地址
  timeout: 5000, // 超时时间
});