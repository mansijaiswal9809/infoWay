import React, { useState } from "react";
import "./client.css";

const images = [
  "https://th.bing.com/th/id/R.f2abaf19ce815c37decc54a027034cee?rik=ybxsD9qcbWdKew&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fr1lkhnS.jpg&ehk=Xf9dPmWDHBcCbP8WwQBrvF1ekNPKJ%2fowFDqCUJxoOWI%3d&risl=&pid=ImgRaw&r=0",
  "https://images2.alphacoders.com/109/1098165.jpg",
  "https://i.pinimg.com/originals/89/aa/6d/89aa6dd8bab7f60d10d6e41633b177f6.jpg",
  "https://th.bing.com/th/id/OIP.4ZnNwjpJ-JGJmrWgch7q4AHaHa?pid=ImgDet&rs=1",
  "https://i0.wp.com/www.techtaffy.com/wp-content/uploads/2013/04/Kelly_Services.jpg?fit=2048%2C1365&ssl=1",
  "https://besthqwallpapers.com/Uploads/1-12-2021/186207/motorola-blue-logo-4k-blue-neon-lights-creative-blue-abstract-background.jpg",
  "https://national-expertise.ru/wp-content/uploads/2019/08/Philips-Logo-Design-Vector-Free-Download.jpg",
  "https://wallpaperaccess.com/full/85196.jpg",
  "https://th.bing.com/th/id/OIP.xn5iPyWvOTGx9IwpzT6L5AHaBY?pid=ImgDet&rs=1",
  "https://wildblue.top/img/operators/directv.png",
  "https://tse3.mm.bing.net/th?id=OIP.4SCuiC0iPaB3fySTPPpeAAHaE7&pid=Api&P=0"
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
