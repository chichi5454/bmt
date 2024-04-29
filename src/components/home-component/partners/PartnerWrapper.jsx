/** @format */

import CGOOB from "../../../assets/CGOOB.jpg";
import WV from "../../../assets/WV.png";
import dig from "../../../assets/dig.png";
import ICL from "../../../assets/ICL.jpg";
import BI from "../../../assets/BI.png";
import NG from "../../../assets/NG.jpg";

const PartnerWrapper = () => {
  return (
    <>
      <div className="partners">
        <img src={NG} alt="partners" />
        <img src={CGOOB} alt="partners" />
        <img src={WV} alt="partners" />
        <img src={dig} alt="partners" />
        <img src={ICL} alt="partners" />
        <img src={BI} alt="partners" />
      </div>
    </>
  );
};

export default PartnerWrapper;
