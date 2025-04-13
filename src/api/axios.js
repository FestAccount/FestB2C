import axios from 'axios';

// Détermine l'URL de base en fonction de l'environnement
const BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3000'  // URL locale pour le développement
  : 'https://fest-b2b-backend.onrender.com'; // URL de production

// Création d'une instance Axios préconfigurée
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Nécessaire pour les cookies/sessions
  headers: {
    'Content-Type': 'application/json',
    // Autoriser explicitement l'origine en dev et prod
    'Access-Control-Allow-Origin': import.meta.env.DEV 
      ? 'http://localhost:5173'
      : 'https://peppy-crisp-0a5743.netlify.app'
  },
});

// Intercepteur pour gérer les erreurs globalement
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Gérer les erreurs de réponse (400-500)
      console.error('Erreur API:', error.response.data);
    } else if (error.request) {
      // Gérer les erreurs de requête (pas de réponse)
      console.error('Erreur de requête:', error.request);
    } else {
      // Gérer les autres erreurs
      console.error('Erreur:', error.message);
    }
    return Promise.reject(error);
  }
);

// Fonction utilitaire pour les appels GET
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fonction utilitaire pour les appels POST
export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fonction utilitaire pour les appels PUT
export const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fonction utilitaire pour les appels DELETE
export const del = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api; 