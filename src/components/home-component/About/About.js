/** @format */

import "./About.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import doted from "../../../assets/about/doted.png";
import Help2 from "../../../assets/pictorials/Help2.jpeg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="first-grd-about">
        <img src={Help2} alt="rescue img" />
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
              Humanity
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Impartiality
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Neutrality
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Independence
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Unity
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Universality
            </li>
            <li>
              <DoubleArrowIcon className="about-icon" />
              Voluntary Service
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
