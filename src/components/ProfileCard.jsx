import { useState, useEffect } from 'react';
import { api } from '../api/config';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // TODO: Remplacer 1 par l'ID réel de l'utilisateur
        const data = await api.getUser(1);
        setProfile(data);
      } catch (error) {
        console.error('Erreur lors du chargement du profil:', error);
        // Mock data en cas d'erreur
        setProfile({
          name: 'John Doe',
          role: 'Organisateur',
          address: {
            city: 'Paris',
            zipCode: '75001'
          },
          tags: ['Terrasse', 'Dog Friendly', 'Options Végétariennes'],
          successCount: 12,
          achievements: [
            { id: 1, title: 'Premier Fest!', icon: '🎉' },
            { id: 2, title: 'Super Host', icon: '⭐' }
          ],
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="animate-pulse">Chargement...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start gap-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600">{profile.role}</p>
          <p className="text-gray-500">
            {profile.address.city}, {profile.address.zipCode}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {profile.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
          {profile.successCount}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Mes succès</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {profile.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex-shrink-0 bg-gray-100 rounded-lg p-4 text-center min-w-[100px]"
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <div className="text-sm">{achievement.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard; 