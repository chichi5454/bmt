/** @format */

import "./Hero.css";
// import { Link } from "react-router-dom";
// import herovid from "../../../assets/herovid.mp4";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-video">
        {/* Autoplay Video */}
        <iframe
          // src={herovid}
          src="https://www.youtube.com/embed/Gme9AJ710is?si=06Ra_gYPjbtMLckY&loop=1;rel=0&autoplay=1&controls=0&showinfo=0?autoplay=1&mute=1&start=0"
          title="YouTube video player"
          className="hero-video"></iframe>
      </div>

      {/* Overlay texts */}
      <div className="overlay-section">
        <p>Kenya Red Cross Bomet County Branch </p>
        <div className="hero-section-btns">
          <a href="/membership" className="hero-btn-link-one">
            Become a Member
          </a>
          <a href="/membership" className="hero-btn-link-two">
            Become a Member
          </a>
        </div>
        <i className="fa-solid fa-angles-down fa-beat arrow-icon"></i>
      </div>
    </div>
  );
};

export default Hero;
