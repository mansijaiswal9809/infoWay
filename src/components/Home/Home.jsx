import React, { useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const data=[{img:"applicationTransformation.jpg",caption:"Linking you to success"},{img:"bigdata.jpg",caption:"Customer influences are critical"},{img:"customApplication.jpg",caption:"Build your business and our business"},{img:"digitaltransforamtion.jpg",caption:"Your ideas, your journey, we just Create path"}]


const Home = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay:true,
    autoplaySpeed:2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="Caraousel_container">
      <div className="displayContainer">
        <Slider style={{width:"100vw", display:"flex", justifyContent:"center"}} {...settings}>
          {data.map((item, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <h1 style={{position:"absolute", top:'40px', left:"30px", backgroundColor:"transparent"}}>{item.caption}</h1>
              <img src={item.img} alt='image' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
