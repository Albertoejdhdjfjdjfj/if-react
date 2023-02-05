import Slider from './Slider/Slider';
import React from 'react';
import { changeData } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomesGuestLoves.css';

function HomesGuestloves() {
  const dist = useSelector((state) => state.dist);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://if-student-api.onrender.com/api/hotels${dist == '' ? '/popular' : `?search=${dist}`}`
    )
      .then((response) => response.json())
      .then((res) => dispatch(changeData(res)));
  }, [dist]);

  return (
    <div className="homesGuestloves">
      <h2>Homes guests loves</h2>
      <Slider />
    </div>
  );
}

export default HomesGuestloves;
