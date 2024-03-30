/** @format */

import "./Donate.css";

const Donate = () => {
  return (
    <div className="donate-container">
      <h3>Support Our Course</h3>
      <div className="donate-wrapper">
        <div className="donate">
          <button className="donate-btn">
            <a href="/">Donate</a>
          </button>
        </div>
        <div className="donate ">
          <button className="donate-btn">
            <h5>
              <a href="/member">Become a Member</a>
            </h5>
          </button>
        </div>
        <div className="donate ">
          <button className="donate-btn">
            <h5>
              <a href="/blogs">Access Our Blog</a>
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
