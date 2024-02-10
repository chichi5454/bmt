/** @format */

import React from "react";
import EventsBanner from "../../components/events-component/banner/EventsBanner";
import UpcomingEvents from "../../components/events-component/upcoming-events/UpcomingEvents";
import PreviousEvents from "../../components/events-component/previous-events/PreviousEvents";
import "./Events.css";

const Events = () => {
  return (
    <div className="Events">
      <EventsBanner />
      <UpcomingEvents />
      <PreviousEvents />
      <button className="more-events-btn">More Events +</button>
    </div>
  );
};

export default Events;
