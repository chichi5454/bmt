import about1 from '../../../assets/about/about2.jpg'

const Team = () => {
  return (
    <>
      <div className="board-container">
        <h2>Team</h2>
        <div className="board-images">
          <div className="board-img1">
            <img src={about1} alt="team1" />
          </div>
          <div className="board-img2">
            <img src={about1} alt="team1" />
          </div>
          <div className="board-img2">
            <img src={about1} alt="team1" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Team
