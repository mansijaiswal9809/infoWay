import React, { useContext } from "react";
import ServiceMenu from "../../components/serviceMenu/ServiceMenu";
import { PageContext } from "../../context/PageContext";

const ServicePage = () => {
  const { state } = useContext(PageContext);
  const { page, pageComponent } = state;
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
            // position:"fixed",
            // top:0,
            // left:0
          }}
        >
          <ServiceMenu />
        </div>
        
      </div>
    </div>
  );
};

export default ServicePage;
