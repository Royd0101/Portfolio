import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        {/* Home contains scroll sections */}
        <Route
          path="/"
          element={
            <div>
              <section id="home" className="home-section"><Home /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </div>
          }
        />
        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
