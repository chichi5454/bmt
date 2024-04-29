/** @format */

import { Link } from "react-router-dom";
import women1 from "../../../assets/events/women1.jpeg";
import Vaccine1 from "../../../assets/events/Vaccine1.jpg";

const ProjectEvents = () => {
  return (
    // the first two images in events page
    <div className="upcoming-events">
      <h2>PROJECTS</h2>
      <div className="previousGrid">
        {/* First upcoming event */}
        <div className="firstImage">
          <div className="image">
            <img src={women1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>International Women's Day</h3>
            <div className="detailsTime">
              <div className="date">
                <p>8th March 2024.</p>
                <p>
                  <strong>Location:</strong> Governor's Office Bomet County
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
            <img src={Vaccine1} alt="event 1" />
          </div>
          <div className="firstDetails">
            <h3>Poultry Vaccination Initiative</h3>
            <div className="detailsTime">
              <div className="date">
                <p> March 2024.</p>
                <p>
                  <strong>Location:</strong> Kaboson SubCounty
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

export default ProjectEvents;
