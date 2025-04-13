import { Typography } from '@mui/material';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Typography variant="h2" component="h1" className="mb-6 text-center">
        Bienvenue sur FestB2C
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        Découvrez notre plateforme de réservation d'événements.
      </Typography>
    </div>
  );
}

export default Home; 