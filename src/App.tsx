import React from "react";
import { Navbar } from "./Pages/Navbar/Navbar";
import { Hero } from "./Pages/Hero/Hero";
import { Experience } from "./Pages/Exprience/Experience";

function App() {
  return (
    <>
      {/* <Routes> */}
      <Navbar />
      <Hero />
      <Experience />
      {/* </Routes> */}
    </>
  );
}
export default App;
