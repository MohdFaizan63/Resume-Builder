import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Create axios instance with authentication
const resumeAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
resumeAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
resumeAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Get all resumes for current user
export const getAllResumes = async () => {
  try {
    const response = await resumeAPI.get('/resumes');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch resumes' };
  }
};

// Get single resume
export const getResume = async (id) => {
  try {
    const response = await resumeAPI.get(`/resumes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch resume' };
  }
};

// Create a new resume
export const createResume = async (resumeData) => {
  try {
    const response = await resumeAPI.post('/resumes', resumeData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create resume' };
  }
};

// Update resume
export const updateResume = async (id, resumeData) => {
  try {
    const response = await resumeAPI.put(`/resumes/${id}`, resumeData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update resume' };
  }
};

// Delete resume
export const deleteResume = async (id) => {
  try {
    const response = await resumeAPI.delete(`/resumes/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete resume' };
  }
};

// Get public resume by share link
export const getPublicResume = async (shareLink) => {
  try {
    const response = await axios.get(`${API_URL}/resumes/share/${shareLink}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch public resume' };
  }
};

// Generate share link
export const generateShareLink = async (id) => {
  try {
    const response = await resumeAPI.post(`/resumes/${id}/share-link`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to generate share link' };
  }
};

// Get resume analytics
export const getResumeAnalytics = async (id) => {
  try {
    const response = await resumeAPI.get(`/resumes/${id}/analytics`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch analytics' };
  }
};