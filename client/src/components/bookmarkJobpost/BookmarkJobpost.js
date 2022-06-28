import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import "./bookmarkJobpost.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAPI } from "../../context/userDetailContext";

function BookmarkJobpost({ bookmarkJobpostId }) {
  const { currentUserDetail } = useAPI();

  //Fetching data from jobPost id
  const [jobPost, setJobPost] = useState({});
  useEffect(() => {
    const fetchJobPostData = async () => {
      try {
        const res = await axios.get(`/jobPosts/get/${bookmarkJobpostId}`);
        setJobPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobPostData();
  }, [bookmarkJobpostId]);

  //Bookmark remove
  const [removeBookmark, setRemoveBookmark] = useState(false);
  const handleRemoveBookmark = async (id) => {
    try {
      await axios.put(`/userDetails/bookmark/${id}`, {
        userDetailId: currentUserDetail?._id,
      });
      setRemoveBookmark(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="bookmarkJobpost">
      <img src={jobPost?.companyProfileImg} alt="" className="bjpjobCompanyLogo" />
      <div className="bjpInfoCon">
        <span className="bjpJobTitle">{jobPost?.position}</span>
        <span className="bjpPostTime">{format(jobPost?.createdAt)}</span>
        <span className="bjpCompanyAddress">{jobPost?.companyLocation}</span>
        <span className="bjpCompanyName">{jobPost?.companyName}</span>

        <div className="bjpjobPostDeleteSaveCon">
          <button
            className="bjpDelete"
            onClick={() => handleRemoveBookmark(jobPost?._id)}
          >
            remove
          </button>
          <Link to={`/jobPost/${jobPost?._id}`} className="link">
            <span className="bjpviewMore">ViewMore...</span>
          </Link>
        </div>
      </div>
      <hr className="bjpHr" />
      <button className="bjpfullTimeBut">Full Time</button>
    </div>
  );
}
export default BookmarkJobpost;
