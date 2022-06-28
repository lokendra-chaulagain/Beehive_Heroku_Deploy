import React, { useState } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import axios from "axios";
import "./blogEditCon.scss";

function BlogEditCon({ blog }) {
  console.log(blog);

  //Edit Blog
  const [edtTitle, setEdtTitle] = useState(blog.title);
  const [editDesc, setEditDesc] = useState(blog.desc);
  const [editLocation, setEditLocation] = useState(blog.location);
  const [editTimeRead, setEditTimeRead] = useState(blog.timeRead);
  const [editCategory, setEdtCategory] = useState(blog.category);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/blogs/update/${blog._id}`, {
        edtTitle,
        editDesc,
        editLocation,
        editTimeRead,
        editCategory,
      });
      // navigate("/blogs");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bEriteRightSide">
      <form className="bEWholeContainer" onSubmit={handleUpdate}>
        <span className="bETitle">
          Share Ideas And Experiences through Blog !
        </span>
        <hr className="bEHr" />
        <img src={blog.img} alt="" className="bEImg" />

        <label className="brImgIconAndTxt" htmlFor="fileInput">
          <ImageSearchOutlinedIcon className="bEImgIcon" />
          <span className="bESelectImgTxt">Select Image</span>
        </label>
        <input type="file" id="fileInput" style={{ display: " none" }} />

        <div className="bEColumnCon">
          <span className="lwBlogTitle  lwBlogTitle1 ">Blog Title</span>
          <input
            type="text"
            className="bEBlogTitleInput  bEBlogTitleInput1"
            defaultValue={blog.title}
            onChange={(e) => setEdtTitle(e.target.value)}
          />
          <span className="lwBlogDesc lwBlogTitle1">Blog Description</span>
          <textarea
            type="text"
            className="bEBlogDescInput bEBlogTitleInput1"
            defaultValue={blog.desc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <label className="lwBlogCategory lwBlogTitle1">Location</label>
          <input
            type="text"
            className="bEBlogCategoryInput bEBlogTitleInput1"
            defaultValue={blog.location}
            onChange={(e) => setEditLocation(e.target.value)}
          />
          <label className="lwBlogCategory lwBlogTitle1">Author</label>
          <input
            type="text"
            className="bEBlogCategoryInput bEBlogTitleInput1"
            value={blog.authorName}
          />
          {/* <label className="lwBlogCategory lwBlogTitle1">Created Date</label>
          <input
            type="text"
            className="bEBlogCategoryInput bEBlogTitleInput1"
            value={format(blog.createdAt)}
          /> */}
          {/* == */}
          <span className="  lwBlogCategory lwBlogTitle1">Category</span>{" "}
          <select
            className="bEBlogCategoryInput bEBlogTitleInput1"
            onChange={(e) => setEdtCategory(e.target.value)}
            name="contractType"
          >
            <option disabled selected={true}>
              Select
            </option>
            <option value="programming">Programming</option>
            <option value="dataScience">Data science</option>
            <option value="cloudComputing">Cloud Computing</option>
            <option value="machineLearning">Machine Learning</option>
            <option value="webDevelopment">Web Development</option>
            <option value="techNews">Tech News</option>
          </select>
          {/* == */}
          <label className="lwBlogTimeRead lwBlogTitle1">
            Time to Read (in minute)
          </label>
          <input
            type="number"
            min={1}
            max={60}
            className="bEBlogTimeReadInput bEBlogTitleInput1"
            defaultValue={blog.timeRead}
            onChange={(e) => setEditTimeRead(e.target.value)}
          />
          <button className="bESubmmitBut" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogEditCon;
