import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useAPI } from "../../context/userDetailContext";
import "./profileInfoEditCon.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileInfoEditCon() {
  const { user } = useContext(AuthContext);
  const { currentUserDetail } = useAPI();

  // const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const [homeTown, setHomeTown] = useState(currentUserDetail?.homeTown);
  const [currentlyLiving, setCurrentlyLiving] = useState(
    currentUserDetail?.currentlyLiving
  );

  const [currentJob1Position, setCurrentJob1Position] = useState(
    currentUserDetail?.currentJob1Position
  );
  const [currentJob1Company, setCurrentJob1Company] = useState(
    currentUserDetail?.currentJob1Company
  );

  const [currentJob2Position, setCurrentJob2Position] = useState(
    currentUserDetail?.currentJob2Position
  );
  const [currentJob2Company, setCurrentJob2Company] = useState(
    currentUserDetail?.currentJob2Company
  );

  const [founderOf1, setFounderOf1] = useState(currentUserDetail?.founderOf1);
  const [founderOf2, setFounderOf2] = useState(currentUserDetail?.founderOf2);
  const [currentStudyingCourse, setCurrentStudyingCourse] = useState(
    currentUserDetail?.currentStudyingCourse
  );
  const [currentStudyingUniversity, setCurrentStudyingUniversity] = useState(
    currentUserDetail?.currentStudyingUniversity
  );

  const [plus2CompletedCollege, setPlus2CompletedCollege] = useState(
    currentUserDetail?.plus2CompletedCollege
  );
  const [plus2CompletedCollegeLocation, setPlus2CompletedCollegeLocation] =
    useState(currentUserDetail?.plus2CompletedCollegeLocation);

  const [sEECompletedCollege, setSEECompletedCollege] = useState(
    currentUserDetail?.sEECompletedCollege
  );
  const [sEECompletedSchoolLocation, setSEECompletedSchoolLocation] = useState(
    currentUserDetail?.sEECompletedSchoolLocation
  );
  const [pastJob1Position, setPastJob1Position] = useState(
    currentUserDetail?.pastJob1Position
  );
  const [pastJob1Company, setPastJob1Company] = useState(
    currentUserDetail?.pastJob1Company
  );
  const [pastJob2Position, setPastJob2Position] = useState(
    currentUserDetail?.pastJob2Position
  );
  const [pastJob2Company, setPastJob2Company] = useState(
    currentUserDetail?.pastJob2Company
  );
  const [relationShipStatus, setRelationShipStatus] = useState(
    currentUserDetail?.relationShipStatus
  );

  const [githubLink, setGithubLink] = useState(currentUserDetail?.githubLink);
  const [linkedinLink, setLinkedinLink] = useState(
    currentUserDetail?.linkedinLink
  );

  const [twitterLink, setTwitterLink] = useState(
    currentUserDetail?.twitterLink
  );

  const [instagramLink, setInstagramLink] = useState(
    currentUserDetail?.instagramLink
  );

  const [bio, setBio] = useState(currentUserDetail?.bio);

  const [websiteLink, setWebsiteLink] = useState(
    currentUserDetail?.websiteLink
  );
  const [editing, setEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditing(true);
    try {
      await axios.put(`/userDetails/update/${currentUserDetail._id}`, {
        homeTown,
        bio,
        currentlyLiving,
        currentJob1Position,
        currentJob1Company,
        currentJob2Position,
        currentJob2Company,
        founderOf1,
        founderOf2,
        currentStudyingCourse,
        currentStudyingUniversity,
        plus2CompletedCollege,
        plus2CompletedCollegeLocation,
        sEECompletedCollege,
        sEECompletedSchoolLocation,
        pastJob1Position,
        pastJob1Company,
        pastJob2Position,
        pastJob2Company,
        relationShipStatus,
        githubLink,
        linkedinLink,
        twitterLink,
        instagramLink,
        websiteLink,
      });
      navigate(-1);
      toast.success("Profile Updated Successfully", { theme: "colored" });
    } catch (error) {
      console.log(error);
    }
  };

  //Update profilePic
  const [file1, setFile1] = useState(null);
  const [uploading1, setUploading1] = useState(false);

  const handlePPSave = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file1?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file1);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading1(true);
        console.log("Upload is " + progress + "% done");
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            axios.put(`userDetails/update/${currentUserDetail?._id}`, {
              profilePic: downloadURL,
            });
            navigate(-1);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            toast.success("Profile Picture Updated", { theme: "colored" });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  //Update coverPic
  const [file2, setFile2] = useState(null);
  const [uploading2, setUploading2] = useState(false);
  const handleCPSave = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file2?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading2(true);
        console.log("Upload is " + progress + "% done");
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            axios.put(`userDetails/update/${currentUserDetail._id}`, {
              coverPic: downloadURL,
            });
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            navigate(-1);
            toast.success("Cover Picture Updated", { theme: "colored" });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <div className="profileInfoEditCon1">
      <div className="profileCoverChangeCon">
        <div className="ppChangeWrapper">
          <span className="profileChange">Profile Picture</span>
          <label htmlFor="profile" className="profileChangeCon">
            {file1 ? (
              <img
                src={URL.createObjectURL(file1)}
                alt=""
                className="ppChange"
              />
            ) : (
              <img
                src={currentUserDetail?.profilePic}
                alt=""
                className="ppChange"
              />
            )}
            <input
              style={{ display: "none" }}
              type="file"
              id="profile"
              accept=".png,.jpeg.jpg"
              onChange={(e) => setFile1(e.target.files[0])}
            />
            <AddPhotoAlternateIcon className="ppChangeIcon" />
          </label>
          <button className="ppSave" onClick={handlePPSave}  >
            {uploading1 ? "Saving..." : "Save"}
          </button>
        </div>

        <div className="cpChangeWrapper">
          <span className="coverChange">Cover Picture</span>

          <label htmlFor="cover" className="coverChangeCon">
            {file2 ? (
              <img
                src={URL.createObjectURL(file2)}
                alt=""
                className="cpChange"
              />
            ) : (
              <img
                src={currentUserDetail?.coverPic}
                alt=""
                className="cpChange"
              />
            )}
            <input
              style={{ display: "none" }}
              type="file"
              id="cover"
              accept=".png,.jpeg.jpg"
              onChange={(e) => setFile2(e.target.files[0])}
            />
            <AddPhotoAlternateIcon className="cpChangeIcon" />
          </label>
          <button className="cpSave" onClick={handleCPSave}>
            {uploading2 ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <form className="profileInfoEditCon" onSubmit={handleSubmit}>
        <div className="piecItem">
          <span className="piecTitle">Bio</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Add your bio here"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Currently Working Role</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentJob1Position}
            onChange={(e) => setCurrentJob1Position(e.target.value)}
            placeholder="Web Developer"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Currently working At</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentJob1Company}
            onChange={(e) => setCurrentJob1Company(e.target.value)}
            placeholder="ABC Company"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Currently working Role</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentJob2Position}
            onChange={(e) => setCurrentJob2Position(e.target.value)}
            placeholder="App Developer"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Currently working At</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentJob2Company}
            onChange={(e) => setCurrentJob2Company(e.target.value)}
            placeholder="XYZ Company"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Founder Of</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.founderOf1}
            onChange={(e) => setFounderOf1(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Co-founder Of</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.founderOf2}
            onChange={(e) => setFounderOf2(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Past Job Role</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.pastJob1Position}
            onChange={(e) => setPastJob1Position(e.target.value)}
            placeholder="Web Developer"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Past Job Role At</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.pastJob1Company}
            onChange={(e) => setPastJob1Company(e.target.value)}
            placeholder="ABC Company"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Past Job Role</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.pastJob2Position}
            onChange={(e) => setPastJob2Position(e.target.value)}
            placeholder="App Developer"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Past Job Role At</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.pastJob2Company}
            onChange={(e) => setPastJob2Company(e.target.value)}
            placeholder="XYZ Company"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Currently Studying Course Name</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentStudyingCourse}
            onChange={(e) => setCurrentStudyingCourse(e.target.value)}
            placeholder=" Computer Science"
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">
            Currently Studying College/University
          </span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentStudyingUniversity}
            onChange={(e) => setCurrentStudyingUniversity(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">+2 Completed College </span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.plus2CompletedCollege}
            onChange={(e) => setPlus2CompletedCollege(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">+2 Completed College Location </span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.plus2CompletedCollegeLocation}
            onChange={(e) => setPlus2CompletedCollegeLocation(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">SEE Completed School</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.sEECompletedCollege}
            onChange={(e) => setSEECompletedCollege(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">SEE Completed School Location</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.sEECompletedSchoolLocation}
            onChange={(e) => setSEECompletedSchoolLocation(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Lives In</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.currentlyLiving}
            onChange={(e) => setCurrentlyLiving(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">From</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.homeTown}
            onChange={(e) => setHomeTown(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">RelationShipStatus</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.relationShipStatus}
            onChange={(e) => setRelationShipStatus(e.target.value)}
          />
        </div>{" "}
        <div className="piecItem">
          <span className="piecTitle">GitHub Link</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Linkedin Link</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Twitter Link</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
          />
        </div>
        <div className="piecItem">
          <span className="piecTitle">Instagram Link</span>
          <input
            type="text"
            className="piecInput"
            defaultValue={currentUserDetail?.instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </div>
        {
          <div className="piecItem">
            <span className="piecTitle">Website Link</span>
            <input
              type="text"
              className="piecInput"
              defaultValue={currentUserDetail?.websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
            />
          </div>
        }
        <button className="pieSave" type="submit">
          {editing ? "Saving..." : "Save"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ProfileInfoEditCon;
