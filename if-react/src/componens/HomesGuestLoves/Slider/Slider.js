import arrowLeft from '../../../assets/images/arrow.png';
import { useSelector } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Slider() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.sliderData);

  if (data) {
    return (
      <div className="slider">
        <div className="slidesOfSlider">
          {data.map((item) => (
            <div className="slide" key={item.id} onClick={() => navigate(`/hotels/${item.id}`)}>
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
        <img src={arrowLeft} onClick={SlideImages} alt="" />
      </div>
    );
  }

  function SlideImages() {
    let sliderLine = document.querySelector('.slidesOfSlider');
    let slider = document.querySelector('.slider');
    let slide = document.querySelector('.slide');

    let sliderWidth = Number(window.getComputedStyle(slider).width.slice(0, -2));
    let slideWidth = Number(window.getComputedStyle(slide).width.slice(0, -2));
    let slideMargin = Number(window.getComputedStyle(slide).marginLeft.slice(0, -2));
    let sliderLineLeft = window.getComputedStyle(sliderLine).left;
    if (
      -Number(sliderLineLeft.slice(0, -2)) <
      data.length * (slideMargin + slideWidth) - sliderWidth
    ) {
      sliderLine.style.left = Number(sliderLineLeft.slice(0, -2)) - slideWidth - slideMargin + 'px';
    } else {
      sliderLine.style.left = 0 + 'vw';
    }
  }
}

export default Slider;
