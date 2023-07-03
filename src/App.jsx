import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Myworks from "./components/Myworks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pl-48">
        <Home />
        <About />
        <Services />
        <Skills />
        <Myworks />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
