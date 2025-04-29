import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "../css/Home.css"; // Ensure you have styles for this;
import profileImg from "../assets/profile.png";

const Home = () => {
  return (
      <div className="home-content">
        <div className="text-section">
          <div className="text-box">
            <h1>
              Hi, I'm <span className="highlight">
                <ReactTyped
                  strings={["Royd Catalunes", "A Web Developer", "A Backend Developer", "A Creator"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </h1>
            <p className="tagline">Backend Developer | Designer | Creator</p>
            <p className="description">
              Welcome to my portfolio! I specialize in creating responsive and engaging websites.

            </p>
            <Link to="/projects" className="cta-button">View My Projects</Link>
          </div>
            
        </div>
        <div className="image-section">
          <img src={profileImg} alt="Your Name" className="profile-image" />
        </div>
      </div>
  );
};

export default Home;
