import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./blogRead.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogLg from "../../components/blogLg/BlogLg";

function BlogRead() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [blog, setBlog] = useState({});
  useEffect(() => {
    const fetchBlogData = async () => {
      const res = await axios.get(`/blogs/get/${path}`);
      setBlog(res.data);
    };
    fetchBlogData();
  }, [path]);
  console.log(blog);

  return (
    <div className="blogReadPage">
      <div className="brpWrapper">
        <Navbar />
        <div className="brpBeforeSplit">
          <div className="brpLeftCon">
            <LeftBar />
          </div>

          <div className="brpCenterCon">
            <BlogLg blog={blog} />
          </div>

          <div className="brpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRead;
