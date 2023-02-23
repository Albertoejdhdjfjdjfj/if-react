export const slideImages = (data) => {
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
};
