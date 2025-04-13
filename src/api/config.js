export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://fest-b2b-backend.onrender.com';

export const API_ENDPOINTS = {
  USERS: '/api/users',
  RESTAURANTS: '/api/restaurants',
  NEARBY_RESTAURANTS: '/api/restaurants/nearby'
};

export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
}; 