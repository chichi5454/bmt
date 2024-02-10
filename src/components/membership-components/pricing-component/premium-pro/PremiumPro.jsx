/** @format */

import "./PremiumPro.css";

const PremiumPro = () => {
  return (
    <div className="premium-pro-components">
      <div className="premium-package">
        <div className="premium-value">
          <h3>FOR PROFESSIONAL USE PREMIUM </h3>
          <p>$80/Annually</p>
          <div className="premium-text">
            <ul>
              <li>Join Discussion Forums</li>
              <li>Join Virtual 3 Virtual events per year</li>
              <li>Attend coding Competitions Get PDF research Documents</li>
              <li>Create a Discussion Forum Topic</li>
            </ul>
          </div>
        </div>
        <button>SUBSCRIBE</button>
      </div>
      <div className="premium-package">
        <div className="premium-value">
          <h3>FOR PROFESSIONAL USE PRO </h3>
          <p>$200/Annually</p>
          <div className="premium-text">
            <ul>
              <li>Everything in Premium</li>
              <li>Interview session on Youtube</li>
              <li>
                Networking with experts and professional communities in AI and
                technology related
              </li>
              <li>Briefing on upcoming events</li>
              <li>Candidate interview to join the executive board meetings </li>
              <li>Free event pass</li>
            </ul>
          </div>
        </div>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default PremiumPro;
