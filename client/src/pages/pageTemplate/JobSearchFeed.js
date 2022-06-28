import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./jobSearchFeed.scss";
import RightBar from "../../components/rightBar/RightBar";

function JobSearchFeed() {
  return (
    <div className="jobSearchPage">
      <div className="jspWrapper">
        <Navbar />
        <div className="jspBeforeSplit">
          <div className="jspLeftCon">
            <LeftBar />
          </div>

          <div className="jspCenterCon"></div>

          <div className="jspRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSearchFeed;
