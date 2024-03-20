/** @format */

// ************TO BE UPDATED WHEN THE REAL DATA COME*************

import "./PreviousEvents.css";
import blog from "../../../assets/blogs/blog.jpg";
import { Link } from "react-router-dom";

const PreviousEvents = () => {
  return (
    // the first two images in events page
    <div className="upcoming-events">
      <h2>Previous Events</h2>
      <div className="previousGrid">
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={blog} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Basic First Aid Training</h3>
            <div className="detailsTime">
              <div className="date">
                <p>4-6th March 2024.</p>
                <p>Location: Bomet Office</p>
              </div>
              <div className="btn">
                <button className="Book-btn">
                  <Link to="contact">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* First upcoming event */}
        <div className="firstDetails">
          <h3>Basic First Aid Training</h3>
          <div className="detailsTime">
            <div className="date">
              <p>4-6th March 2024.</p>
              <p>Location: Bomet Office</p>
            </div>
            <div className="btn">
              <button className="Book-btn">
                <Link to="contact">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
