import joinUs from '../../../assets/blogs/blog1.jpg'
import { Link } from 'react-router-dom'

const JoinUs = () => {
  return (
    <div className="join-us-container">
        <div className="img">
          <img src={joinUs} alt="join ing" />
        </div>
        <div className="join-us-call">
          <p>Be part of an innovation awareness and development community.</p>
          <Link to="" className='join-us-btn'>
            Join Us <i className="fa-solid fa-arrow-right fa-beat join-us-arrow"></i>
        </Link>
        </div>
      </div>
  )
}

export default JoinUs
