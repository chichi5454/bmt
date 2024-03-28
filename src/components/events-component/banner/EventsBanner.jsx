/** @format */

import "./EventsBanner.css";
// import leadership from "../../../assets/leadership/leadership.jpg";
import blog from "../../../assets/blogs/blog.jpg";

const EventsBanner = () => {
  return (
    // the first image in events page
    <div className="events-banner">
      <h1>Events</h1>
      <div>
        <div className="mainImage">
          <img src={blog} alt="events banner" />
          {/* the text on top of image at banner */}
          <div className="textDetails">
            <div className="text-details-container">
              <h1>WORLD REDCROSS DAY</h1>
              <div className="timeline-container">
                <div className="timeline">
                  <p>8th MAY 2024</p>
                  <p>Kenya Red Cross Society Bomet Branch</p>
                </div>
                <div className="my-button">
                  <a href="/" className="Register-btn">
                    Register
                  </a>
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
