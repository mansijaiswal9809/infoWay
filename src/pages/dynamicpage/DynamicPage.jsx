import React, { useContext, useEffect, useState } from "react";
import Menu from "../../components/serviceMenu/Menu";
import { PageContext } from "../../context/PageContext";
import Service from "../../components/service/Service";
import About from "../../components/about/About";
import { Data } from "../../utils/Constants";
import "./Dynamic.css";

const DynamicPage = () => {
  const { state } = useContext(PageContext);
  const { page, pageComponent } = state;
  const [comp, setComp] = useState(null);
  const getcomp = () => {
    let compo = Data[page].find((item) => item.name === pageComponent);
    if (compo) {
      setComp(compo.component);
    }
  };
  useEffect(() => {
    getcomp();
  }, [state]);
  return (
    <div>
      <div className="dynamicContainer">
        <div className="serviceMenu">
          <Menu />
        </div>
        {page === "services" && pageComponent === "" ? (
          <Service />
        ) : page === "about" && pageComponent === "" ? (
          <About />
        ) : (
          comp
        )}
      </div>
    </div>
  );
};

export default DynamicPage;
