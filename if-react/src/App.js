import TopSection from './componens/TopSection/TopSection';
import HomesGuestloves from './componens/HomesGuestLoves/HomesGuestLoves';
import React from 'react';
import { useState } from 'react';
import Footer from './componens/Footer/Footer';

function App() {
  const [dist, setDist] = useState('');

  const handleDistChange = (location) => {
    setDist(location);
  };

  return (
    <div>
      <TopSection onChange={handleDistChange} />
      <HomesGuestloves dist={dist} />
      <Footer/>
    </div>
  );
}

export default App;
