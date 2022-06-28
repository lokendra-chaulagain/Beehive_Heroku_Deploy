import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./bookmark.scss";
import RightBar from "../../components/rightBar/RightBar";
import { useAPI } from "../../context/userDetailContext";
import BookmarkJobpost from "../../components/bookmarkJobpost/BookmarkJobpost";
import axios from "axios";

function Bookmark() {
  //currentUserDetail
  const { currentUserDetail } = useAPI();

  //Get all bookmark jobPostIId of currentUser
  const [bookmarkJobpostIds, setBookmarkJobpostIds] = useState([]);
  useEffect(() => {
    const fetchAllJobPostBookmarkIds = async () => {
      try {
        const res = await axios.get(
          `/userDetails/getAllBookmarks/${currentUserDetail._id}`
        );
        setBookmarkJobpostIds(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobPostBookmarkIds();
  }, [currentUserDetail?._id]);

  return (
    <div className="bookmarkPage">
      <div className="bpWrapper">
        <Navbar />
        <div className="bpBeforeSplit">
          <div className="bpLeftCon">
            <LeftBar />
          </div>

          <div className="bpCenterCon">
            {currentUserDetail?.jobPostsBookmark?.length === 0 && (
              <span className="EmptyBookmark">
                Yoy haven't Bookmarked any Job Post yet !
              </span>
            )}
            {bookmarkJobpostIds.map((bookmarkJobpostId, i) => (
              <BookmarkJobpost
                key={i}
                index={i}
                bookmarkJobpostId={bookmarkJobpostId}
              />
            ))}
          </div>

          <div className="bpRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
