/** @format */

import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import blog from "../../../assets/blogs/blog.jpg";
import "./youth.css";

const Youth = () => {
  return (
    <div className="youth">
      <div className="youth-first">
        <img src={blog} alt="dotted-img" />
      </div>
      <div className="youth-second">
        <h1>Youth Development</h1>
        <p>
          The Kenya Red Cross Society (KRCS) prioritizes youth engagement by
          establishing a Youth Development Department with the main goal of
          supporting youth to lead positive change in their communities.
          Focusing on thematic areas such as governance and leadership, youth
          livelihood and economic empowerment, peacebuilding and conflict
          prevention, protection of life and health, and youth climate action.{" "}
        </p>
        <p>
          KRCS seeks to develop strong young leaders as role models and
          catalysts for positive change in the governance and leadership sector.
          The goal of the Youth Livelihood and Economic Empowerment initiative
          is to improve young people’s abilities to support themselves
          sustainably. Training in conflict resolution and advocacy via a
          variety of platforms are aspects of peacebuilding and conflict
          prevention.{" "}
        </p>
        <p>
          The Protection of Life & Health program focuses on mental health,
          sexual reproductive health, and basic first aid. Youth Climate Action
          aims to create an ecosystem for young people to thrive amidst the
          climate crisis. In schools, KRCS promotes globalization, innovation,
          and technology through Red Cross Clubs and Chapters, aligning with
          Ministry of Education policies and Sustainable Development Goals
          (SDGs).{" "}
        </p>
        <p>
          The organization has established 24 youth centers across counties to
          champion innovation and problem-solving while providing safe spaces
          for youth participation. The Empawa Stude program, developed during
          the COVID-19 pandemic, focuses on holistic development through
          teleconferencing and self-paced learning for adolescents aged 10-18.
        </p>
        <p>
          The Wema Platform serves as a digital volunteer platform, enabling
          Kenyan youth to sign up for various opportunities based on their
          interests, expertise, and availability. Overall, KRCS is dedicated to
          nurturing the potential of young people and fostering positive change
          in communities.
        </p>
        <div className="youth-details">
          <h2>Activities</h2>
          <ul>
            <li>Capacity Development</li>
            <p>
              By developing the capacity of youth to improve their knowledge,
              skills and experiences, for personal, social and economic
              development;
            </p>
            <li>Local Action</li>
            <p>
              Rounding up a bunch of specific designs & talking about the merits
              of each is perfect way.
            </p>
            <li>Advocacy</li>
            <p>
              By providing an advocacy platform for young people in various
              thematic areas with relevant skills, knowledge, strategic
              partnerships and resources.
            </p>
          </ul>
        </div>
        <div className="youth-bottom">
          <h2>Key Thematic Areas</h2>
          <p>
            In a bid to promote youth-led volunteerism and sustainable action,
            the department has created YouRED spaces, that are open to all young
            people interested in championing positive change in their
            communities. You-Red is a youth-led, youth-driven space for young
            people to organize, co-create, innovate, and implement humanitarian
            initiatives in the 5 thematic areas of KRCS
          </p>
          <ul>
            <li>
              {" "}
              <DoubleArrowIcon className="about-icon" />
              Health
            </li>
            <li>
              {" "}
              <DoubleArrowIcon className="about-icon" />
              Peace building and conflict prevention
            </li>
            <li>
              {" "}
              <DoubleArrowIcon className="about-icon" />
              Climate action
            </li>
            <li>
              {" "}
              <DoubleArrowIcon className="about-icon" />
              Livelihood and economic empowerment
            </li>
            <li>
              {" "}
              <DoubleArrowIcon className="about-icon" />
              Leadership and governance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Youth;
