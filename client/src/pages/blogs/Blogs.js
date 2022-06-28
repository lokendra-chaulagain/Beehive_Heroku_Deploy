import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Blog from "../../components/blog/Blog";
import "./blogs.scss";
import { useAPI2 } from "../../context/blogContext";

function Blogs() {
  const { blogs } = useAPI2();

  return (
    <div className="blogsListPage">
      <div className="blpWrapper">
        <Navbar />
        <div className="blpBeforeSplit">
          <div className="blpLeftCon">
            <LeftBar />
          </div>

          <div className="blpCenterCon">
            {blogs.map((blog, i) => (
              <Blog key={i} index={i} blog={blog} />
            ))}
          </div>

          <div className="blpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
