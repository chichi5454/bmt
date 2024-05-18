/** @format */

import "./Content.css";
import { Link } from "react-router-dom";

const Contents = () => {
  return (
    <div className="content-links">
      <div className="my-contents">
         <div className="contents">
          <h3>Contents</h3>
          <ul>
            <li>
              <Link to="matter">Know Your Volunteers</Link>
            </li>
            <li>
              <Link to="matter">FAQs</Link>
            </li>
            <li>
              <Link to="">What makes us stand out?</Link>
            </li>
                     </ul>
        </div> 
        <div className="more-about">
          <h3>More About us</h3>
          <ul>
                       <li>
              <Link to="leadership">Leadership</Link>
            </li>
            <li>
              <Link to="our-history">Our History</Link>
            </li>
            <li>
              <Link to="join-initiatives">Initiatives</Link>
            </li>
            <li>
              <Link to="innovation-club">Innovation Programs</Link>
            </li>
            <li>
              <Link to="founder">Founder</Link>
            </li>
            <li>
              <Link to="/world">World RedCross Day</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contents;
