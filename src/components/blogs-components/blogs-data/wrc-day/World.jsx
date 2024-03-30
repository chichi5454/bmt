/** @format */

import React from "react";
import "./world.css";

const World = () => {
  return (
    <div className="world">
      <div className="world-banner">
        <h2>World Red Cross and Red Crescent Day</h2>
        <p>
          8 May is World Red Cross and Red Crescent Day—a global day to
          celebrate the uniqueness and unity of our International Red Cross and
          Red Crescent Movement.{" "}
        </p>
      </div>
      <div className="world-txt">
        <h2> Theme for 2023</h2>
        <p>
          {" "}
          World Red Cross and Red Crescent Day is a time to celebrate the spirit
          of humanitarianism and recognize the individuals who make a difference
          in their communities. This year, our theme was: Everything we do comes
          #fromtheheart We wanted to celebrate the people in our communities,
          “the person next door”, who often are the first ones to step up and
          support those in need around them. They could be someone at work; a
          neighbourhood business-owner; a Red Cross or Red Crescent community
          volunteer; someone at the gym, shop or market we go to; or someone
          living close by who has always been by our side. However they support
          us, they do it with love and #fromtheheart. Read this joint message
          from our Movement to find out more. Watch: Everything we do comes
          #FromTheHeart
        </p>
      </div>
      <div className="world-bottom">
        <h1>Watch: Everything we do comes #FromTheHeart</h1>
        {/* <div className="hero-section-video">
          <iframe src="" frameborder="0"></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default World;
