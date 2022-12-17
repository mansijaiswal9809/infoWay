import React, { useState } from "react";
import "./client.css";

const images = [
  "http://www.infowaygroup.com/sites/default/files/clients/ebay.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/goole.jpg",
  "https://tse4.mm.bing.net/th?id=OIP.WzdKBeSaMugMpnbLJL7KWwHaE8&pid=Api&P=0",
  "http://www.infowaygroup.com/sites/default/files/clients/kelly-logo.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/lt-technology-servicelogo.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/motorola-logo-1.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/mphasis-logo.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/paypal-logo-1.jpg",
  "http://www.infowaygroup.com/sites/default/files/clients/pantoon-client.png",
  "http://www.infowaygroup.com/sites/default/files/clients/philipis-client.png",
];
const Clients = () => {
  const [mainImage, setMainImage] = useState(0);
  const [animation, setAnimation] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <h1 style={{ color: "white" ,padding:"40px"}}>Our Clients</h1>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "900px", height: "500px", overflow: "hidden" }}>
          <img
            className={`${animation ? "Aactive" : ""}`}
            src={images[mainImage]}
            alt={mainImage}
            width="900px"
            height="500px"
            style={{ transform: "scale(1.3)" }}
          />
        </div>
      </div>
      <div style={{ width: "100vw", overflowX: "scroll" }}>
        <div
          className="slideContainer"
          style={{
            width: "2000px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            position: "absolute",
            top: "500px",
          }}
        >
          {images.map((item, i) => (
            <div key={i}>
              <img
                src={item}
                alt={i}
                width="200px"
                onClick={() => {
                  setMainImage(i);
                  setAnimation(true);
                  setTimeout(() => {
                    setAnimation(false);
                  }, 1000);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
