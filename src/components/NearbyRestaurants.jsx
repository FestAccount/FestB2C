import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api/config';
import { Star } from '@mui/icons-material';

function NearbyRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/restaurants/nearby`);
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Erreur lors du chargement des restaurants:', error);
        // Mock data en cas d'erreur
        setRestaurants([
          {
            id: 1,
            name: 'Le Petit Bistrot',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'
          },
          {
            id: 2,
            name: 'La Brasserie Parisienne',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500'
          },
          {
            id: 3,
            name: 'Chez Marcel',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div className="animate-pulse">Chargement...</div>;
  }

  return (
    <div className="mb-20">
      <h2 className="text-xl font-semibold mb-4">Près de chez moi</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{restaurant.name}</h3>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 w-5 h-5" />
                <span className="ml-1">{restaurant.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyRestaurants; 