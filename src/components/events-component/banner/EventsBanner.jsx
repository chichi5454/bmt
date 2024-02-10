/** @format */

import "./EventsBanner.css";
import leadership from "../../../assets/leadership/leadership.jpg";
import { Link } from "react-router-dom";

const EventsBanner = () => {
  return (
    // the first image in events page
    <div className="events-banner">
      <h1>Events</h1>
      <div>
        <div className="mainImage">
          <img src={leadership} alt="events banner" />
          {/* the text on top of image at banner */}
          <div className="textDetails">
            <div className="text-details-container">
              <h1>Annual General Meeting 2024</h1>
              <div className="timeline-container">
                <div className="timeline">
                  <p>28/3/2024</p>
                  <p>Nairobi,Kenya</p>
                </div>
                <div className="my-button">
                  <button className="Register-btn">
                    <Link to="" >Register</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
