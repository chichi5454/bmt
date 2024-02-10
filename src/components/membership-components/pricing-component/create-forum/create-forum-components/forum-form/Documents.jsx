import { Link } from 'react-router-dom'

const Documents = () => {
  return (
    <div className='document-side'>
      <div className="document-wrapper">
        <div className="side-part doccuments">
          <h3>Documents</h3>
          <ul>
              <li><Link to=''>AI PDF Papers</Link></li>
              <li><Link to=''>Ideation blogs</Link></li>
              <li><Link to=''>Videos</Link></li>
          </ul>
        </div>
        <div className="side-part interviews">
          <h3>Interviews</h3>
          <ul>
              <li><Link>Podcasts</Link></li>
              <li><Link to='youtube'>Youtube</Link></li>
              <li><Link to='summary-pdf'>Summary PDF</Link></li>
          </ul>
        </div>
        <div className="side-part events">
          <h3>Events</h3>
          <ul>
              <li><Link>Upcoming</Link></li>
              <li><Link>Previous</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Documents
