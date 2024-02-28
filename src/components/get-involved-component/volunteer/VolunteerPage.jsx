/** @format */
import Membership from "../../membership-components/Membership";
import "./volunteerpage.css";

const VolunteerPage = () => {
  return (
    <div className="community-page">
      <h2>Join KRCS Bomet Branch </h2>
      <div className="community-details">
        <p className="community-intro">
          Join KRCS Bomet Branch to be part of an opportunity to give back,
          inspire change, and make a difference in the world.
        </p>
        <div className="communityForm-details">
          <Membership />
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
