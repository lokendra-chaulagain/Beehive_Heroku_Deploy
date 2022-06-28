import React, { useContext, useState } from "react";
import { format } from "timeago.js";
import "./jobPost.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteAlert from "../deleteAlert/DeleteAlert";
import { useAPI } from "../../context/userDetailContext";
import { AuthContext } from "../../context/authContext/AuthContext";

function JobPost({ jobPost, privateJobPost }) {
  const { currentUserDetail } = useAPI();
  const { user } = useContext(AuthContext);

  //Bookmark
  const [bookmarked, setBookmarked] = useState(false);
  const handleBookmark = async (id) => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
        userDetailId: currentUserDetail?._id,
      });
      setBookmarked(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Open Close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      {jobPost ? (
        <div className="jobPost">
          <img
            src={jobPost?.companyProfileImg}
            alt=""
            className="jobCompanyLogo"
          />
          <div className="jpInfoCon">
            <span className="jpJobTitle">{jobPost?.position}</span>
            <span className="jpPostTime">{format(jobPost?.createdAt)}</span>
            <span className="jpCompanyAddress">{jobPost?.companyLocation}</span>
            <span className="jpCompanyName">{jobPost?.companyName}</span>

            <div className="jobPostDeleteSaveCon">
              {user._id === jobPost.userID && (
                <button
                  className="jpDelete"
                  onClick={() => setShowDeleteAlert(!showDeleteAlert)}
                >
                  Delete
                </button>
              )}
              <button
                className="jpDelete"
                onClick={() => handleBookmark(jobPost?._id)}
              >
                {currentUserDetail?.jobPostsBookmark?.includes(jobPost?._id)
                  ? "Saved"
                  : "Save"}
              </button>

              <Link to={`/jobPost/${jobPost?._id}`} className="link">
                <span className="viewMore">ViewMore...</span>
              </Link>
            </div>
          </div>
          <hr className="jpHr" />
          {showDeleteAlert && (
            <DeleteAlert
              setShowDeleteAlert={setShowDeleteAlert}
              id={jobPost?._id}
            />
          )}
          <button className="fullTimeBut">
            {jobPost?.jobType === "Full Time"
              ? "Full Time"
              : jobPost?.jobType === "Part Time"
              ? "Part Time"
              : "Contract"}
          </button>
        </div>
      ) : privateJobPost ? (
        <div className="jobPost">
          <img src={privateJobPost?.companyProfileImg} alt="" className="jobCompanyLogo" />
          <div className="jpInfoCon">
            <span className="jpJobTitle">{privateJobPost?.position}</span>
            <span className="jpPostTime">
              {format(privateJobPost?.createdAt)}
            </span>
            <span className="jpCompanyAddress">{privateJobPost?.location}</span>
            <span className="jpCompanyName">{privateJobPost?.companyName}</span>

            <div className="jobPostDeleteSaveCon">
              <button
                className="jpDelete"
                onClick={() => setShowDeleteAlert(!showDeleteAlert)}
              >
                Delete
              </button>

              <button
                className="jpDelete"
                onClick={() => handleBookmark(privateJobPost?._id)}
              >
                {currentUserDetail?.jobPostsBookmark?.includes(
                  privateJobPost?._id
                )
                  ? "Saved"
                  : "Save"}
              </button>

              <Link to={`/jobPost/${privateJobPost?._id}`} className="link">
                <span className="viewMore">ViewMore...</span>
              </Link>
            </div>
          </div>
          <hr className="jpHr" />
          {showDeleteAlert && (
            <DeleteAlert
              setShowDeleteAlert={setShowDeleteAlert}
              id={privateJobPost?._id}
            />
          )}
          <button className="fullTimeBut">
            {privateJobPost?.jobType === "Full Time"
              ? "Full Time"
              : privateJobPost?.jobType === "Part Time"
              ? "Part Time"
              : "Contract"}
          </button>
        </div>
      ) : null}
    </>
  );
}
export default JobPost;
