// import React from 'react'

import { useSelector } from "react-redux";
import Router from "./shared/Router";
import GlobalStyle from "./styled-components/GlobalStyle";

const App = () => {
  const listReducer = useSelector((state) => {
    return state.list;
  });
  console.log(listReducer);

  return (
    <>
    <GlobalStyle />
    <Router />
    </>
  );
};

export default App;
