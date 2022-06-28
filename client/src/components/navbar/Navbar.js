import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link, NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navbar.scss";
import { useAPI } from "../../context/userDetailContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();

  //Toggle Sidebar
  const [sidebar, setSidebar] = useState(false);
  // const showSlider = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        <img src="/assets/logo.svg" alt="" className="navbarLogo" />
      </Link>
      <HorizontalSplitIcon
        className="barIcon"
        onClick={() => setSidebar(!sidebar)}
      />
      {/* Slider */}

      {sidebar && (
        <div className="sideBar">
          <ClearIcon className="clearIcon" onClick={() => setSidebar(false)} />
          <div className="drawerSliderWrapper">
            <Link to="/" className="link">
              <div className="sliderItems">
                <HomeIcon className="sliderListIcons" />
                <span className="sliderListItem">Home</span>
              </div>
            </Link>

            <Link to="/write" className="link">
              <div className="sliderItems">
                <DriveFileRenameOutlineIcon className="sliderListIcons" />
                <span className="sliderListItem">Create Blogs</span>
              </div>
            </Link>

            <Link to="/about" className="link">
              <div className="sliderItems">
                <InfoIcon className="sliderListIcons" />
                <span className="sliderListItem">About</span>
              </div>
            </Link>

            <Link to="/contact" className="link">
              <div className="sliderItems">
                <ContactMailIcon className="sliderListIcons" />
                <span className="sliderListItem">Contact</span>
              </div>
            </Link>

            <Link to="/setting" className="link">
              <div className="sliderItems">
                <AccountBoxIcon className="sliderListIcons" />
                <span className="sliderListItem">Profile</span>
              </div>
            </Link>

            <Link to="/setting" className="link">
              <div className="sliderItems">
                <SettingsIcon className="sliderListIcons" />
                <span className="sliderListItem">Settings</span>
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sliderItems">
                <LogoutIcon className="sliderListIcons" />
                <span className="sliderListItem">Logout</span>
              </div>
            </Link>
          </div>
        </div>
      )}
      {/*--------------------------------------------------- */}

      <div className="navbarLinks ">
        <NavLink to="/" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Home</span>
          </div>
        </NavLink>

        <NavLink to="/blogs" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Blogs</span>
          </div>
        </NavLink>

        <NavLink to="/jobSearch" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Jobs</span>
          </div>
        </NavLink>

        <NavLink to="/settings" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Settings</span>
          </div>
        </NavLink>

        <NavLink
          to={`/profile/${user?._id}`}
          activeclassname="active"
          className="link"
        >
          <div className="navLinkCon  nv1">
            <span className="navLink  ">Profile </span>
          </div>
        </NavLink>

        <NavLink to="/bookmark" activeclassname="active" className="link">
          <div className="navLinkCon nv1">
            <span className="navLink  ">Saved </span>
          </div>
        </NavLink>
      </div>

      <div className="navRight">
        {/* <div className="navSearchCon">
          <SearchIcon className="navSearchIcon" />
          <input
            type="text"
            className="navSearchInput"
            placeholder="Type Search Word"
          />
        </div> */}

        <Link to={`/profile/${user?._id}`}>
          <img
            src={currentUserDetail?.profilePic}
            alt=""
            className="navbarCircleAvatar"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
