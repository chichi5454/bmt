
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../../assets/events/banner.jpg"
import wrcd from "../../../assets/events/wrcd.webp"
import "./EventsBanner.css";

const EventsBanner = () => {
  return (
    <div className="events-banner">
      <h1>Events</h1>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {/* Slide 1 */}
        <div className="mainImage">
          <img src={wrcd} alt="Event 1" />
          <div className="textDetails">
            <div className="text-details-container">
              <h1>WORLD REDCROSS DAY</h1>
              <div className="timeline-container">
                <div className="timeline">
                  <p>8th MAY 2024</p>
                  <p>Kenya Red Cross Society Bomet County Branch</p>
                </div>
                <div className="my-button">
                  <a href="/world" className="Register-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="mainImage">
        <img src={banner} alt="Event 1" />
          <div className="textDetails">
            <div className="text-details-container">
              <h1>Humanity Power Walk Bomet Branch 2024</h1>
              <div className="timeline-container">
                <div className="timeline">
                  <p>8th June 2024</p>
                 
                </div>
                <div className="my-button">
                  <a href="/blog" className="Register-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default EventsBanner;
