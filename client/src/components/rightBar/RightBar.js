import React from "react";
import Category from "../category/Category";
import RecentPost from "../recentPost/RecentPost";
import "./rightBar.scss";

function RightBar({ recentBlogTitle }) {
  
  return (
    <div className="rightBarComponent">
      <Category />
      <RecentPost recentBlogTitle={recentBlogTitle} />
    </div>
  );
}

export default RightBar;
