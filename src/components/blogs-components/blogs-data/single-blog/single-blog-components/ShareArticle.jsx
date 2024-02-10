import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const ShareArticle = () => {
  return (
    <>
      <div className="social-icons">
          <Link to="">
            <InstagramIcon className="social-icon" />
          </Link>
          <Link to="">
            <FacebookRoundedIcon className="social-icon" />
          </Link>
          <Link to="">
            <LinkedInIcon className="social-icon" />
          </Link>
          <Link to="">
            <TelegramIcon className="social-icon" />
          </Link>
        </div>
    </>
  )
}

export default ShareArticle
