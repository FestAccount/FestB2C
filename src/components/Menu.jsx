import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Menu() {
  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Toolbar className="justify-between">
        <RouterLink to="/" className="text-xl font-bold text-gray-800 no-underline">
          FestB2C
        </RouterLink>
        <div>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            className="text-gray-800"
          >
            Accueil
          </Button>
          <Button
            component={RouterLink}
            to="/reservations"
            color="inherit"
            className="text-gray-800"
          >
            Réservations
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Menu; 