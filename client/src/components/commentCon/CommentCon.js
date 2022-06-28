import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import "./commentCon.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useAPI } from "../../context/userDetailContext";

function CommentCon({ setShowCommentCon, id }) {
  console.log(id);
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();
  console.log(currentUserDetail);

  //post comment on a post
  const [comment, setComment] = useState("");
  const newComment = {
    userID: user._id,
    postID: id,
    fullName: user.username,
    comment: comment,
    profilePic: currentUserDetail.profilePic,
  };

  const handleComment = async () => {
    try {
      await axios.post("/comments/create", newComment);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="commentContainer">
      <input
        type="text"
        className="commentInput"
        placeholder="Comment here..."
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="clearSendIcon">
        <ClearIcon
          className="commentSendIcon"
          onClick={() => setShowCommentCon(false)}
        />
        <SendIcon className="commentSendIcon" onClick={handleComment} />
      </div>
    </form>
  );
}

export default CommentCon;
