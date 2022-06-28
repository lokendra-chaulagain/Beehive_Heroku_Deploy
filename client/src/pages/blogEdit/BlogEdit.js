import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import BlogEditCon from "../../components/blogEditCon/BlogEditCon";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./blogEdit.scss";

function BlogEdit() {
  //Data fetching from URl id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [blog, setBlog] = React.useState({});
  useEffect(() => {
    const fetchBlogData = async () => {
      const res = await axios.get(`/blogs/get/${path}`);
      setBlog(res.data);
    };
    fetchBlogData();
  }, [path]);

  return (
    <div className="blogEditPage">
      <div className="bepWrapper">
        <Navbar />
        <div className="bepBeforeSplit">
          <div className="bepLeftCon">
            <LeftBar />
          </div>

          <div className="bepCenterCon">
            <BlogEditCon blog={blog} />
          </div>

          <div className="bepRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
