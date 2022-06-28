import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./allComments.scss";
import { Link } from "react-router-dom";

function AllComments({ setOpenAllCommentCon, comments, privateComments }) {
  console.log(comments);
  return (
    <>
      {comments ? (
        <div className="allCommentsContainer">
          <h3 className="allComments">
            All Comments ({comments.length})
            <ClearIcon
              className="allCommentClearIcon"
              onClick={() => setOpenAllCommentCon(false)}
            />
          </h3>

          {comments.map((comment, i) => (
            <Link key={i} to={`/profile/${comment?.userID}`} className="link">
              <span index={i} className="comment1">
                <img src={comment?.profilePic} alt="" className="commentImg" />
                <span className="fullNameSpan"> {comment?.fullName}</span>
              </span>
              <span className="acViewProfile">{comment?.comment}</span>
              <hr className="acHr" />
            </Link>
          ))}
        </div>
      ) : privateComments ? (
        <div className="allCommentsContainer">
          <h3 className="allComments">
            All Comments ({privateComments.length})
            <ClearIcon
              className="allCommentClearIcon"
              onClick={() => setOpenAllCommentCon(false)}
            />
          </h3>

          {privateComments.map((commentprivate, i) => (
            <Link
              key={i}
              to={`/profile/${commentprivate.userID}`}
              className="link"
            >
              <span index={i} className="comment1">
                <img
                  src={commentprivate?.profilePic}
                  alt=""
                  className="commentImg"
                />
                {commentprivate?.fullName}
              </span>
              <span className="acViewProfile">{commentprivate?.comment}</span>
              <hr className="acHr" />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default AllComments;
