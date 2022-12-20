import React, { useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Services from "../services/Services";
import Clients from "../Client/Clients";


const data=[{img:"https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",caption:"Linking you to success"},{img:"https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=600",caption:"Customer influences are critical"},{img:"https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600",caption:"Build your business and our business"},{img:"https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=600",caption:"Your ideas, your journey, we just Create path"}]


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
    autoplaySpeed:1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
    <div className="Caraousel_container">
      <div className="displayContainer" style={{ height:"500px"}}>
        <Slider className="slider"style={{width:"100vw", display:"flex",tranform:"translateX(-200px)"}} {...settings}>
          {data.map((item, idx) => (
            <section key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <h1 style={{position:"absolute", top:'80px', left:"30px", backgroundColor:"transparent"}}>{item.caption}</h1>
              <img src={item.img} alt='carousel' />
            </section>
          ))}
        </Slider>
      </div>
    </div>
      <Services/>
      <Clients/>
      </>
  );
};

export default Home;
