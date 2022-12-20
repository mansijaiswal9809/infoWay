import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../utils/Constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Services = () => {
  const [count, setCount] = useState(0);
  // const [Btranslate, setBTranslate] = useState(false);
  // const [Ftranslate, setFTranslate] = useState(false);
  const prev = () => {
    setCount(count - 1);
  };
  const next = () => {
    setCount(count + 1);
  };
  return (
    <div
      className="serviceContainer"
      style={{
        boxSizing:"border-box",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        overflowX: "hidden",
        position:"relative"
      }}
    >
       <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "30px",
            top: "55%",
            zIndex: 999,
            border:"none",
            backgroundColor:"alice",
            borderRadius:"50%",
            height:"50px",
            width:"50px",
            display:`${count===0?"none":"inline-block"}`
          }}
        >
          <FaArrowLeft size={25} color="#517deb"/>
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "30px",
            top: "55%",
            zIndex: 999,
            backgroundColor:"alice",
            borderRadius:"50%",
            height:"50px",
            width:"50px",
            // padding:"10px",
            border:"none",
            display:`${count===6?"none":"inline-block"}`
          }}
        >
          <FaArrowRight size={25} color="#517deb" />
        </button>
      <h1 style={{ color: "white", padding: "30px" }}>Our Services</h1>
      <div
        style={{ width: "100vw",minWidth:"100vw",transition:"all 1s", transform:`translateX(-${count*500}px)`}}
      >
      
        <div style={{ width: "4700px", display: "flex", gap: "50px" }}>
          {Data.services.map((elem, i) => (
            <div
              key={i}
              style={{
                width: "500px",
                height: "520px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "white",
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                }}
              >
                <h3>{elem.name}</h3>
                {elem.caption}
              </div>
              <img src={elem.img} alt={elem.name} width="100%" height="480px" />
              <button
                style={{
                  position: "absolute",
                  right: "40px",
                  top: "350px",
                  padding: "20px",
                  border: "none",
                  borderRadius: "none",
                  backgroundColor: "transparent",
                }}
              >
                <Link to={elem.url}>Read More...</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
