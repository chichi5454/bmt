/** @format */

import "./Events.css";
import eventPhoto from "../../../assets/posts/posts.jpg";
import { Link } from "react-router-dom";
import doted from "../../../assets/about/doted.png";

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
          <h2>Past Events</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore">
              <Link to="" className="past-events-btn-top ">
                Explore all the Other Programs by KRCS Bomet
              </Link>
            </div>
          </div>
        </div>

        <div className="event-grd">
          <h2>Disaster Management</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                Explore by KRCS Bomet
              </Link>
              <p>
                The department provides immediate relief to affected populations
                to save lives, protect livelihoods, and strengthen recovery from
                disasters and crises
              </p>
              <Link to="/" className="overlay-more-link">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div className="event-grd">
          <h2>Next Events</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                Explore by KRCS Bomet
              </Link>
            </div>
          </div>
        </div>
        <div className="event-grd">
          <h2>Next Events</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                Explore by KRCS Bomet
              </Link>
            </div>
          </div>
        </div>
        <div className="event-grd">
          <h2>Next Events</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                Explore by KRCS Bomet
              </Link>
            </div>
          </div>
        </div>
        <div className="event-grd">
          <h2>Next Events</h2>
          <div className="past-events-img">
            <img src={eventPhoto} alt="past event" />
            <div className="overlay-viewmore-grd">
              <Link to="" className="past-events-btn ">
                Explore by KRCS Bomet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
