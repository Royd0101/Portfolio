import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Topbar.css";


const Topbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
      );
    const [activeSection, setActiveSection] = useState<string>("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
      }, [darkMode]);


    useEffect(() => {
        const handleScroll = () => {
        const sections = ["home", "about", "projects", "contact"];
        let closestSection = sections[0];
        let minDistance = window.innerHeight;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - window.innerHeight / 4);

            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
            }
            }
        });

        setActiveSection(closestSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className="topbar">
      <div className="logo">
        <RouterLink to="/" className="logo-link">My Portfolio</RouterLink>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
        <li>
          <ScrollLink to="home" smooth={true} duration={500} className={activeSection === "home" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Home
          </ScrollLink>
        </li>
        <li><ScrollLink to="about" smooth={true} duration={500} className={activeSection === "about" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            About
          </ScrollLink>
        </li>
        <li><ScrollLink to="projects" smooth={true} duration={500} className={activeSection === "projects" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Projects
          </ScrollLink>
        </li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className={activeSection === "contact" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className="menu-icons">
          <button className="dark-mode-toggle mobile-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "🌞" : "🌙"}
          </button>

          <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? "✖" : "☰"}
          </div>
      </div>
    </nav>
  );
};

export default Topbar;
