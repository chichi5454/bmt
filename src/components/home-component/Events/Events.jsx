/** @format */

import "./Events.css";
import eventPhoto from "../../../assets/posts/posts.jpg";
import { Link } from "react-router-dom";
import doted from "../../../assets/about/doted.png";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import EastIcon from "@mui/icons-material/East";

const Events = () => {
  return (
    <div className="events-page">
      <div className="doted-pic-events">
        <div className="doted-pic-events">
          <img src={doted} alt="rescue img" />
        </div>
      </div>

      <div className="event-container">
        <div className="event">
          {/* <h2>Past Events</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore">
              <h2>Explore all the Other Programs by KRCS Bomet Branch</h2>
              <Link to="" className="past-events-btn-top ">
                All Programs
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          {/* <h2>Disaster Management</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                <ExpandCircleDownIcon className="past-events-icon " />
              </Link>
              <h2>Disaster Management</h2>
              <p>
                The department provides immediate relief to affected populations
                to save lives, protect livelihoods, and strengthen recovery from
                disasters and crises
              </p>
              <Link to="/" className="overlay-more-link">
                View More
                <EastIcon className="overlay-more-link-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          {/* <h2>Disaster Management</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                <ExpandCircleDownIcon className="past-events-icon " />
              </Link>
              <h2>Health</h2>
              <p>
                The health department embraces the integration approach to
                ensure affordable, accessible and equitable community-based
                health care.
              </p>
              <Link to="/" className="overlay-more-link">
                View More
                <EastIcon className="overlay-more-link-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          {/* <h2>Disaster Management</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                <ExpandCircleDownIcon className="past-events-icon " />
              </Link>
              <h2>Youth Development</h2>
              <p>
                In a bid to promote youth-led volunteerism and sustainable
                action, the department has created You-Red spaces, that are open
                to all young people interested in…
              </p>
              <Link to="/youth" className="overlay-more-link">
                View More
                <EastIcon className="overlay-more-link-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          {/* <h2>Disaster Management</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                <ExpandCircleDownIcon className="past-events-icon " />
              </Link>
              <h2>Special Programmes</h2>
              <p>
                Kenya Red Cross has special programmes that cater for special
                needs of vunerable communities accross the country.
              </p>
              <Link to="/" className="overlay-more-link">
                View More
                <EastIcon className="overlay-more-link-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          {/* <h2>Disaster Management</h2> */}
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                <ExpandCircleDownIcon className="past-events-icon " />
              </Link>
              <h2>Organizational Development</h2>
              <p>
                Organizational Development focuses on the capacity of KRCS to
                adequetely perform its mandate, this includes branches and
                volunteers.
              </p>
              <Link to="/" className="overlay-more-link">
                View More
                <EastIcon className="overlay-more-link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
