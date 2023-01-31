import { React, useState } from 'react';
import TopSection from '../TopSection/TopSection';
import HomesGuestloves from '../HomesGuestLoves/HomesGuestLoves';
import Footer from '../Footer/Footer';

const HederPage = () => {
  const [dist, setDist] = useState('');

  const handleDistChange = (location) => {
    setDist(location);
  };

  return (
    <div>
      <TopSection onChange={handleDistChange} />
      <HomesGuestloves dist={dist} />
      <Footer />
    </div>
  );
};

export default HederPage;
