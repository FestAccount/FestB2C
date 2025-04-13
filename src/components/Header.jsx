import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">
          Fest!
        </div>
        
        <button
          onClick={() => navigate('/choisir-restaurant')}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          Lance un Fest !
        </button>
      </div>
    </header>
  );
}

export default Header; 