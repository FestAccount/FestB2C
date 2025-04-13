import { Typography } from '@mui/material';
import ProfileCard from './ProfileCard';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="container mx-auto">
        <Typography variant="h4" component="h1" className="mb-6">
          Mon Profil
        </Typography>
        <ProfileCard />
      </div>
    </div>
  );
}

export default Profile; 