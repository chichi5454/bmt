import { Outlet } from 'react-router-dom'
import Contents from '../../components/about-component/about-us/Contents'


  const About = () => {
    return (
        <>
          <div className="about">
            <div className="content">
              <Outlet/>
            </div>
              <Contents/>
          </div>
        </>
    )
  }

  export default About
