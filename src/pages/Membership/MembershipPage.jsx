/** @format */
import Membership from "../../components/membership-components/Membership";
import "./MembershipPage.css";

const MembershipPage = () => {
  return (
    <div className="membership-page">
      <h2>Membership</h2>
      <div className="membership-details">
        <p className="membership-details-heading">
          Join Computer Engineering Forum Community to be part of global change
          and connectivity to AI/AGI revolution.
        </p>
        <Membership/>
      </div>
    </div>
  );
};

export default MembershipPage;
