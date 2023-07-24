import React from "react";
import { Navbar } from "./Pages/Navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import { Hero } from "./Pages/Hero/Hero";
function App() {
  return (
    <>
      {/* <Routes> */}
      <Navbar />
      <Hero />     
      {/* </Routes> */}
    </>
  );
}
export default App;