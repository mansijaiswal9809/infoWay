import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../utils/Constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./service.css";
import { PageContext } from "../../context/PageContext";

const Services = () => {
  const [count, setCount] = useState(0);
  const { getPage, getPageComponent } = useContext(PageContext);
  const prev = () => {
    setCount(count - 1);
  };
  const next = () => {
    setCount(count + 1);
  };
  return (
    <div className="serviceContainer">
      <button
        onClick={prev}
        className="serviceCarouselButton"
        style={{
          display: `${count === 0 ? "none" : "inline-block"}`,
          left: "30px",
        }}
      >
        <FaArrowLeft size={25} />
      </button>
      <button
        className="serviceCarouselButton"
        onClick={next}
        style={{
          display: `${count === 6 ? "none" : "inline-block"}`,
          right: "30px",
        }}
      >
        <FaArrowRight size={25} />
      </button>
      <h1>
        <Link to="/services" onClick={() => getPage("services")}>
          {" "}
          Our Services
        </Link>
      </h1>
      <div
        className="serviceSliderDiv"
        style={{
          transform: `translateX(-${count * 500}px)`,
        }}
      >
        <div className="serviceSlider">
          {Data.services.map((elem, i) => (
            <div
              onClick={() => getPageComponent("services", elem.name)}
              key={i}
              className="serviceDataImageDiv"
            >
              <div className="ServiceCaptionDiv">
                <h3>{elem.name}</h3>
                {elem.caption}
              </div>
              <img src={elem.img} alt={elem.name} width="100%" height="520px" />
              <button className="serviceReadmore">
                <Link to={`/services/${elem.url}`}>Read More</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
