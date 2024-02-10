import about1 from '../../../assets/about/about1.jpg'

const Leaders = () => {
  return (
    <>
      <div className="leadership-container">
        <h2>Leadership</h2>
        <div className="images">
          <div className="img1">
            <img src={about1} alt="team1" />
            <h3>Founder</h3>
          </div>
          <div className="img2">
            <img src={about1} alt="team1" />
            <h3>Director</h3>
          </div>
        </div>
        {/* Another Leaders */}
        <div className="images">
          <div className="img1">
            <img src={about1} alt="team1" />
            <h3>Communication Specialist</h3>
          </div>
          <div className="img2">
            <img src={about1} alt="team1" />
            <h3>Manager</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leaders
