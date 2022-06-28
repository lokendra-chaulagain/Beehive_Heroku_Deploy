import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./jobPostRead.scss";
import RightBar from "../../components/rightBar/RightBar";
import JobPostLg from "../../components/jobPPostLg/JobPostLg";
import { useLocation } from "react-router-dom";
import axios from "axios";

function JobPostRead() {
  //Fetching JobPost data from URL id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [jobPost, setJobPost] = useState({});
  useEffect(() => {
    const fetchJobPost = async () => {
      const res = await axios.get(`/jobPosts/get/${path}`);
      console.log(res.data);
      setJobPost(res.data);
    };
    fetchJobPost();
  }, [path]);

  return (
    <div className="jobPostReadPage">
      <div className="jprWrapper">
        <Navbar />
        <div className="jprBeforeSplit">
          <div className="jprLeftCon">
            <LeftBar />
          </div>

          <div className="jprCenterCon">
            <JobPostLg jobPost={jobPost} />
          </div>

          <div className="jprRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPostRead;
