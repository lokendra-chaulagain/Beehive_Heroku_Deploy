import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./blogCreate.scss";
import BlogCreateCon from "../../components/blogCreateCon/BlogCreateCon";

function BlogCreate() {
  return (
    <div className="blogCreatePage">
      <div className="bcpWrapper">
        <Navbar />
        <div className="bcpBeforeSplit">
          <div className="bcpLeftCon">
            <LeftBar />
          </div>

          <div className="bcpCenterCon">
            <BlogCreateCon/>
          </div>

          <div className="bcpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCreate;
