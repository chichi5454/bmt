import './Membership.css'
import { Link } from 'react-router-dom'

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
              placeholder='Enter you first name'
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
              placeholder='Enter your last name'
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
              placeholder='Enter your email'
            />
          </div>
          <div className="membership-group">
            <label htmlFor="organization" className="membership-label">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="membership-input"
              placeholder='Enter your organization'
            />
          </div>
          <div className="membership-group">
            <label htmlFor="password" className="membership-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="membership-input"
              placeholder='Enter your password'
            />
          </div>
            <div className="footer-community-title1">
              <button>SIGN UP FOR FREE</button>
            </div>
        </form>
          <div className="form-footer">
            <div className="footer-community-details">
              <p>
                Already have an Account? {""}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Sign in
                </a>
              </p>
            </div>
            <p className="membership-connect">OR</p>
            <div className="footer-community-title2">
              {/* make it a link to for the Our Plans  */}
              <Link to="/membership/access-our-plans">
                ACCESS OUR PLANS
              </Link>
            </div>
          </div>
    </div>
  )
}

export default Membership
