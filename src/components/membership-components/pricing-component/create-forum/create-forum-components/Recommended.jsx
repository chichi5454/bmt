// ********TO BE REFACTORED ONCE DATA COME*********
import recom1 from '../../../../../assets/recommended/recom2.jpg'
import recom2 from '../../../../../assets/recommended/recom1.png'
import { Link } from 'react-router-dom'

const Recommended = () => {
  return (
    <div className='recommended-forums'>
      <h2>Recommended  for you</h2>
      <div className="recommended-forums-container">  
              {/* One here */}
          <Link className="recommended-forums-wrapper">
            <div className="recommended-forum-img">
              <img src={recom1} alt="forum img" />
            </div>
            <div className="recommended-forum-banner-text">
              <p>Evolving power of Internet of Things</p>
            </div>
          </Link>
              {/* One here */}
          <Link className="recommended-forums-wrapper">
            <div className="recommended-forum-img">
              <img src={recom2} alt="forum img" />
            </div>
            <div className="recommended-forum-banner-text">
              <p>Evolving power of Internet of Things</p>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Recommended
