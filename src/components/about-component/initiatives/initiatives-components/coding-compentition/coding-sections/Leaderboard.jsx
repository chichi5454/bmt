/** @format */
import "./leaderBoard.css";
import { Leaderboard as LeaderboardData } from "../../../../../../Helpers/competitions/Leaderboard";

const Leaderboard = ({ filterValue }) => {
  // Filter the leaderboard data based on the input value
  const filteredLeaderboardData = LeaderboardData.filter((data) =>
    data.theme.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="leaderboard">
      <h4>Leaderboard competitions</h4>
      <div className="leaderboard-title-container">
        <div className="leaderboard-titles">
          <p>Theme</p>
          <p>Competitions</p>
          <p>Total prizes</p>
        </div>
        <ol className="leaderboard-content">
          {filteredLeaderboardData.map((data) => (
            <li key={data.id} className="leaderboard-content-information">
              <div className="competition-list">
                <p className="competition-list-one">{data.theme}</p>
                <p className="competition-list-two">{data.competitions}</p>
                <p className="competition-list-one">{data.prizes}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;
