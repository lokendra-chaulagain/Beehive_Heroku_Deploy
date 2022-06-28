import React from "react";
import "./recentPost.scss";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

function RecentPost({ recentBlogTitle }) {
  return (
    <div className="recentPost">
      <span className="rpTitle">Recent Blogs</span>
      <hr className="rpHr" />
      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>


      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>


      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <div className="rpList">
        <FeedOutlinedIcon className="rpListKey" />
        <span className="rpListValue">
          Lorem ipsum uifng Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>
    </div>
  );
}

export default RecentPost;
