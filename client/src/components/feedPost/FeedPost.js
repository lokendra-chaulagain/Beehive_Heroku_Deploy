import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import DeleteSaveCon from "../deleteSaveCon/DeleteSaveCon";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import CommentCon from "../commentCon/CommentCon";
import AllComments from "../allComments/AllComments";
import { format } from "timeago.js";
import "./feedPost.scss";
import axios from "axios";

function FeedPost({ post, privatePost }) {
  const { user } = useContext(AuthContext);
  const [showDeleteSaveCon, setShowDeleteSaveCon] = useState(false);
  const [showCommentCon, setShowCommentCon] = useState(false);
  const [openAllCommentCon, setOpenAllCommentCon] = useState(false);

  //Like Dislike feedPost
  const [postLiked, setPostLiked] = useState(false);
  const handleLike = async (id) => {
    try {
      const res = await axios.put(`/userPosts/like/${id}`, {
        userId: user._id,
      });
      setPostLiked(true);
      window.location.reload();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Like Dislike PrivatePost
  const [liked, setLiked] = useState(false);
  const handleLikeDislike = async (id) => {
    try {
      const res = await axios.put(`/userPosts/like/${id}`, {
        userId: user?._id,
      });
      setLiked(true);
      window.location.reload();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Fetching comments of a feedPost
  const [comments, setComments] = useState([{}]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.post("/comments/getComments", {
        postID: post?._id,
      });
      setComments(res.data);
    };
    fetchComments();
  }, [post]);

  //Fetch comments of a privatePost
  const [privateComments, setPrivateComments] = useState([{}]);
  useEffect(() => {
    const fetchPrivateComments = async () => {
      const res = await axios.post("/comments/getComments", {
        postID: privatePost?._id,
      });
      setPrivateComments(res.data);
    };
    fetchPrivateComments();
  }, [privatePost]);

  return (
    <>
      {post ? (
        <div className="feedPost">
          <div className="fpRow1">
            <Link to={`/profile/${post?.userID}`} className="link">
              <img src={post.profilePic} alt="" className="fpProfilePic" />
            </Link>
            <div
              className="fpProfileInfoColumn"
              onClick={() => setShowDeleteSaveCon(false)}
            >
              <span className="fpUsername">{post?.fullName}</span>
              <span className="fpProfession">{post?.profession}</span>
              <span className="fpTime">{format(post?.createdAt)}</span>
            </div>
            <div
              className="emptyDiv1"
              onClick={() => setShowDeleteSaveCon(false)}
            ></div>

            <div className="dltsveWrapper">
              {showDeleteSaveCon && <DeleteSaveCon postId={post?._id} />}
            </div>
            <div
              className="fpMoreIconColumn"
              onClick={() => setShowDeleteSaveCon(!showDeleteSaveCon)}
            >
              <MoreVertOutlinedIcon />
            </div>
          </div>

          <span className="fpDesc" onClick={() => setShowDeleteSaveCon(false)}>
            {post?.desc}
          </span>
          <img
            src={post?.postImg}
            onError={(event) => (event.target.style.display = "none")}
            alt=""
            className="fpPostImg"
            onClick={() => setShowDeleteSaveCon(false)}
          />

          <hr className="fpHr" />
          <div className="commentConWrapper2">
            {showCommentCon && (
              <CommentCon setShowCommentCon={setShowCommentCon} id={post._id} />
            )}
          </div>

          <div className="allCommentWrapper">
            {openAllCommentCon && (
              <AllComments
                setOpenAllCommentCon={setOpenAllCommentCon}
                comments={comments}
              />
            )}
          </div>

          <div className="fpIconsRow">
            <div className="fpLikeDislikeIconWrapper">
              <div className="fpIconsItemColumn">
                <ThumbUpOutlined
                  className="fpIconsItemIcon"
                  onClick={() => handleLike(post._id)}
                />
                <span className="fpIconsItemTxt">
                  {" "}
                  {post?.likes?.length} Likes
                </span>
              </div>
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setShowCommentCon(!showCommentCon)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">comments</span>
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setOpenAllCommentCon(!openAllCommentCon)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">
                Total {comments.length} comments
              </span>
            </div>
          </div>
        </div>
      ) : privatePost ? (
        <div className="feedPost">
          <div className="fpRow1">
            <Link to={`/profile/${privatePost?.userID}`} className="link">
              <img src={privatePost.profilePic} alt="" className="fpProfilePic" />
            </Link>
            <div className="fpProfileInfoColumn">
              <span className="fpUsername">{privatePost?.fullName}</span>
              <span className="fpProfession">{privatePost?.profession}</span>
              <span className="fpTime">{format(privatePost?.createdAt)}</span>
            </div>

            <div className="dltsveWrapper">
              {showDeleteSaveCon && <DeleteSaveCon postId={privatePost?._id} />}
            </div>

            <div
              className="emptyDiv1"
              onClick={() => setShowDeleteSaveCon(false)}
            ></div>

            <div
              className="fpMoreIconColumn"
              onClick={() => setShowDeleteSaveCon(!showDeleteSaveCon)}
            >
              <MoreVertOutlinedIcon />
            </div>
          </div>

          <span className="fpDesc" onClick={() => setShowDeleteSaveCon(false)}>
            {privatePost?.desc}
          </span>
          <img
            src={privatePost.postImg}
            alt=""
            className="fpPostImg"
            onClick={() => setShowDeleteSaveCon(false)}
          />
          <hr className="fpHr" />

          {/* post comment */}
          {showCommentCon && (
            <CommentCon
              setShowCommentCon={setShowCommentCon}
              id={privatePost?._id}
            />
          )}

          {/* all comments */}
          <div className="allCommentWrapper">
            {openAllCommentCon && (
              <AllComments
                setOpenAllCommentCon={setOpenAllCommentCon}
                privateComments={privateComments}
              />
            )}
          </div>

          <div
            className="fpIconsRow"
            onClick={() => setShowDeleteSaveCon(false)}
          >
            <div className="fpLikeDislikeIconWrapper">
              <div
                className="fpIconsItemColumn"
                onClick={() => handleLikeDislike(privatePost?._id)}
              >
                <ThumbUpOutlined className="fpIconsItemIcon" />
                <span className="fpIconsItemTxt">
                  {" "}
                  {privatePost?.likes?.length} Likes
                </span>
              </div>
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setShowCommentCon(!showCommentCon)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">comments</span>
            </div>

            <div
              className="fpIconsItemColumn"
              onClick={() => setOpenAllCommentCon(!openAllCommentCon)}
            >
              <ChatBubbleOutlineOutlinedIcon className="fpIconsItemIcon" />
              <span className="fpIconsItemTxt">
                Total {privateComments.length} comments
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FeedPost;
