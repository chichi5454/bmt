/** @format */
import blog from "../../../assets/blogs/blog.jpg";
import "./UpcomingEvents.css";
import { Link } from "react-router-dom";

// ************TO BE CORRECTED...*****************
const UpcomingEvents = () => {
  return (
    // the first two images in events page
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="previousGrid">
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={blog} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Current Impact of AI in the Region</h3>
            <div className="detailsTime">
              <div className="date">
                <p>4-6th March 2024.</p>
                <p>Location: TBA</p>
              </div>
              <div className="btn">
                <button className="Book-btn">
                  <Link to="">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={blog} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Data Collection via IoT</h3>
            <div className="detailsTime">
              <div className="date">
                <p>4-6th June 2024.</p>
                <p>Location: TBA</p>
              </div>
              <div className="btn">
                <button className="Book-btn">
                  <Link to="">Book Now</Link>
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
