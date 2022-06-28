import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./jobSearchFeed.scss";
import RightBar from "../../components/rightBar/RightBar";
import JobPost from "../../components/jobPost/JobPost";
import { JobPostsContext } from "../../context/jobPostContext/JobPostContext";
import { getAllJobPosts } from "../../context/jobPostContext/apiCalls";
import { useAPI } from "../../context/userDetailContext";

function JobSearchFeed() {
  //Fetch all job posts
  const { jobPosts, dispatch } = useContext(JobPostsContext);
  useEffect(() => {
    getAllJobPosts(dispatch);
  }, [dispatch]);

  //currentUserDetail
  const { currentUserDetail } = useAPI();
  console.log(currentUserDetail);

  return (
    <div className="jobSearchPage">
      <div className="jspWrapper">
        <Navbar />
        <div className="jspBeforeSplit">
          <div className="jspLeftCon">
            <LeftBar />
          </div>

          <div className="jspCenterCon">
            {jobPosts.map((jobPost, i) => (
              <JobPost key={i} index={i} jobPost={jobPost} />
            ))}
          </div>

          <div className="jspRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSearchFeed;
