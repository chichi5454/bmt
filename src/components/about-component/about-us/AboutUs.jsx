/** @format */

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <h3> Our Brief but rich History</h3>
      <div className="about-us-wrapper">
        <div className="about-us-texts">
          <p>
            The Kenya Red Cross Society (KRCS) was founded in 1965 under the
            Kenya Red Cross Society Act (Chapter 256 Laws of Kenya) and
            officially acknowledged by the Kenyan government as a voluntary aid
            society working alongside public authorities. It holds the
            distinction of being the sole National Red Cross Society in Kenya.
            Regarding its relationship with public authorities, KRCS maintains
            independence, enabling it to operate in alignment with the
            Fundamental Principles of the Red Cross and Red Crescent Movement.
            Its Constitution is rooted in the Geneva Conventions of 1949 and
            their Additional Protocols of 1977, to which Kenya is a signatory
          </p>
        </div>

        <div className="about-us-story">
          <h2>Our Story</h2>
          <div className="about-us-video">
            <iframe
              src="https://www.youtube.com/embed/E0Auub6UrkY?t=140&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; 
              clipboard-write;
               encrypted-media; gyroscope; 
               picture-in-picture; web-share"
              allowFullScreen
              className="hero-video"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
