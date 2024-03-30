/** @format */

import "./UpcomingEvents.css";
import { Link } from "react-router-dom";
import Baby1 from "../../../assets/events/Baby1.jpeg";

// ************TO BE CORRECTED...*****************
const UpcomingEvents = () => {
  return (
    // the first two images in events page
    <div className="upcoming-events">
      <h2>YOUTH</h2>
      <div className="previousGrid">
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={Baby1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Visit to Mogogosiek Baby Home</h3>
            <div className="detailsTime">
              <div className="date">
                <p>9th March 2024.</p>
                <p>
                  <strong>Location:</strong> Mogogosiek baby home
                  <br />
                  <span>Konoin Sub county </span>
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
            <img src={Baby1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Visit to Mogogosiek Baby Home</h3>
            <div className="detailsTime">
              <div className="date">
                <p>9th March 2024.</p>
                <p>
                  <strong>Location:</strong> Mogogosiek baby home
                  <br />
                  <span>Konoin Sub county </span>
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

export default UpcomingEvents;
