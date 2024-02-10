import './Founder.css'
// import myVideo from '../../../assets/video.mp4'

const Founder = () => {
  return (
    <div className='founder'>
      <h2>Founder</h2>
      <div className="founder-wrapper">
        <p>Founder’s message about CEF</p>
        <div className="founder-video">
         <iframe  
              src="https://www.youtube.com/embed/KhLyky8vBZU?si=6B624Bv1GopdyM0s" 
              title="YouTube video player" 
              frameborder="0" 
              // width="800" 
              allow="accelerometer; 
              clipboard-write;
               encrypted-media; gyroscope; 
               picture-in-picture; web-share" 
               allowFullScreen
               className='hero-video'
               ></iframe>
        </div>
        <div className="founder-texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, debitis corrupti. Similique recusandae consequuntur inventore consequatur ducimus, nulla, odio distinctio doloremque quis omnis magnam eius perferendis pariatur perspiciatis non deserunt!
            Debitis ullam veniam modi assumenda? Ducimus, vitae ipsum fuga voluptates necessitatibus labore quos, tempore, ullam vero culpa sed expedita ut provident tempora enim ratione sapiente sequi assumenda doloribus architecto quidem.
            Dolorum ad adipisci magni vel, commodi magnam quasi amet aliquam, saepe ab repudiandae corporis. Quae quaerat ullam quo exercitationem provident maiores vero, non dicta quia. Earum quam eius aliquid exercitationem?
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default Founder
