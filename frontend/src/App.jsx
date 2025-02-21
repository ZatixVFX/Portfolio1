import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bootstrap.min.css";

import Header from "./components/layout/Header";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <section id="home">
      <Header />
      <ToastContainer className="toast-position" />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </section>
  );
}

export default App;
