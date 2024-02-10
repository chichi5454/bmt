import leadership from '../../../assets/leadership/leadership.jpg'
import './BoardOfTrustees.css'

const BoardOfTrustees = () => {
  return (
    <>
      <div className="board-container">
        <h2>Board of Trustees</h2>
        <div className="board-images">
          <div className="board-img1">
            <img src={leadership} alt="board of trustee 1" />
          </div>
          <div className="board-img2">
            <img src={leadership} alt="board of trustee 2" />
          </div>
          <div className="board-img2">
            <img src={leadership} alt="board of trustee 13" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardOfTrustees
