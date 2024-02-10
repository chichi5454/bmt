/** @format */
import Membership from "../../membership-components/Membership";
import "./community.css";

const Community = () => {
  return (
    <div className="community-page">
      <h2>Join the Community</h2>
      <div className="community-details">
        <p className="community-intro">
          Join Computer Engineering Forum Community to be part of global change
          and connectivity to AI/AGI revolution.
        </p>
        <div className="communityForm-details">
         <Membership/>
        </div>
        <div className="footer-inquiry-section">
          <p>
            Joining the community gets you access to the communty benefits such
            as events, AI research papers, ticket to coding competitions.
          </p>
          <div className="footer-inquiry-button">
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
