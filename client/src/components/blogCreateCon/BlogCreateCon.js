import React, { useContext, useState } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { AuthContext } from "../../context/authContext/AuthContext";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./blogCreateCon.scss";

function BlogCreateCon() {
  const { user } = useContext(AuthContext);

  const notifySuccess = (msg) => toast.success(msg, { theme: "colored" });
  const notifyFailure = (msg) => toast.error(msg, { theme: "colored" });

  //Create a blog
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
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
        notifyFailure("Upload failed");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            axios.post("/blogs/create", {
              title,
              desc,
              timeRead,
              location,
              userID: user._id,
              authorName: user.username,
              category,
              img: downloadURL,
            });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
            notifySuccess("Blog created successfully");
          } catch (error) {
            notifyFailure("Error creating blog");
          }
        });
      }
    );
  };
  // console.log(category)

  setTimeout(() => {
    const box = document.getElementById("success");
    box.style.display = "none";
  }, 5000);

  return (
    <div className="blogCreateContainer">
      <form className="bccWholeContainer" onSubmit={handleSubmit}>
        <span className="bccTitle">
          Share Ideas And Experiences through Blog !
        </span>
        <hr className="bccHr" />
        {file ? (
          <img src={URL.createObjectURL(file)} alt="" className="bccImg" />
        ) : (
          <img src="" alt="" className="bccImg" />
        )}

        <label className="bccImgIconAndTxt" htmlFor="fileInput">
          <ImageSearchOutlinedIcon className="bccImgIcon" />
          <span className="bccSelectImgTxt">
            Select Image {!file && <span className="bccStar">*</span>}{" "}
          </span>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: " none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="bccColumnCon">
          <span className="bccBlogTitle  bccBlogTitle1  ">
            Blog Title {!title && <span className="bccStar">*</span>}
          </span>
          <textarea
            type="text"
            maxLength={150}
            minLength={10}
            className="bccBlogTitleInput  bccBlogTitleInput1 bccbt1"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="bccBlogDesc bccBlogTitle1">
            Blog Description {!desc && <span className="bccStar">*</span>}
          </span>
          <textarea
            type="text"
            maxLength={2000}
            minLength={10}
            className="bccBlogDescInput bEBlogTitleInput1"
            onChange={(e) => setDesc(e.target.value)}
          />
          <label className="bccBlogCategory bccBlogTitle1">
            Location {!location && <span className="bccStar">*</span>}
          </label>
          <input
            type="text"
            max={30}
            min={6}
            className="bccBlogCategoryInput bccBlogTitleInput1"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="bccBlogCategory bccBlogTitle1">Author</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
            value={user.username}
          />
          {/* == */}
          <span className="  bccBlogTitle1">
            Category <span className="bccStar">*</span>
          </span>{" "}
          <select
            className="bccBlogTitleInput1"
            onChange={(e) => setCategory(e.target.value)}
            name="contractType"
          >
            <option disabled selected={true}>
              Select
            </option>
            <option value="programming">Programming</option>
            <option value="dataScience">Data science</option>
            <option value="cloudComputing">Cloud Computing</option>
            <option value="machineLearning">Machine Learning</option>
            <option value="webDevelopment">Web Development</option>
            <option value="techNews">Tech News</option>
          </select>
          {/* == */}
          <label className="bccBlogTimeRead bccBlogTitle1">
            Time to Read (in minute){" "}
            {!timeRead && <span className="bccStar">*</span>}
          </label>
          <input
            type="number"
            min={1}
            max={20}
            className="bccBlogTimeReadInput bccBlogTitleInput1"
            onChange={(e) => setTimeRead(e.target.value)}
          />
          <button className="bccSubmmitBut" type="submit">
            {uploading ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default BlogCreateCon;
