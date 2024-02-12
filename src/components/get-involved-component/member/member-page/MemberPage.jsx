/** @format */

import React from "react";

import "./memberpage.css";

const MemberPage = () => {
  return (
    <div className="member-page">
      <div className="member-page-top">
        <h2>Join Us </h2>
        <p>
          HOME
          <a href="/member" className="member-link">
            Become a member
          </a>
        </p>
      </div>
      <div className="member-page-details">
        <div className="member-page-details-par">
          <h5>ABOUT</h5>
          <h2> Kenya Red Cross Membership</h2>
          <p>
            Becoming a member of the Kenya Red Cross holds significant benefits
            that include the opportunity to participate in altruistic and
            humanitarian activities, as well as advancing the organisation’s
            noble mandate. It is vital to note that payment of membership fee is
            a crucial step that must be undertaken to join this selfless
            community. The fee not only secures your membership credentials, but
            it also allows you to take an active role in the Kenya Red Cross
            activities.
          </p>
          <p>
            Every member is expected to abide by the tenets of the membership
            policy, which provide a framework for fostering a strong sense of
            community and high standards of conduct. By enrolling as a member of
            the Kenya Red Cross, you will not only be joining a reputable
            organisation, but you will also be part of a team that is dedicated
            to bringing positive change to the lives of those in need.
          </p>
        </div>
        <div className="member-page-details-img">
          <img src="" alt="member img" />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
