import React, { useContext } from "react";
import ServiceMenu from "../../components/serviceMenu/ServiceMenu";
import { PageContext } from "../../context/PageContext";
import Service from "../../components/service/Service";
import About from "../../components/about/About";
import { Data } from "../../utils/Constants";

const ServicePage = () => {
  const { state } = useContext(PageContext);
  const { page, pageComponent } = state;
  let comp=Data[page].find((item)=>item.name===pageComponent)
  if(comp){
    comp=comp.component
    console.log(comp)
  }
  return (
    <div>
      <div style={{ display: "flex", position: "reletive" }}>
        <div
          className="serviceMenu"
          style={{
            height: "90vh",
            backgroundColor: "black",
            marginTop: "0",
            width: "20vw",
            position: "sticky",
            left: 0,
            top: 0,
            padding: "30px 0",
            borderRight: "2px solid grey",
            overflow: "hidden",
          }}
        >
          <ServiceMenu />
        </div>
        {page==="services" && pageComponent===""?<Service/>:(page==="about" && pageComponent===""?<About/>:comp)}
      </div>
    </div>
  );
};

export default ServicePage;
