import Slider from './Slider/Slider';
import React from 'react';
import { useEffect, useState } from 'react';
import './HomesGuestLoves.css';

function HomesGuestloves({ dist }) {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(
      `https://if-student-api.onrender.com/api/hotels${dist == '' ? '/popular' : `?search=${dist}`}`
    )
      .then((response) => response.json())
      .then((res) => setData(res));
    console.log(data);
  }, [dist]);

  if (data) {
    return (
      <div className="homesGuestloves">
        <h2>Homes guests loves</h2>
        <Slider data={data} />
      </div>
    );
  }
}

export default HomesGuestloves;
