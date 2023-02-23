import arrowLeft from '../../../assets/images/arrow.png';
import { slideImages } from './sliderFunctions';
import { useSelector } from 'react-redux';
import React from 'react';

function Slider() {
  const data = useSelector((state) => state.sliderData);

  if (data) {
    return (
      <div className="slider">
        <div className="slidesOfSlider">
          {data.map((item) => (
            <div className="slide" key={item.id}>
              <div>
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <p>{item.name}</p>
              <p>
                {item.city} {item.country}
              </p>
            </div>
          ))}
        </div>
        <img src={arrowLeft} onClick={() => slideImages(data)} alt="arrowLeft" />
      </div>
    );
  }
}

export default Slider;
