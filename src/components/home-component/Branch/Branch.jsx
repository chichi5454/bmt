/** @format */

import React from "react";
import "./Branch.css";

const Branch = () => {
  return (
    <div className="branch">
      <div className="branch-details-one">
        <h1>Our Mission</h1>
        <p>
          We facilitate communities to respond to humanitarian emergencies to
          alleviate human suffering and work with partners to implement
          innovative community driven programmes that transform lives and
          enhance community resilience.
        </p>
      </div>
      <div className="branch-details-two">
        <h1>Our Vision</h1>
        <p>
          To be a leading humanitarian organization sustainably promoting the
          well-being, health and resilience of communities.
        </p>
      </div>
      {/* <div className="branch-details-three">
        <h1>Our Core Values</h1>
        <div className="values-list">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div> */}
    </div>
  );
};

export default Branch;
