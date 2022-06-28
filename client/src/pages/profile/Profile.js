import React, { useEffect } from "react";
import FeedPostCreate from "../../components/feedPostCreate/FeedPostCreate";
import Navbar from "../../components/navbar/Navbar";
import FeedPost from "../../components/feedPost/FeedPost";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profile.scss";
import JobPost from "../../components/jobPost/JobPost";
import Blog from "../../components/blog/Blog";

function Profile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //userDetail from path id
  const [userDetail, setUserDetail] = React.useState({});
  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await axios.post("/userDetails/getByUserID", {
        userID: path,
      });
      setUserDetail(res.data[0]);
    };
    fetchUserDetail();
  }, [path]);
  console.log(userDetail);

  //all posts of a user from path id
  const [userKoPosts, setUserKoPosts] = React.useState([{}]);
  useEffect(() => {
    const fetchUserKoPosts = async () => {
      try {
        const res = await axios.post("/userPosts/getAllPostsOfAUser", {
          userID: path,
        });
        res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setUserKoPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserKoPosts();
  }, [path]);
  console.log(userKoPosts);

  //all jobPost of a user from path id
  const [userKoJobPosts, setUserKoJobPosts] = React.useState([{}]);
  useEffect(() => {
    const fetchUserKoJobPosts = async () => {
      try {
        const res = await axios.post("/jobPosts/getAllJobPostsOfAUser", {
          userID: path,
        });
        res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setUserKoJobPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserKoJobPosts();
  }, [path]);

  //all Blogs of a user from path id
  const [userKoBlogs, setUserKoBlogs] = React.useState([{}]);
  useEffect(() => {
    const fetchUserKoBlogs = async () => {
      try {
        const res = await axios.post("/blogs/getAllBlogsOfAUser", {
          userID: path,
        });
        res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setUserKoBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserKoBlogs();
  }, [path]);

  const [showFeedCreateCon, setShowFeedCreateCon] = React.useState(false);

  return (
    <div className="profilePage">
      <Navbar />
      <div className="ppWrapper">
        <div className="upCoverPicCon">
          <img src={userDetail?.coverPic} alt="" className="upCoverPic" />
          <img src={userDetail?.profilePic} alt="" className="upProfilePic" />
        </div>

        <div className="pNameProfessionCon">
          <span className="pName">{userDetail?.fullName}</span>
          <span className="pProfession">{userDetail?.profession}</span>
          <p className="bio">{userDetail?.bio}</p>
        </div>

        <div className="ppBeforeSplit">
          <div className="ppLeft">
            <span className="profileSpanTitle">
              FeedPost , JobPost , Blogs that you have created till now are here
              ! scroll down
            </span>
            <div
              className="upSmallWhatsOnYourMindCon"
              onClick={() => setShowFeedCreateCon(!showFeedCreateCon)}
            >
              <img
                src={userDetail?.profilePic}
                alt=""
                className="upTinyProfilePic"
              />
              <input
                type="text"
                className="upOnYourMindInput"
                placeholder={
                  "what's on your mind " + userDetail?.fullName + " ?"
                }
              />
            </div>

            <div className="feedPostCreateConWrapper">
              {showFeedCreateCon && (
                <FeedPostCreate setShowFeedCreateCon={setShowFeedCreateCon} />
              )}
            </div>

            {userKoPosts.map((privatePost, i) => (
              <FeedPost index={i} key={i} privatePost={privatePost} />
            ))}

            {userKoJobPosts.map((privateJobPost, i) => (
              <JobPost index={i} key={i} privateJobPost={privateJobPost} />
            ))}

            {userKoBlogs.map((privateBlog, i) => (
              <Blog key={i} index={i} privateBlog={privateBlog} />
            ))}
          </div>

          <div className="ppRight">
            <ProfileRightBar userDetail={userDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
