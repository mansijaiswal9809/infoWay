import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/PageContext";
import { Data } from "../../utils/Constants";
import "./Nav.css";

const Nav = () => {
  const [data, setData] = useState([]);
  const [menuActive, setMenuActive] = useState(false);
  // console.log(data);
  const { getPage, getPageComponent } = useContext(PageContext);
  return (
    <div className="header_container" onMouseLeave={() => setMenuActive(false)}>
      <Link to="/">
        <img className="logo_Link" src="logo.jpg" width="200px" alt="infoWay" />
      </Link>
      <Link className="nav_container">
        <Link
          to="/about"
          onClick={() => {
            getPage("about");
          }}
          onMouseEnter={() => {
            setData(Data.about);
            setMenuActive(true);
          }}
        >
          About Us
        </Link>
        <Link
          to="/services"
          onClick={() => getPage("services")}
          onMouseEnter={() => {
            setData(Data.services);
            setMenuActive(true);
          }}
        >
          Services
        </Link>
        <div
          onMouseEnter={() => {
            setData(Data.industries);
            setMenuActive(true);
          }}
        >
          Industries
        </div>
        <Link to="/portfolio">Portfolio</Link>
        
        <Link to="/careers">Careers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="client">Clients</Link>
        <Link to="contact">Contact Us</Link>
      </Link>
      <div
        className={`${menuActive ? "menu active" : "menu"}`}
        style={{ backgroundColor: "black" }}
      >
        {data.map((item, i) => (
          <Link
            key={i}
            to={`/${item.Page}/${item.url}`}
            onClick={() => getPageComponent(item.Page, item.name)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
