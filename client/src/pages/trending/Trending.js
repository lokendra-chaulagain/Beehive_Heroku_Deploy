import React, { useState } from "react";
import FeedPost from "../../components/feedPost/FeedPost";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import RightBar from "../../components/rightBar/RightBar";
import "./trending.scss";

function Trending() {
  //To open the FeedPostCreateContainer
  const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false);

  return (
    <div className="feedPage">
      <div className="fpWrapper">
        <Navbar />
        <div className="fpBeforeSplit">
          <div className="fpLeftCon">
            <LeftBar />
          </div>

          <div className="fpCenterCon">
            <div className="smallWhatsOnYourMindCon">
              <img src=" " alt="" className="tinyProfilePic" />
              <input
                onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
                type="text"
                className="onYourMindInput"
                placeholder="What's on your mind Lokendra ?  Post photos / videos / text from here"
              />
            </div>
            {/* On Click ma yo container show hunxa */}
            {showFeedPostCreateCon && <FeedPostCreate />}
            <FeedPost />
          </div>
          <div className="fpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
