import Header from './Header';
import ProfileCard from './ProfileCard';
import NearbyRestaurants from './NearbyRestaurants';
import FooterNav from './FooterNav';

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-16">
        <ProfileCard />
        <NearbyRestaurants />
      </main>

      <FooterNav />
    </div>
  );
}

export default Homepage; 