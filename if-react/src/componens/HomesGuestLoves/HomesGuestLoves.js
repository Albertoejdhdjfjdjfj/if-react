import Slider from './Slider/Slider';
import React from 'react';
import './HomesGuestloves.css';
import array from '../../assets/variables';

function HomesGuestloves({ dist }) {
  const data = array.filter((el) => (el.city.includes(dist)||el.city.includes(dist)));
  return (
    <div className="homesGuestloves">
      <h2>Homes guests loves</h2>
      <Slider data={data} />
    </div>
  );
}

export default HomesGuestloves;
