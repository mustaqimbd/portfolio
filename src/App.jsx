import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pl-48">
        <Home />
        <About />
        <Services />
        <Skills />
      </div>
    </div>
  );
};

export default App;
