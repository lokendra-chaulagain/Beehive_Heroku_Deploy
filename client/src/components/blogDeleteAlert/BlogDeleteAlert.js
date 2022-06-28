import axios from "axios";
import React from "react";
import "./blogDeleteAlert.scss";

function BlogDeleteAlert({ setShowBlogDeleteAlert, id }) {
  
  //Delete blog
  const handleBlogDelete = async () => {
    try {
      await axios.delete(`/blogs/delete/${id}`);
      window.location.replace("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="blogDeleteAlertContainer">
      <span className="bareYouSure">Are you sure ?</span>
      <div className="bdacButton">
        <button className="bdacYes" onClick={handleBlogDelete}>
          Yes
        </button>
        <button
          className="bdacYes"
          onClick={() => setShowBlogDeleteAlert(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default BlogDeleteAlert;
