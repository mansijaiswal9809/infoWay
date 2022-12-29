import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../utils/Constants";
import Button from "react-bootstrap/Button";
import { PageContext } from "../../context/PageContext";

const Menu = () => {
  const {state, getPageComponent}= useContext(PageContext)
  // console.log(state)
  return (
    <div  className="d-grid gap-4" >
      {Data[state.page].map((item,i)=>(
        <Button key={i} variant="dark" style={{borderRadius:"none"}} onClick={()=>getPageComponent(state.page,item.name)}><Link style={{textDecoration:"none", color:"white"}} to={`/${state.page}/${item.url}`}>{item.name}</Link></Button>
      ))}
    </div>
    
      
  );
};

export default Menu;
