/** @format */

import { Link } from "react-router-dom";
import Patron1 from "../../../assets/events/Patron1.jpeg";
import BFA1 from "../../../assets/events/BFA1.jpeg";

const PreviousEvents = () => {
  return (
    // the first two images in events page
    <div className="upcoming-events">
      <h2>KRCS BOMET BRANCH</h2>
      <div className="previousGrid">
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={Patron1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Patrons' meeting</h3>
            <div className="detailsTime">
              <div className="date">
                <p>9th March 2024.</p>
                <p>
                  <strong>Location:</strong> Famous Gate Hotel Bomet
                </p>
              </div>
              <div className="btn">
                <button className="Book-btn">
                  <Link to="/blogs">Read More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={BFA1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Grassroot First Aid competitions </h3>
            <div className="detailsTime">
              <div className="date">
                <p>16th March 2024.</p>
                <p>
                  <strong>Location:</strong> Bomet University
                </p>
              </div>
              <div className="btn">
                <button className="Book-btn">
                  <Link to="/blogs">Read More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
