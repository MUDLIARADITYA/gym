import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
