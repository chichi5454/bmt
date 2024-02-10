/** @format */

import "./Donate.css";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="donate-container">
      <h3>Support Our Course</h3>
      <div className="donate-wrapper">
        <div className="donate">
          <button className="donate-btn">
            <Link>Donate</Link>
          </button>
        </div>
        <div className="donate ">
          <button className="donate-btn">
            <h5>
              <Link>Become a Member</Link>
            </h5>
          </button>
        </div>
        <div className="donate ">
          <button className="donate-btn">
            <h5>
              <Link>Access Our Blog</Link>
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
