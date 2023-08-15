import React from "react";
import { Navbar } from "./Pages/Navbar/Navbar";
import { Hero } from "./Pages/Hero/Hero";
import { Experience } from "./Pages/Exprience/Experience";
import { Projects } from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      {/* <Routes> */}
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      {/* </Routes> */}
    </>
  );
}
export default App;