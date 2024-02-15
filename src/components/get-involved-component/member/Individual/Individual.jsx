/** @format */

import React from "react";
import "./individual.css";

const Individual = () => {
  return (
    <div className="individual">
      <div className="individual-top">
        <p>MEMBERSHIP PACKAGES</p>
        <h2>Individual Membership</h2>
      </div>
      <div className="individual-page">
        <div className="packages">
          <h2 className="packages-top">Youth in School</h2>
          <p className="packages-top">7 - 18 years.</p>

          <div className="package-two">
            <h1>KES 100</h1>
            <p>Year</p>
            <ul>
              <li>Youth Membership Certificate</li>
              <li> Invite to attend special events</li>
              <li>
                {" "}
                Entitled to be briefed & participate in branch activities
              </li>
            </ul>
            <button>SIGN UP</button>
            <p className="last-package">
              For primary and secondary school students
            </p>
          </div>
        </div>

        <div className="packages">
          <h2 className="packages-top">Youth in School</h2>
          <p className="packages-top">18 - 30 years.</p>

          <div className="package-two">
            <h1>KES 500</h1>
            <p>Year</p>
            <ul>
              <li>Youth Membership Certificate</li>
              <li> Invite to attend special events</li>
              <li>
                {" "}
                Entitled to be briefed & participate in branch activities
              </li>
              <li>Listed in the Branch register of members</li>
            </ul>
            <button>SIGN UP</button>
            <p className="last-package">
              For youth out of school, or youth in tertiary learning
              institutions such as universities / colleges
            </p>
          </div>
        </div>

        <div className="packages">
          <h2 className="packages-top">Ordinary Member</h2>
          <p className="packages-top">Above 30 years.</p>

          <div className="package-two">
            <h1>KES 1K</h1>
            <p>Year</p>
            <ul>
              <li>Ordinary Membership Certificate</li>
              <li> Invite to attend special events</li>
              <li>Entitled to be briefed & participate in branch activities</li>
              <li>Listed in the Branch register of members</li>
            </ul>
            <button>SIGN UP</button>
            <p className="last-package">
              For all persons above the age of 30 years
            </p>
          </div>
        </div>

        <div className="packages">
          <h2 className="packages-top">Life Member</h2>
          <p className="packages-top">Above 30 years.</p>

          <div className="package-two">
            <h1>KES 5K</h1>
            <p>One Off</p>
            <ul>
              <li> Life Membership Certificate</li>
              <li> Invite to attend special events like Life Members Day</li>
              <li>
                {" "}
                Entitled to be briefed & participate in Branch activities
              </li>
              <li>Listed in Branch MemberRegister</li>
              <li>Can vote or vie in KRCS Governance Positions</li>
            </ul>
            <button>SIGN UP</button>
            <p className="last-package">
              For all persons above the age of 30 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
