/** @format */

import { Link } from "react-router-dom";
import "./BannerDir.css";

const BannerDir = () => {
  return (
    <div className="banner-dir">
      <p>Read blog Posts on Current Projects,Events, our Programs, etc...</p>
      <Link to="/blogs">
        <i className="fa-solid fa-arrow-right fa-beat my-icon"></i>
      </Link>
    </div>
  );
};

export default BannerDir;
