import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../utils/Constants";
import "./Nav.css";

const Nav = () => {
  const [data, setData] = useState([]);
  const [menuActive, setMenuActive] = useState(false);
  console.log(data);
  return (
  
      <div className="header_container"  onMouseLeave={() => setMenuActive(false)}>
        <Link to="/">
          <img
            className="logo_Link"
            src="logo.jpg"
            width="200px"
            alt="infoWay"
          />
        </Link>
        <Link className="nav_container">
          <Link
            to="/about"
            onMouseEnter={() => {
              setData(Data.about);
              setMenuActive(true);
            }}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onMouseEnter={() => {
              setData(Data.services);
              setMenuActive(true);
            }}
          >
            Services
          </Link>
          <Link
            to="/industries"
            onMouseEnter={() => {
              setData(Data.industries);
              setMenuActive(true);
            }}
          >
            Industries
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="client">Clients</Link>
          <Link to="contact">Contact Us</Link>
        </Link>
      <div className={`${menuActive?"menu active":"menu"}`} style={{ backgroundColor: "black" }}>
        {data.map((item, i) => (
          <Link key={i} to={item.url}>
            {item.name}
          </Link>
        ))}
      </div>
      </div>

  );
};

export default Nav;
