import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import "./leftBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

function LeftBar() {
  const { user } = useContext(AuthContext);
  //Logout
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.replace("/login");
  // };

  //Logout
  const { dispatch } = useContext(AuthContext);
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  return (
    <div className="leftBar">
      <div className="lbWrapper">
        <Link to="/" className="link">
          <div className="lbListItem">
            <HomeOutlined className="lbListItemKey" />
            <span
              className="lbListItemValue"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Home
            </span>
          </div>
        </Link>

        <Link to={`/profile/${user?._id}`} className="link">
          <div className="lbListItem">
            <PersonOutlineOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Profile</span>
          </div>
        </Link>
        {/* onClick={()=>window.location.replace(`/profile/${user?._id}`)} */}

        <Link to="/blogs" className="link">
          <div
            className="lbListItem"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <BookOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Blogs</span>
          </div>
        </Link>

        <Link to="/blogCreate" className="link">
          <div
            className="lbListItem"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <BorderColorOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Write Blogs</span>
          </div>
        </Link>

        <Link to="/bookmark" className="link">
          <div
            className="lbListItem"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <BookmarkIcon className="lbListItemKey" />
            <span className="lbListItemValue">Bookmarked</span>
          </div>
        </Link>

        <Link to="/jobSearch" className="link">
          <div
            className="lbListItem"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <BusinessCenterOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Find Jobs</span>
          </div>
        </Link>

        <Link to="/jobCreate" className="link">
          <div
            className="lbListItem"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <EngineeringOutlinedIcon className="lbListItemKey" />
            <span className="lbListItemValue">Create Jobs</span>
          </div>
        </Link>

        <Link to="/settings" className="link">
          <div className="lbListItem"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
            <SettingsIcon className="lbListItemKey" />
            <span className="lbListItemValue">Settings</span>
          </div>
        </Link>

        <div className="lbListItem">
          <WhatshotIcon className="lbListItemKey" />
          <span className="lbListItemValue">Trending</span>
        </div>

        <div className="lbListItem">
          <AutoStoriesIcon className="lbListItemKey" />
          <span className="lbListItemValue">Success Story</span>
        </div>

        <div className="lbListItem">
          <HelpCenterOutlinedIcon className="lbListItemKey" />
          <span className="lbListItemValue">Help </span>
        </div>

        <div className="lbListItem lbListItemLogout" onClick={handleLogout}>
          <LogoutIcon className="lbListItemKey" />
          <span className="lbListItemValue">Logout </span>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
