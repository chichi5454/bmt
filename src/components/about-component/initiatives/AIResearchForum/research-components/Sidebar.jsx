/** @format */

import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Sidebar.css";

// *******This is the Related blogs and Related events***

const Sidebar = () => {
  return (
    <div className="sidebar--container">
      <div className="sidebar-contents">
        <div className="sidebar--container-head">
          <h3>Related blogs</h3>
        </div>
        <div className="sidebar--container-pages">
          <p>
            <Link to="">Artificial Intelligence</Link>
          </p>
          <p>
            {" "}
            <Link to="">Internet of Things</Link>
          </p>
          <p>
            {" "}
            <Link to="">AGI</Link>
          </p>
          <p>
            {" "}
            <Link to="">Climate Change</Link>
          </p>
        </div>
        <div className="sidebar--container-head">
          <h3>Related events</h3>
        </div>
        <div className="sidebar--container-pages">
          <p>
            {" "}
            <Link to="">Climate Change</Link>
          </p>
          <p>
            {" "}
            <Link to="">Internet of Things</Link>
          </p>
          <p>
            {" "}
            <Link to="">Artificial Intelligence</Link>
          </p>
          <p>
            {" "}
            <Link to="">Cybersecurity</Link>
          </p>
        </div>

        <div className="sidebar--container-socials">
          <Link to="">
            <FacebookRoundedIcon />
          </Link>
          <Link to="">
            <TwitterIcon />
          </Link>
          <Link to="">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
