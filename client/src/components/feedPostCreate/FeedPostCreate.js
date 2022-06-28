import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import React, { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useAPI } from "../../context/userDetailContext";
import axios from "axios";
import app from "../../firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./feedPostCreate.scss";
import { toast } from "react-toastify";

function FeedPostCreate({ setShowFeedPostCreateCon, setShowFeedCreateCon }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();

  //Create UserFeed Post
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + "-" + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setUploading(true);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        toast.error("Error uploading file", { theme: "colored" });
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //new post
          const newPost = {
            userID: user._id,
            fullName: user?.username,
            profession: currentUserDetail?.profession,
            profilePic: currentUserDetail?.profilePic,
            desc,
            postImg: downloadURL,
          };
          try {
            axios.post("/userPosts/create", newPost);
            window.location.reload();
            toast.success("Post Created Successfully", { theme: "colored" });
          } catch (error) {
            console.log(error);
          }
          setUploading(false);
        });
      }
    );
  };

  return (
    <form className="feedPostCreate" onSubmit={handleSubmit}>
      {path ? (
        <div className="fpcRow1">
          <div
            className="fpcRow1IconAndBackTxt"
            onClick={() => setShowFeedCreateCon(false)}
          >
            <ArrowBackIcon className="fpcRow1Icon" />
            <span className="fpcBack">Back</span>
          </div>
          <button className="fpcPost">Post</button>
        </div>
      ) : (
        <div className="fpcRow1">
          <div
            className="fpcRow1IconAndBackTxt"
            onClick={() => setShowFeedPostCreateCon(false)}
          >
            <ArrowBackIcon className="fpcRow1Icon" />
            <span className="fpcBack">Back</span>
          </div>
          <button className="fpcPost">Post</button>
        </div>
      )}

      <hr className="fpcHr" />

      <div className="fpcRow2">
        <img
          src={currentUserDetail?.profilePic}
          alt=""
          className="fpcProfilePic"
        />
        <span className="fpcUsername">{currentUserDetail?.fullName}</span>
      </div>

      <div className="fpcwhatsOnMindAndSelectedItemCon">
        <textarea
          type="text"
          className="fpcwhatsOnMind"
          placeholder={
            "what's on your mind " + currentUserDetail?.fullName + " ?"
          }
          onChange={(e) => setDesc(e.target.value)}
        />

        {file ? (
          <img
            src={URL.createObjectURL(file)}
            className="fpcSelectedItemCon"
            alt=""
          />
        ) : (
          <img src="" className="fpcSelectedItemCon" alt="" />
        )}
      </div>

      <label className="fpcImgVideoInput" htmlFor="fileInput1">
        <PhotoSizeSelectActualOutlinedIcon className="fpcImgIcon" />
        <span className="fpcSelectImgTxt">Select Image</span>
      </label>
      <input
        type="file"
        id="fileInput1"
        style={{ display: " none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="fpcPostBut" type="submit">
        {uploading ? "Posting..." : "Post"}
      </button>
    </form>
  );
}

export default FeedPostCreate;
