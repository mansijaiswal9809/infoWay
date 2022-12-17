import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../utils/Constants";

const Services = () => {
  return (
    <div className="serviceContainer" style={{ width: "100vw", display:"flex", flexDirection:"column", backgroundColor:"black",overflowX:"scroll" }}>
      <h1 style={{color:"white", padding:"30px"}}>Our Services</h1>
      <div className="" style={{width:"4700px", display:"flex", gap:"30px" }}>
      {Data.services.map((elem, i) => (
        <div key={i} style={{width:"500px", height:'600px', overflow:"hidden", position:"relative"}}>
          <div style={{color:"white", position:"absolute", top:"40px", left:"40px"}}><h3>{elem.name}</h3>{elem.caption}</div>
          <img src={elem.img} alt={elem.name} width="100%" height="80%"/>
          <button style={{position:"absolute", right:"40px",top:"350px", padding:"20px",border:"none", borderRadius:"none", backgroundColor:"transparent"}}><Link to={elem.url}>Read More...</Link></button>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Services;
