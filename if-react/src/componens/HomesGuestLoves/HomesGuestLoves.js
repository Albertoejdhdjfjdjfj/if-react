import Slider from './Slider/Slider';
import React from 'react';
import { fetchHotels } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomesGuestLoves.css';

function HomesGuestloves() {
  return (
    <div className="homesGuestloves">
      <h2>Homes guests loves</h2>
      <Slider />
    </div>
  );
}

export default HomesGuestloves;
