import Header from "./components/layout/Header";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

import "./bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
