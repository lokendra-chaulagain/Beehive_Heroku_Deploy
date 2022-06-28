import React, { useContext, useEffect, useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import { Link, useLocation } from "react-router-dom";
import "./profileRightBar.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

function ProfileRightBar() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const { user } = useContext(AuthContext);

  //Fetching userDetail
  const [viewUserDetail, setViewUserDetail] = useState({});
  useEffect(() => {
    const userDetailsOny = async () => {
      try {
        const res = await axios.post("/userDetails/getByUserID", {
          userID: path,
        });
        setViewUserDetail(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    userDetailsOny();
  }, [path]);

  const onClick = (e) => {
    window.location.replace("/profileEdit");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <h4 className="userInfo">User Information</h4>
      <div className="rightBarInfoContainer">
        {viewUserDetail?.currentJob1Position ? (
          <div className="ppUserInfoItemCon">
            <BusinessCenterIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              {viewUserDetail?.currentJob1Position}{" "}
              {viewUserDetail.currentJob1Company ? " at " : null}
              <span className="boldSpan">
                {viewUserDetail?.currentJob1Company}
              </span>
            </span>
          </div>
        ) : null}

        {viewUserDetail?.currentJob2Position ? (
          <div className="ppUserInfoItemCon">
            <BusinessCenterIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              {viewUserDetail?.currentJob2Position}{" "}
              {viewUserDetail?.currentJob2Company ? "at " : null}
              <span className="boldSpan">
                {viewUserDetail?.currentJob2Company},
              </span>
            </span>
          </div>
        ) : null}

        {viewUserDetail?.founderOf1 ? (
          <div className="ppUserInfoItemCon">
            <BusinessCenterIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Founder at{" "}
              <span className="boldSpan">{viewUserDetail?.founderOf1}</span>
            </span>
          </div>
        ) : null}

        {viewUserDetail?.founderOf1 ? (
          <div className="ppUserInfoItemCon">
            <BusinessCenterIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Co-founder at{" "}
              <span className="boldSpan">{viewUserDetail?.founderOf1}</span>
            </span>
          </div>
        ) : null}

        {viewUserDetail?.pastJob1Position ? (
          <div className="ppUserInfoItemCon">
            <BusinessCenterIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Former{" "}
              <span className="boldSpan">
                {viewUserDetail?.pastJob1Position}
              </span>{" "}
              {viewUserDetail?.pastJob1Company ? "at" : null}{" "}
              {viewUserDetail?.pastJob1Company}
            </span>
          </div>
        ) : null}

        {viewUserDetail?.currentStudyingCourse && (
          <div className="ppUserInfoItemCon">
            <SchoolIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Studies{" "}
              <span className="boldSpan">
                {viewUserDetail?.currentStudyingCourse}
              </span>{" "}
              at {""}
              {viewUserDetail?.currentStudyingUniversity}{" "}
            </span>
          </div>
        )}

        {viewUserDetail?.plus2CompletedCollege && (
          <div className="ppUserInfoItemCon">
            <SchoolIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              +2 Completed from{" "}
              <span className="boldSpan">
                {viewUserDetail?.plus2CompletedCollege}
              </span>{" "}
              {viewUserDetail?.plus2CompletedCollegeLocation}
            </span>
          </div>
        )}

        {viewUserDetail?.sEECompletedCollege ? (
          <div className="ppUserInfoItemCon">
            <SchoolIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              SEE completed from{" "}
              <span className="boldSpan">
                {viewUserDetail?.sEECompletedCollege}
              </span>{" "}
              {viewUserDetail?.sEECompletedSchoolLocation}{" "}
            </span>
          </div>
        ) : null}

        {viewUserDetail?.currentlyLiving ? (
          <div className="ppUserInfoItemCon">
            <LocationCityIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Lives in{" "}
              <span className="boldSpan">
                {viewUserDetail?.currentlyLiving}
              </span>{" "}
            </span>
          </div>
        ) : null}

        {viewUserDetail?.homeTown ? (
          <div className="ppUserInfoItemCon">
            <LocationOnIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              From <span className="boldSpan">{viewUserDetail?.homeTown}</span>{" "}
            </span>
          </div>
        ) : null}

        {viewUserDetail?.relationshipStatus ? (
          <div className="ppUserInfoItemCon">
            <LocationOnIcon className="ppInfoIcon" />
            <span className="ppUserInfoItemTxt">
              Relationship:{" "}
              <span className="boldSpan">
                {viewUserDetail?.relationshipStatus}
              </span>{" "}
            </span>
          </div>
        ) : null}

        {viewUserDetail?.githubLink ? (
          <a
            className="ppUserInfoItemCon link"
            href={viewUserDetail?.githubLink}
          >
            <GitHubIcon className="ppInfoIcon" />
            <span className="boldSpan">
              {viewUserDetail?.fullName.split(" ")[0].toLowerCase()}
            </span>
          </a>
        ) : null}

        {viewUserDetail?.twitterLink ? (
          <a
            className="ppUserInfoItemCon link"
            href={viewUserDetail?.twitterLink}
          >
            <TwitterIcon className="ppInfoIcon" />
            <span className="boldSpan">
              {viewUserDetail?.fullName.split(" ")[0].toLowerCase()}
            </span>
          </a>
        ) : null}

        {viewUserDetail?.linkedinLink ? (
          <a
            className="ppUserInfoItemCon link"
            href={viewUserDetail?.linkedinLink}
          >
            <LinkedInIcon className="ppInfoIcon" />
            <span className="boldSpan">
              {viewUserDetail?.fullName.split(" ")[0].toLowerCase()}
            </span>
          </a>
        ) : null}

        {viewUserDetail?.instagramLink ? (
          <a
            className="ppUserInfoItemCon link"
            href={viewUserDetail?.instagramLink}
          >
            <InstagramIcon className="ppInfoIcon" />
            <span className="boldSpan">
              {viewUserDetail?.fullName.split(" ")[0].toLowerCase()}
            </span>
          </a>
        ) : null}

        {viewUserDetail?.websiteLink ? (
          <a
            className="ppUserInfoItemCon link"
            href={viewUserDetail?.websiteLink}
          >
            <InsertLinkIcon className="ppInfoIcon" />
            <span className="boldSpan">{viewUserDetail.websiteLink}</span>
          </a>
        ) : null}

        <div className="ppUserInfoItemCon">
          <MoreHorizIcon className="ppInfoIcon" />
          <span className="ppUserInfoItemTxt">
            See more about{" "}
            <span className="boldSpan">{viewUserDetail?.fullName}</span>
          </span>
        </div>

        <Link to={"/profileEdit"}>
          {user._id === path && (
            <button className="profileInfoEditBut" onClick={onClick}>Edit</button>
          )}
        </Link>
      </div>
    </>
  );
}

export default ProfileRightBar;
