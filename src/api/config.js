import { get, post, put, del } from './axios';

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

// Fonctions d'API réutilisables
export const api = {
  // Utilisateurs
  getUser: (id) => get(`${API_ENDPOINTS.USERS}/${id}`),
  updateUser: (id, data) => put(`${API_ENDPOINTS.USERS}/${id}`, data),
  
  // Restaurants
  getNearbyRestaurants: () => get(API_ENDPOINTS.NEARBY_RESTAURANTS),
  getRestaurant: (id) => get(`${API_ENDPOINTS.RESTAURANTS}/${id}`),
  createReservation: (restaurantId, data) => 
    post(`${API_ENDPOINTS.RESTAURANTS}/${restaurantId}/reservations`, data),
  
  // Autres endpoints à ajouter selon les besoins...
}; 