import about1 from '../../../assets/about/about2.jpg'

const ExCommittee = () => {
  return (
    <>
      <div className="board-container">
        <h2>Executive Committee</h2>
        <div className="board-images">
          <div className="board-img1">
            <img src={about1} alt="Executive comittee 1" />
          </div>
          <div className="board-img2">
            <img src={about1} alt="Executive comittee 2" />
          </div>
          <div className="board-img2">
            <img src={about1} alt="Executive comittee 3" />
          </div>
        </div>
    </div>
    </>
  )
}

export default ExCommittee
