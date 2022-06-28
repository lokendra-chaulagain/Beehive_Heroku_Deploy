import React, { useContext, useEffect, useState } from "react";
import "./userInfo.scss";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NetworkWifi2BarIcon from "@mui/icons-material/NetworkWifi2Bar";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Hobby from "../hobby/Hobby";
import { AuthContext } from "../../context/authContext/AuthContext";
import UserInfoEdit from "../userInfoEdit/UserInfoEdit";
import axios from "axios";
import { useAPI } from "../../context/userDetailContext";
import {useLocation} from "react-router-dom";

function UserInfo() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const path=location.pathname.split("/")[2];
  console.log(path);

  //To open userInfoEditContainer
  const [showUserInfoEditCon, setShowUserInfoEditCon] = useState(false);

  //Fetching userDetail
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const userDetailsOny = async () => {
      try {
        const res = await axios.post("/userDetails/get", {
          userID: user._id,
        });
        setCurrentUser(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    userDetailsOny();
  }, [user._id]);
  console.log(currentUser);

  return (
    <div className="userInfoCon">
      <div className="userNameProfessionActive">
        <span className="uiName">{user.fullName}</span>
        <span className="uiProfession">{currentUser.profession}</span>
        <span className="uiActive">active 5 hour ago</span>
      </div>

      <div className="uiFollowFollowing">
        <div className="uiFollower">
          <span className="uiFollowerTxt">Followers</span>
          <span className="uiFollowerNum">{currentUser.followers}</span>
        </div>

        <div className="uiFollower">
          <span className="uiFollowerTxt">Following</span>
          <span className="uiFollowerNum">{currentUser.following}</span>
        </div>
      </div>

      <div className="uiDetailInfo">
        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            {currentUser?.currentJobPosition}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Founder at {currentUser.founderCoFounderAt}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Co-founder at {currentUser.founderCoFounderAt}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Former {currentUser.pastJobPosition} at {currentUser.pastJobAt}{" "}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Former {currentUser.pastJobPosition} at {currentUser.pastJobAt}{" "}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <BusinessCenterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Former {currentUser.pastJobPosition} at {currentUser.pastJobAt}{" "}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <SchoolIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Currently Studying at {currentUser.currentlyStudying}{" "}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <SchoolIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Graduated from {currentUser.currentlyStudying}{" "}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <SchoolIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Completed HighSchooling from {currentUser.highSchool}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <SchoolIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Completed Schooling from {currentUser.school}
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <LocationOnIcon className="uiIcon" />
          <span className="uiDetailInfoValue">{currentUser.homeTown}</span>
        </div>

        <div className="uiDetailInfoItem">
          <NetworkWifi2BarIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            Followed by {currentUser.followerCount} people
          </span>
        </div>

        <div className="uiDetailInfoItem">
          <GitHubIcon className="uiIcon" />
          <span className="uiDetailInfoValue">ashiishme</span>
        </div>

        <div className="uiDetailInfoItem">
          <TwitterIcon className="uiIcon" />
          <span className="uiDetailInfoValue">ashiishme</span>
        </div>

        <div className="uiDetailInfoItem">
          <LinkedInIcon className="uiIcon" />
          <span className="uiDetailInfoValue">ashiishme</span>
        </div>

        <div className="uiDetailInfoItem">
          <InstagramIcon className="uiIcon" />
          <span className="uiDetailInfoValue">ashiishme</span>
        </div>

        <div className="uiDetailInfoItem">
          <InsertLinkIcon className="uiIcon" />
          <span className="uiDetailInfoValue">www.ashishme.com.mp</span>
        </div>

        <div className="uiDetailInfoItem">
          <MoreHorizIcon className="uiIcon" />
          <span className="uiDetailInfoValue">
            See more about {user.fullName.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="InterestHobbyTxtAndEditButCon">
        <span className="interestHobby">Interest and Hobby</span>

        <button
          onClick={() => setShowUserInfoEditCon(!showUserInfoEditCon)}
          className="userInfoEditBut"
        >
          Edit
        </button>
      </div>

      {showUserInfoEditCon && <UserInfoEdit />}

      <div className="hobbyListCon">
        <Hobby />
        <Hobby />
      </div>
    </div>
  );
}

export default UserInfo;
