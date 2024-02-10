import './Donate.css'
import { Link } from 'react-router-dom'

const Donate = () => {
  return (
    <div className='donate-container'>
      <h3>Support Our Course</h3>
    <div className='donate-wrapper'>
        <div className='donate'>
          <button className="donate-btn">
            <Link>Donate</Link>
            </button>
        </div>
        <div className='donate files'>
          <button className="donate-btn">
            <h5><Link>Latest Research Paper</Link></h5>
            </button>
        </div>
        <div className='donate files'>
          <button className="donate-btn">
            <h5><Link>Access Tutorial videos</Link></h5>
            </button>
        </div>
      </div>  
    </div>
  )
}

export default Donate
