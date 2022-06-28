import React, { useEffect, useState } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { useLocation } from "react-router-dom";
import axios from "axios";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./feedPostEditCon.scss";

function FeedPostEditCon() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //Fetch data from URL id
  const [postData, setPostData] = React.useState({});
  useEffect(() => {
    const fetchPostData = async () => {
      const res = await axios.get(`/userPosts/get/${path}`);
      setPostData(res.data);
    };
    fetchPostData();
  }, [path]);

  //Edit feedPost
  const [newDesc, setNewDesc] = React.useState(postData.desc);
  const [file, setFile] = useState(postData.postImg);
  const [uploading, setUploading] = useState(false);
  const handleEditSubmit = async (e) => {
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
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //new post
          try {
            axios.put(`/userPosts/update/${path}`, {
              desc: newDesc,
              postImg: downloadURL,
            });
            window.location.replace("/");
          } catch (error) {
            console.log(error);
          }
          // setUploading(false);
        });
      }
    );
  };

  return (
    <form className="feedPostEditContainer" onSubmit={handleEditSubmit}>
      <span className="fpecTitle">Edit your FeedPost here !</span>
      <hr className="fpecHr" />
      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="fpecImg" />
      ) : (
        <img src={postData.postImg} alt="" className="fpecImg" />
      )}

      <label className="fpecImgIconAndTxt" htmlFor="fileInput">
        <ImageSearchOutlinedIcon className="fpecImgIcon" />
        <span className="fpecSelectImgTxt">Select Image</span>
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: " none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <div className="fpecColumnCon">
        <span className="fpecBlogTitle ">Post Description</span>
        <input
          type="text"
          className="fpecBlogTitleInput  "
          defaultValue={postData.desc}
          onChange={(e) => setNewDesc(e.target.value)}
        />

        <button className="fpecSubmmitBut" type="submit">
         {uploading ? "Saving" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default FeedPostEditCon;
