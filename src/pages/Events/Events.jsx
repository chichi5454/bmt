/** @format */

import React from "react";
import EventsBanner from "../../components/events-component/banner/EventsBanner";
import UpcomingEvents from "../../components/events-component/upcoming-events/UpcomingEvents";
import PreviousEvents from "../../components/events-component/previous-events/PreviousEvents";
import "./Events.css";
import ProjectEvents from "../../components/events-component/project-events/ProjectEvents";

const Events = () => {
  return (
    <div className="Events">
      <EventsBanner />
      <PreviousEvents />
      <UpcomingEvents />
      <ProjectEvents />
      <button className="more-events-btn">More Events +</button>
    </div>
  );
};

export default Events;

// in the case of many events in future:

// import React, { useState } from "react";
// import EventsBanner from "../../components/events-component/banner/EventsBanner";
// import UpcomingEvents from "../../components/events-component/upcoming-events/UpcomingEvents";
// import PreviousEvents from "../../components/events-component/previous-events/PreviousEvents";
// import "./Events.css";
// import ProjectEvents from "../../components/events-component/project-events/ProjectEvents";

// const Events = () => {
//   const [showAllEvents, setShowAllEvents] = useState(false);

//   const handleMoreEvents = () => {
//     setShowAllEvents(true);
//   };

//   return (
//     <div className="Events">
//       <EventsBanner />
//       <PreviousEvents />
//       {showAllEvents && <UpcomingEvents />}
//       {showAllEvents && <ProjectEvents />}
//       {!showAllEvents && (
//         <button className="more-events-btn" onClick={handleMoreEvents}>
//           More Events +
//         </button>
//       )}
//     </div>
//   );
// };

// export default Events;
