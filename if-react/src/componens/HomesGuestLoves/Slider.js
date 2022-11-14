import arrowLeft from '../images/arrow.png';
import './HomesGuestLoves.css';

function Slider(props) {
  let bodyWidth = window.getComputedStyle(document.querySelector('body')).width.slice(0, -2);
  console.log(bodyWidth);
  return (
    <div className="slider">
      <div className="slidesOfSlider">
        {props.data.map((item) => (
          <div className="slide" key={item.id}>
            <img src={item.imageUrl} />
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
      props.data.length * (slideMargin + slideWidth) - sliderWidth
    ) {
      sliderLine.style.left = Number(sliderLineLeft.slice(0, -2)) - slideWidth - slideMargin + 'px';
    } else {
      sliderLine.style.left = 0 + 'vw';
    }
  }
}

export default Slider;
