import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { reducer } from "../components/Reducer/PageReducer";
import { Data } from "../utils/Constants";

const initialState = {
  menu: [],
  page: "",
  pageComponent: "",
  component: "",
};
export const PageContext = createContext();
const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getPage = (page) => {
    dispatch({ type: "getPageData", payload: page });
  };

  const getPageComponent = (page, val) => {
    dispatch({ type: "getPageComponentData", payload: { page, val } });
  };
  console.log(state);
  return (
    <PageContext.Provider
      value={{ state, getPage, getPageComponent }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
