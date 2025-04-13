import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Homepage from './components/Homepage';
import ChooseRestaurant from './components/ChooseRestaurant';
import Profile from './components/Profile';
import Header from './components/Header';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choisir-restaurant" element={<ChooseRestaurant />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
        <FooterNav />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
