import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./feedPostEdit.scss";
import FeedPostEditCon from "../../components/feedPostEditCon/FeedPostEditCon";

function FeedPostEdit() {
  return (
    <div className="feedPostEditPage">
      <div className="fpepWrapper">
        <Navbar />
        <div className="fpepBeforeSplit">
          <div className="fpepLeftCon">
            <LeftBar />
          </div>

          <div className="fpepCenterCon">
            <FeedPostEditCon />
          </div>

          <div className="fpepRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPostEdit;
