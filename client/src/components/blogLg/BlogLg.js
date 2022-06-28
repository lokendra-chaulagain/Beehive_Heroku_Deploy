import React, { useContext, useState } from "react";
import BlogDeleteAlert from "../blogDeleteAlert/BlogDeleteAlert";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./blogLg.scss";
import { AuthContext } from "../../context/authContext/AuthContext";

function BlogLg({ blog }) {
  const [showBlogDeleteAlert, setShowBlogDeleteAlert] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(blog);

  return (
    <div className="blogLg">
      <img src={blog.img} alt="" className="blogLgImg" />
      <div className="blogLgWrapper">
        <div className="blogLgDateAndTimeRead">
          {showBlogDeleteAlert && <BlogDeleteAlert id={blog._id} />}
          <span className="blogLgDate">{format(blog?.createdAt)}</span>
          <span className="blogLgTimeRead">{blog?.timeRead} min read</span>
          <span className="blogLgLocation">{blog?.location}</span>

          {user._id === blog?.userID && (
            <div className="blEditDeleteCon">
              <Link to={`/blogEdit/${blog._id}`} className="link">
                <button className="blogLgEdit blogLgEdit1">Edit</button>
              </Link>
              <button
                className="blogLgDelete blogLgEdit1"
                onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <span className="blogLgTitle">{blog?.title}</span>
        <span className="blogLgAuthor">
          <span className="lgauthor">Author</span> : {blog?.authorName}
        </span>
        <span className="blogDesc">{blog?.desc}</span>
      </div>
    </div>
  );
}

export default BlogLg;
