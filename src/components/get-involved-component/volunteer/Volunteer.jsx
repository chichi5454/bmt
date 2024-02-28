/** @format */

import React from "react";
import blog from "../../../assets/blogs/blog.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="volunteer-page">
      <div className="volunteer-page-first">
        <img src={blog} alt="volunteer-img" />
        <p>
          As an organization that prioritizes serving others, the Kenya Red
          Cross is constantly looking for individuals who share the same values
          and beliefs. One of the most important traits of a volunteer at the
          Kenya Red Cross is being selfless and having no desire to gain
          anything from their actions.
          <br /> As a volunteer, individuals are expected to support the
          humanitarian work of the organization and contribute towards improving
          the lives of those in need. By sacrificing their time, skills, and
          resources, volunteers at the Kenya Red Cross actively demonstrate a
          dedication to serving others and making a positive impact on their
          community. In essence, being a volunteer at the Kenya Red Cross is not
          just a task or a title, it is an opportunity to give back, inspire
          change, and make a difference in the world.
        </p>
      </div>
      <div className="volunteer-page-second">
        <h2>Key Requirements</h2>
        <p>
          Volunteerism at Kenya Red Cross is for everyone. Being an organization
          that is trusted by communities, governments and the private sector, we
          need all volunteers to abide to the following:
        </p>
        <ul>
          <li>
            <DoubleArrowIcon className="about-icon" />
            Responsibility to behave in accordance with the Kenya Red Cross
            Society code of conduct.
          </li>
          <li>
            {" "}
            <DoubleArrowIcon className="about-icon" />
            Must conduct themselves with integrity and honesty and to display a
            committed and positive attitude while performing their assigned
            tasks.
          </li>
          <li>
            {" "}
            <DoubleArrowIcon className="about-icon" />
            Must have the Responsibility to participate in any necessary
            training provided by the society.
          </li>
          <li>
            {" "}
            <DoubleArrowIcon className="about-icon" />
            Respect the rights, beliefs and opinions of beneficiaries.
          </li>
        </ul>
      </div>
      <div className="volunteer-page-third">
        <h5>READY TO SERVE?</h5>
        <h3> Sign up to be a volunteer today!</h3>
      </div>
      <a href="/volunteerpage">SIGN UP</a>
    </div>
  );
};

export default Volunteer;
