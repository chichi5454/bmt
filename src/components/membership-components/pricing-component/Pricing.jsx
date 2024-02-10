/** @format */

import "./Pricing.css";
import "./create-forum/CreateForum.css";
import PremiumPro from "./premium-pro/PremiumPro";
import GetInTouch from "./premium-pro/GetInTouch";
// import CreateForum from "./create-forum/CreateForum";
// import Interview from "./create-forum/Interviews/Interview";
// import YoutubeVideos from "./create-forum/Youtube-videos/YoutubeVideos";

const Pricing = () => {
  return (
    <div className="our-pricing-components">
      <h2>Our Pricing Plans</h2>
      <PremiumPro />
      <div className="get-in-touch">
        <GetInTouch />
      </div>
    </div>

    // <>
    //   <CreateForum/>
    //   <Interview/>
    //   <YoutubeVideos/>
    // </>
  );
};

export default Pricing;
