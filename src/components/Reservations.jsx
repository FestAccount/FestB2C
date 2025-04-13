import { Typography, Paper } from '@mui/material';

function Reservations() {
  return (
    <Paper className="p-6 max-w-4xl mx-auto">
      <Typography variant="h4" component="h2" className="mb-4">
        Mes Réservations
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        Aucune réservation pour le moment.
      </Typography>
    </Paper>
  );
}

export default Reservations; 