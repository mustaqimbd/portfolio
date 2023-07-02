import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pl-48">
        <Home />
        <About />
        <Service />
      </div>
    </div>
  );
};

export default App;
