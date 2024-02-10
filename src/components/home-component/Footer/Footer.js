import { Link } from 'react-router-dom'
import { useState } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

const Footer = () => {


  const [inputValue, setInputValue] = useState("")
  const [InputError, setInputError] = useState("")

  // Getting the input value

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  // Handling submit.....

  const handleSubmit = (e) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    e.preventDefault()
    if(!inputValue){
      setInputError("Email is required")
    }else if(!emailPattern.test(inputValue)){
      setInputError("Invalid email")
    }else{
      setInputError("")
    }
  }

  return (
    <div className="my-footer">
      {/* Important links */}
      <div className='impo-links'>
        {/* About us */}
        <div className='links'>
          <h1>About Us</h1>
          <ul>
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link to="/impact">Our Impact</Link></li>
            <li><Link to="/partnership">Our Partners</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Events */}
        <div className='links events'>
          <h1>Events</h1>
          <ul>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/events">Events</Link></li>
            {/* <li><Link to="/subscribe">Subscribe to Us</Link></li> */}
          </ul>

          <div className="newsletter">
            <h4>Subscribe to Us</h4>
            <p>Join CEF's Newsletter or Membership</p>
            <form action="" method='POST' onSubmit={handleSubmit} formNoValidate>
              <input 
                onChange={handleChange}
                value={inputValue}
                type="email" 
                placeholder='Enter your email'
                 />
                 <small className='error-msg'>{InputError}</small>
              <button className='newsletter-btn'>Sign Up</button>
            </form>
          </div>
        </div>

        {/* Partnership & Members and Social Medias */}
        <div className='links'>
          <h1>Partners & Members</h1>
          <ul>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/join-us">Join Us</Link></li>
          </ul>
          <div className='social'>
            <h1>Follow Us</h1>
            <ul>
              <li>
                <Link to="/"><FacebookRoundedIcon className='social-icon'/></Link>

              </li>
              <li>
                <Link to="/"><InstagramIcon className='social-icon'/></Link>

              </li>
              <li>
                <Link to="/"><LinkedInIcon className='social-icon'/></Link>
              </li>
              <li>
                <Link to="/"><i className="fa-brands fa-square-x-twitter social-icon"></i></Link>
              </li>
              <li>
                <Link to="/"><i className="fa-brands fa-square-whatsapp social-icon"></i></Link>

              </li>
              <li>
                <Link to="/"><i className="fa-brands fa-square-youtube social-icon"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='copyright'>
        <div className='left'>
          <p>@2023 Computer Engineering Forum</p>
        </div>
        <div className='left'>
          <p><Link to="/privacy-policy">Privacy Policy,</Link></p>
          <p><Link to="/terms">Terms of Use,</Link></p>
          <p><Link to="/faq">FAQs</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
