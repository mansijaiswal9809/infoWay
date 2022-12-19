import React, { useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Services from "../services/Services";
import Clients from "../Client/Clients";


const data=[{img:"https://wallpapercave.com/wp/wp7728120.jpg",caption:"Linking you to success"},{img:"https://barbaraiweins.com/wp-content/uploads/2021/08/Trends-Transforming-the-Information-Technology-Industry.jpg",caption:"Customer influences are critical"},{img:"http://getwallpapers.com/wallpaper/full/8/c/9/538867.jpg",caption:"Build your business and our business"},{img:"http://www.wns.com/Portals/0/Images/HeaderBanner/desktop/5019/257/Brandttiude_HD.jpg",caption:"Your ideas, your journey, we just Create path"}]


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
        <Slider className="slider"style={{width:"100vw", display:"flex", justifyContent:"center"}} {...settings}>
          {data.map((item, idx) => (
            <section key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <h1 style={{position:"absolute", top:'40px', left:"30px", backgroundColor:"transparent"}}>{item.caption}</h1>
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
