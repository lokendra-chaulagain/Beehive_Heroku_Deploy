import React, { useState } from "react";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import FeedPost from "../../components/feedPost/FeedPost";
import { useAPI } from "../../context/userDetailContext";
import { useAPI2 } from "../../context/blogContext";
import "./home.scss";

function Home() {
  const [showFeedPostCreateCon, setShowFeedPostCreateCon] = useState(false);
  const { posts } = useAPI2();
  const { userFromDB } = useAPI();

  return (
    <div className="homePage">
      <div className="hpWrapper">
        <Navbar />
        <div className="hpBeforeSplit">
          <div className="hpLeftCon">
            <LeftBar />
          </div>

          <div className="hpCenterCon">
            {showFeedPostCreateCon && (
              <FeedPostCreate
                setShowFeedPostCreateCon={setShowFeedPostCreateCon}
              />
            )}
            <div
              className="feedPostCreateCon"
              onClick={() => setShowFeedPostCreateCon(!showFeedPostCreateCon)}
            >
              What's on your mind {userFromDB?.username} ?
            </div>
            {posts.map((post, i) => (
              <FeedPost index={i} key={i} post={post} />
            ))}
          </div>

          <div className="hpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
