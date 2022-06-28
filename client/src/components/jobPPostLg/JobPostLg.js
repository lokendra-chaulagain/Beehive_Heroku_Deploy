import React, { useContext, useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useAPI } from "../../context/userDetailContext";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import "./jobPostLg.scss";
import { AuthContext } from "../../context/authContext/AuthContext";

function JobPostLg({ jobPost }) {
  const { currentUserDetail } = useAPI();
  const {user}=useContext(AuthContext)

  //Bookmark
  const [bookmarked, setBookmarked] = useState(false);
  const handleBookmark = async (id) => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
        userDetailId: currentUserDetail?._id,
      });
      setBookmarked(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Remove Bookmark
  const [removeBookmark, setRemoveBookmark] = useState(false);
  const handleRemoveBookmark = async (id) => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
        userDetailId: currentUserDetail?._id,
      });
      setRemoveBookmark(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="jobPostLgCon">
      <span className="jplTitle">{jobPost?.position}</span>
      <div className="jplCompanyIconName">
        <img className="jplImg" src={jobPost?.companyProfileImg} alt="" />
        <div className="jplCompanyNameCon">
          <span className="jplCompanyName">{jobPost?.companyName}</span>
          <span className="jplCompanyName">
            {jobPost?.companyLocation}{" "}
            <span>
              {" "}
              ({jobPost?.officeOrRemote === "Office" ? "Office" : "Remote"})
            </span>
          </span>
        </div>
      </div>

      <div className="dayAgoApplication">
        <span className="jplPostDay">{format(jobPost?.createdAt)} .</span>
        <span className="jplApplicantsNum">5 applicants</span>
      </div>

      <div className="jplIconAndTxt">
        <BusinessCenterIcon className="jplIcon" />
        <span className="jplTxt">Contract .</span>
        <span className="jplTxt2">
          {jobPost.contractType === "Intern"
            ? "Intern"
            : jobPost.contractType === "Junior"
            ? "Junior"
            : jobPost.contractType === "Mid Senior"
            ? "Mid Senior"
            : "Senior"}
        </span>
      </div>

      {/* ============================= */}

      {/* ============================= */}

      <div className="jplIconAndTxt">
        <BusinessCenterIcon className="jplIcon" />
        <span className="jplTxt">
          {jobPost.noOfEmployee === 1
            ? "1 Post vacancy ."
            : jobPost.noOfEmployee === 2
            ? "2 Post vacancy ."
            : jobPost.noOfEmployee === 3
            ? "3 Post vacancy ."
            : jobPost.noOfEmployee === 4
            ? "4 Post vacancy ."
            : jobPost.noOfEmployee === 5
            ? "5 Post vacancy ."
            : jobPost.noOfEmployee === 6
            ? "6 Post vacancy ."
            : jobPost.noOfEmployee === 7
            ? "7 Post vacancy ."
            : jobPost.noOfEmployee === 8
            ? "8 Post vacancy ."
            : jobPost.noOfEmployee === 9
            ? "9 Post vacancy . "
            : "More than 10 Vacancy ."}
        </span>
        <span className="jplTxt2">{jobPost?.companyType}</span>
      </div>

      <div className="jplRecruiticonTxt">
        <TrackChangesIcon className="jplHiringIcon" />
        <span className="activelyRecruitTxt">Actively recruiting</span>
      </div>

      <div className="jplRecruiticonTxt">
        <AttachMoneyIcon className="jplHiringIcon" />
        <span className="activelyRecruitTxt">
          {jobPost.salaryRange === "5k-10k"
            ? "5k-10k"
            : jobPost.salaryRange === "10k-15k"
            ? "10k-15k"
            : jobPost.salaryRange === "15k-20k"
            ? "15k-20k"
            : jobPost.salaryRange === "20k-30k"
            ? "20k-30k"
            : jobPost.salaryRange === "30k-40k"
            ? "30k-40k"
            : jobPost.salaryRange === "40k-50k"
            ? "40k-50k"
            : jobPost.salaryRange === "50k-60k"
            ? "50k-60k"
            : jobPost.salaryRange === "60k-70k"
            ? "60k-70k"
            : jobPost.salaryRange === "70k-80k"
            ? "70k-80k"
            : "Negotiable"}
        </span>
      </div>

      <div className="jplApplySaveBut">
        <button className="jplApplyBtn">
          Apply <SendOutlinedIcon className="jplButIcon" />{" "}
        </button>

        {currentUserDetail?.jobPostsBookmark?.includes(jobPost?._id) ? (
          <button
            className="jplSaveBtn"
            onClick={() => handleRemoveBookmark(jobPost?._id)}
          >
            <CheckIcon /> Saved
          </button>
        ) : (
          <button
            className="jplSaveBtn"
            onClick={() => handleBookmark(jobPost._id)}
          >
            Save
          </button>
        )}

        {/* Edit Button */}
        <Link to={`/jobEdit/${jobPost._id}`} className="link">
          {user._id===jobPost.userID && <button className="editBut">
            <EditIcon />
            Edit
          </button>}
        </Link>
      </div>
      <hr className="jplHr" />

      {/* Job description===================================> */}
      <div className="jobDescCon">
        <span className="jobDescriptionTitleTxt">Job Description</span>
        <span className="aboutTheJob">AboutThe Job</span>
        <span className="jobDesc">{jobPost?.aboutJob}</span>
        <span className="aboutTheJob">
          {" "}
          About <span className="jplCompanyName">{jobPost?.companyName}</span>
        </span>
        <span className="jobDesc">{jobPost?.aboutCompany}</span>
        <span className="aboutTheJob">AboutThe Role</span>
        <span className="jobDesc">{jobPost?.aboutRole}</span>
        <span className="aboutTheJob">Requirements</span>
        <ul className="requirementsUl">
          <li className="requirementLi jobDesc">{jobPost?.requirement1}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement2}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement3}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement4}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement5}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement6}</li>
          <li className="requirementLi jobDesc">{jobPost?.requirement7}</li>
        </ul>
      </div>
    </div>
  );
}

export default JobPostLg;
