import arrowLeft from '../images/arrow.png';
import "./HomesGuestLoves.css";

function Slider(props) {
   let bodyWidth=window.getComputedStyle(document.querySelector('body')).width.slice(0,-2);
   console.log(bodyWidth);
  return (
     <div className="slider" style={{width: '85.8vw'}} >
     <div className="slidesOfSlider" style={{left:0,width:'85vw'}}>
    {props.data.map((item)=>(
     <div className="slide" style={{width: '296px',marginLeft: '16px'}} key={item.id}>
        <img style={{width: '296px'}} src={item. imageUrl}/>  
        <p>{item.name}</p>
        <p>{item.city} {item.country}</p>
     </div>
    ))
    }
   </div>
   <img src={arrowLeft} onClick={SlideImages} alt='' />
   </div>
  );

 function SlideImages(){
  let bodyWidth=window.getComputedStyle(document.querySelector('body')).width.slice(0,-2);
   let sliderLine=document.querySelector('.slidesOfSlider');
   let slider=document.querySelector('.slider');
   let slide=document.querySelector('.slide');

   let sliderWidth=Number(slider.style.width.slice(0,-2))*bodyWidth/100;
   let slideWidth=Number(slide.style.width.slice(0,-2));
   let slideMargin=Number(slide.style.marginLeft.slice(0,-2));
   let sliderLineLeft=sliderLine.style.left;

   if(-Number(sliderLineLeft.slice(0,-2))<props.data.length*(slideMargin+slideWidth)-sliderWidth){
      sliderLine.style.left=Number(sliderLine.style.left.slice(0,-2))-slideWidth-slideMargin+'px';
   }
   else{
      sliderLine.style.left=0+'vw';
   }
}


}


export default Slider;
