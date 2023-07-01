import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
