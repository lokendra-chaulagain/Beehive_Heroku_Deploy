import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import { useLocation } from "react-router-dom";
import RightBar from "../../components/rightBar/RightBar";
import Blog from "../../components/blog/Blog";
import axios from "axios";
import "./categories.scss";

function Categories() {
  //Fetching blogs according to category
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [catBlogs, setCatBlogs] = React.useState([{}]);
  useEffect(() => {
    const fetchCatBlogs = async () => {
      const res = await axios.get(`/blogs/getAllBlogsOfACategory/${path}`);
      setCatBlogs(res.data);
    };
    fetchCatBlogs();
  }, [path]);

  //Fetching all Titles of blogs for recent blogs
  const [recentBlogsTitle, setRecentBlogsTitle] = React.useState([{}]);
  useEffect(() => {
    const fetchRecentBlogsTitle = async () => {
      const res = await axios.get("/blogs//getAllTitles");
      setRecentBlogsTitle(res.data);
    };
    fetchRecentBlogsTitle();
  }, []);

  return (
    <div className="categoriesPage">
      <div className="cpWrapper">
        <Navbar />
        <div className="cpBeforeSplit">
          <div className="cpLeftCon">
            <LeftBar />
          </div>
          <div className="cpCenterCon">
            {catBlogs.map((catBlog, i) => (
              <Blog key={i} index={i} catBlog={catBlog} />
            ))}
          </div>
          <div className="cpRightCon">
            {recentBlogsTitle.map((recentBlogTitle, i) => (
              <RightBar index={i} key={i} recentBlogTitle={recentBlogTitle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
