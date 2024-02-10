import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <h2>About Us</h2>
      <div className="about-us-wrapper">
        <div className="about-us-texts">
          <p>
            WWelcome to Computer Engineering Forum (CEF), a vibrant community-based in  
            Kenya, dedicated to fostering collaboration, knowledge-sharing,
             and innovation among computer engineers, computer scientists, 
             AI researchers, and technology enthusiasts. Our forum serves as a 
             hub for individuals and businesses interested in advancing artificial 
             general intelligence (AGI) and related fields.elcome to Computer Engineering 
             Forum (CEF), a vibrant community-based in  Kenya, dedicated to fostering 
             collaboration, knowledge-sharing, and innovation among computer engineers, 
             computer scientists, AI researchers, and technology enthusiasts. Our forum 
             serves as a hub for individuals and businesses interested in advancing 
             artificial general intelligence (AGI) and related fields.
          </p>
        </div>

        <div className="about-us-story">
          <h2>Our Story</h2>
          <div className="about-us-video">
            <iframe  
              src="https://www.youtube.com/embed/qHWGnx9VaG4?si=MRyViyexXUPy7UKa" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; 
              clipboard-write;
               encrypted-media; gyroscope; 
               picture-in-picture; web-share" 
               allowFullScreen
               className='hero-video'
               ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
