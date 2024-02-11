/** @format */

import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="my-footer">
      {/* Important links */}
      <div className="impo-links">
        {/* About us */}
        <div className="links">
          <h1>About Us</h1>
          <ul>
            <li>
              <Link to="/mission">Our Mission</Link>
            </li>
            <li>
              <Link to="/impact">Our Vision</Link>
            </li>
            <li>
              <Link to="/partnership">Our Core Values</Link>
            </li>
            <li>
              <Link to="/careers">Donate</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Events */}
        <div className="links events">
          <h1>Events</h1>
          <ul>
            <li>
              <Link to="/forums">Current Projects</Link>
            </li>
            <li>
              <Link to="/events">Upcoming Events</Link>
            </li>
            {/* <li><Link to="/subscribe">Subscribe to Us</Link></li> */}
          </ul>

          {/*  */}
        </div>

        {/* Partnership & Members and Social Medias */}
        <div className="links">
          <h1>Partners & Members</h1>
          <ul>
            <li>
              <Link to="/sign-in">Become a Member</Link>
            </li>
            <li>
              <Link to="/join-us">Become a Volunteer</Link>
            </li>
          </ul>
          <div className="social">
            <h1>Follow Us</h1>
            <ul>
              <li>
                <Link to="/">
                  <FacebookRoundedIcon className="social-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <InstagramIcon className="social-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <LinkedInIcon className="social-icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-square-x-twitter social-icon"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-square-whatsapp social-icon"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-square-youtube social-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="left">
          <p>@2024 Kenya Red Cross Bomet Branch </p>
        </div>
        <div className="left">
          <p>
            <Link to="/privacy-policy">Privacy Policy,</Link>
          </p>
          <p>
            <Link to="/terms">Terms of Use,</Link>
          </p>
          <p>
            <Link to="/faq">FAQs</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
