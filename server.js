// Charger les variables d'environnement
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// Charger les variables d'environnement au début
dotenv.config();

const app = express();

// Récupérer les origines autorisées depuis les variables d'environnement
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim());

// Configuration CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Permettre les requêtes sans origine (comme les appels API directs)
    if (!origin) {
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  // Mettre en cache les résultats du pre-flight pour 1 heure
  maxAge: 3600
};

// Appliquer la configuration CORS
app.use(cors(corsOptions));

// Support du JSON
app.use(express.json());

// Gérer les requêtes pre-flight pour toutes les routes
app.options('*', cors(corsOptions));

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Gestion des erreurs CORS
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({
      error: 'CORS Error',
      message: 'This origin is not allowed to access the resource',
      allowedOrigins
    });
  } else {
    next(err);
  }
});

// Définir le port
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Allowed origins:', allowedOrigins);
}); 