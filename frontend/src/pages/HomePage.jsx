import React from "react";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import AIAssistant from "../components/sections/AIAssistant";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <AIAssistant />
    </>
  );
};

export default HomePage;
