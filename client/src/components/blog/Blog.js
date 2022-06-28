import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "timeago.js";
import "./blog.scss";
import BlogDeleteAlert from "../blogDeleteAlert/BlogDeleteAlert";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

function Blog({ blog, privateBlog, catBlog }) {
  const { user } = useContext(AuthContext);
  const [showBlogDeleteAlert, setShowBlogDeleteAlert] = useState(false);

  return (
    <>
      {blog ? (
        <div className="blog">
          <img src={blog.img} alt="" className="blogImg" />

          <div className="blogInsideCon">
            <div className="blogDateAndTimeRead">
              <span className="blogDate">{format(blog?.createdAt)}</span>
              <span className="blogTimeRead">{blog?.timeRead} min read</span>
            </div>

            <span
              className="blogTitle"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              {" "}
              <Link to={`/blogRead/${blog?._id}`} className="link">
                {" "}
                {blog?.title}{" "}
              </Link>{" "}
            </span>

            <div className="blogAuthorAndLocation">
              <span className="blogAuthor">
                <span className="author">Author</span> : {blog?.authorName}
              </span>
              <span className="blogLocation">{blog?.location} </span>
            </div>
            {/* <span className="blogDesc">{blog?.desc}</span> */}
            <hr className="blogHr" />

            <Link to={`/blogRead/${blog?._id}`} className="link">
              <span
                className="blogContinueReading"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Continue reading...
              </span>
            </Link>
            {showBlogDeleteAlert && (
              <BlogDeleteAlert
                id={blog?._id}
                setShowBlogDeleteAlert={setShowBlogDeleteAlert}
              />
            )}

            {user._id === blog.userID && (
              <div className="blogDeleteEditCon">
                <button
                  className="blogDelete blogDeleteEditBut"
                  onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
                >
                  <DeleteOutlineIcon className="blogDEIcon" />
                  Delete
                </button>

                <Link to={`/blogEdit/${blog?._id}`} className="link">
                  <button className="blogEdit blogDeleteEditBut">
                    <EditIcon className="blogDEIcon" />
                    Edit
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : privateBlog ? (
        <div className="blog">
          <img src={privateBlog.img} alt="" className="blogImg" />

          <div className="blogInsideCon">
            <div className="blogDateAndTimeRead">
              <span className="blogDate">{format(privateBlog?.createdAt)}</span>
              <span className="blogTimeRead">{privateBlog?.timeRead}</span>
            </div>
            <span className="blogTitle">{privateBlog?.title} </span>
            <div className="blogAuthorAndLocation">
              <span className="blogAuthor">
                <span className="author">Author</span> :{" "}
                {privateBlog?.authorName}
              </span>
              <span className="blogLocation">{privateBlog?.location} </span>
            </div>
            {/* <span className="blogDesc">{privateBlog?.desc}</span> */}
            <hr className="blogHr" />
            <Link to={`/blogRead/${privateBlog?._id}`} className="link">
              <span className="blogContinueReading">Continue reading...</span>
            </Link>
            {showBlogDeleteAlert && (
              <BlogDeleteAlert
                id={privateBlog?._id}
                setShowBlogDeleteAlert={setShowBlogDeleteAlert}
              />
            )}

            <div className="blogDeleteEditCon">
              <button
                className="blogDelete blogDeleteEditBut"
                onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
              >
                <DeleteOutlineIcon className="blogDEIcon" />
                Delete
              </button>

              <Link to={`/blogEdit/${privateBlog?._id}`} className="link">
                <button className="blogEdit blogDeleteEditBut">
                  <EditIcon className="blogDEIcon" />
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : catBlog ? (
        <div className="blog">
          <img src={catBlog.img} alt="" className="blogImg" />

          <div className="blogInsideCon">
            <div className="blogDateAndTimeRead">
              <span className="blogDate">{format(catBlog?.createdAt)}</span>
              <span className="blogTimeRead">{catBlog?.timeRead} min read</span>
            </div>
            <span className="blogTitle">{catBlog?.title} </span>
            <div className="blogAuthorAndLocation">
              <span className="blogAuthor">
                <span className="author">Author</span> : {catBlog?.authorName}
              </span>
              <span className="blogLocation">{catBlog?.location} </span>
            </div>
            {/* <span className="blogDesc">{catBlog?.desc}</span> */}
            <hr className="blogHr" />
            <Link to={`/blogRead/${catBlog?._id}`} className="link">
              <span className="blogContinueReading">Continue reading...</span>
            </Link>
            {showBlogDeleteAlert && (
              <BlogDeleteAlert
                id={catBlog?._id}
                setShowBlogDeleteAlert={setShowBlogDeleteAlert}
              />
            )}

            <div className="blogDeleteEditCon">
              <button
                className="blogDelete blogDeleteEditBut"
                onClick={() => setShowBlogDeleteAlert(!showBlogDeleteAlert)}
              >
                <DeleteOutlineIcon className="blogDEIcon" />
                Delete
              </button>

              <Link to={`/blogEdit/${catBlog?._id}`} className="link">
                <button className="blogEdit blogDeleteEditBut">
                  <EditIcon className="blogDEIcon" />
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Blog;
