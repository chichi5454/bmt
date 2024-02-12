/** @format */

import "./Navbar.css";
import blogo from "../../../assets/blogo.png";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  // Toggling the mobile-navbar
  const handleToggleMenu = () => {
    setToggleNav(!toggleNav);
  };

  // Removing the mobile-navbar when a link is clicked
  const handleClicks = () => {
    setToggleNav(false);
  };

  return (
    <>
      <div className="navbar">
        {/* Navigation Links Layer*/}
        <div className="layer-two">
          <div className="company-logo">
            <img src={blogo} alt="red cross bomet branch" />
            <h3>BOMET BRANCH</h3>
          </div>
          <div className={toggleNav ? "mobile-navbar-links" : "navbar-links"}>
            <ul>
              <li>
                <Link to="/" className="nav-link" onClick={handleClicks}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" onClick={handleClicks}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="nav-link " onClick={handleClicks}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="nav-link" onClick={handleClicks}>
                  Blog
                </Link>
              </li>
              {/* drop down */}
              <li>
                <div className="dropdown">
                  <li className=" dropbtn">
                    Get Involved with Us
                    <i className="fa fa-caret-down"></i>
                  </li>
                  <div className="dropdown-content">
                    <a href="/volunteer">Become a Volunteer</a>
                    <a href="/member">Become a Member</a>
                    <a href="/intern">Volunteer Opportunities</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <button onClick={handleToggleMenu} className="show-nav-btn">
            {toggleNav ? (
              <CancelIcon className="cancel-nav" />
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
