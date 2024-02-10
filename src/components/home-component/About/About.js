/** @format */

import "./About.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import aboutImg1 from "../../../assets/about/about1.jpg";
import doted from "../../../assets/about/doted.png";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="first-grd-about">
        <img src={aboutImg1} alt="rescue img" />
      </div>
      <div className="doted-pic-container">
        <div className="doted-pic">
          <img src={doted} alt="rescue img" />
        </div>
      </div>

      <div className="second-grd-about">
        <h5>WE ARE GUIDED BY</h5>
        <h1>Our Fundamental Principles</h1>
        <p>
          The Kenya Red Cross Society is guided by these 7 fundamental
          principles of the Red Cross Red Crescent Movement:
        </p>
        <div className="principles-list">
          <div className="vertical-line"></div>
          <ul>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Service to humanity
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Accountability
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Community Centered
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Inclusivity
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Innovation
            </li>
          </ul>
        </div>
        <div className="about-btns">
          <button>Our History</button>
          <button>Our Vision</button>
        </div>
      </div>
    </div>
  );
};

export default About;
