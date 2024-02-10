import './Initiatives.css'
import about1 from '../../../assets/about/about1.jpg'
import { Link } from 'react-router-dom'
const Initiatives = () => {
  return (
    <div className='initiatives-container'>
      <h2>Join The Initiatives</h2>
        <div className="initiative-container">
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="/coding-competition">Join Coding Competitions</Link>
          </div>
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="/ai-research-forum" >AI Research Forum</Link>
          </div>
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="" >Paper Discussion Forums</Link>
          </div>
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="" >Open Language Forum</Link>
          </div>
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="" >Inovation Forums</Link>
          </div>
          <div className="initiative-img2">
            <img src={about1} alt="team1" />
            <Link to="" >Open Forum</Link>
          </div>
        </div>
    </div>
  )
}

export default Initiatives
