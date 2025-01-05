// src/api.js
import axios from 'axios';

// Base URL for your Flask API
const API_URL = 'http://localhost:5000/api';

// Helper function to set the Authorization header for protected routes
const setAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
};

// Register a new user
export const registerUser = (email, password) => {
  return axios.post(`${API_URL}/register`, { email, password })
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });
};

// Login a user
export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password })
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });
};

// Create a new blog post
export const createPost = (title, content) => {
  return axios.post(`${API_URL}/posts`, { title, content }, { headers: setAuthHeader() })
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });
};

// Fetch all blog posts
export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`)
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });
};
