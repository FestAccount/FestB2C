import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Celebration, Person } from '@mui/icons-material';

function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: Celebration, label: 'Fest !', path: '/choisir-restaurant' },
    { icon: Person, label: 'Profil', path: '/profil' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center p-2 flex-1 ${
              isActive(path) ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive(path) ? 'text-purple-600' : 'text-gray-600'}`} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default FooterNav; 