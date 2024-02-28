/** @format */

import "./Membership.css";

const Membership = () => {
  return (
    <div className="membership-form">
      <form>
        <div className="membership-group">
          <label htmlFor="firstName" className="membership-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="membership-input"
            placeholder="Enter you first name"
          />
        </div>
        <div className="membership-group">
          <label htmlFor="lastName" className="membership-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="membership-input"
            placeholder="Enter your last name"
          />
        </div>
        <div className="membership-group">
          <label htmlFor="email" className="membership-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="membership-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="membership-group">
          <label htmlFor="organization" className="membership-label">
            Sub-County
          </label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option3">Option 4</option>
            <option value="option3">Option 5</option>
            <option value="option3">Option 6</option>
            <option value="option3">Option 7</option>
          </select>
        </div>
        <div className="membership-group">
          <label htmlFor="password" className="membership-label">
            Additional Message
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="membership-input"
            placeholder="message"
          />
        </div>
        <div className="footer-community-title1">
          <button style={{ pointerEvents: "none" }}>JOIN US</button>
        </div>
      </form>
      {/*  */}
    </div>
  );
};

export default Membership;
