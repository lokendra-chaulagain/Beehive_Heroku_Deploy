import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./jobEdit.scss";
import RightBar from "../../components/rightBar/RightBar";
import JobPost from "../../components/jobPost/JobPost";
import { JobPostsContext } from "../../context/jobPostContext/JobPostContext";
import { getAllJobPosts } from "../../context/jobPostContext/apiCalls";
import { useAPI } from "../../context/userDetailContext";
import JobPostEdit from "../../components/jobPostEdit/JobPostEdit";

function JobEdit() {
  return (
    <div className="jobEditPage">
      <div className="jepWrapper">
        <Navbar />
        <div className="jepBeforeSplit">
          <div className="jepLeftCon">
            <LeftBar />
          </div>

          <div className="jepCenterCon">
            <JobPostEdit />
          </div>

          <div className="jepRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobEdit;
