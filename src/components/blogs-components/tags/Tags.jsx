import './Tags.css'
import { Link } from 'react-router-dom'

const Tags = () => {
  return (
    <div className='tags-container'>
      <div className="filter-icon">
        <i className="fa-solid fa-filter"></i>
      </div>
      <div className="tags">
        <div className="title">
            <h1 className='tags-title'>Tags</h1>
        </div>
        <div className="tags-content">
            <p><Link to=""> AI</Link></p>
            <p><Link to=""> Development Design</Link></p>
            <p><Link to=""> Innovation</Link></p>
            <p><Link to=""> Careers</Link></p>
            <p><Link to=""> Compeetitions</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Tags
