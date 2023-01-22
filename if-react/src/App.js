import TopSection from './componens/TopSection/TopSection';
import HomesGuestloves from './componens/HomesGuestLoves/HomesGuestLoves';
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [dist, setDist] = useState('');

  const handleDistChange = (location) => {
    setDist(location);
  };

  return (
    <div>
     <DatePicker/>
    </div>
  );
}

export default App;
