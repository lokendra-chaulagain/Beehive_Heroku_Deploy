import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import RightBar from "../../components/rightBar/RightBar";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import "./jobPostCreate.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobSearchFeed() {
  const { user } = useContext(AuthContext);

  const notifySuccess = (msg) => toast.success(msg, { theme: "colored" });
  const notifyFailure = (msg) => toast.error(msg, { theme: "colored" });

  //Create Job Post
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [noOfEmployee, setNoOfEmployee] = useState("");
  const [contractType, setContractType] = useState("");
  const [jobType, setJobType] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  const [requirement1, setRequirement1] = useState("");
  const [requirement2, setRequirement2] = useState("");
  const [requirement3, setRequirement3] = useState("");
  const [requirement4, setRequirement4] = useState("");
  const [requirement5, setRequirement5] = useState("");
  const [requirement6, setRequirement6] = useState("");
  const [requirement7, setRequirement7] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileError, setFileError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading(true);
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
      (error) => {
        notifyFailure("Something wrong with company image upload");
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            axios.post("jobPosts/create", {
              userID: user._id,
              position,
              companyName,
              companyLocation,
              salaryRange,
              companyType,
              noOfEmployee,
              contractType,
              jobType,
              aboutJob,
              aboutCompany,
              aboutRole,
              requirement1,
              requirement2,
              requirement3,
              requirement4,
              requirement5,
              requirement6,
              requirement7,
              file,
              companyProfileImg: downloadURL,
            });
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setTimeout(function () {
              window.location.reload();
            }, 2000);
            notifySuccess("Job Post Created Successfully");
          } catch (err) {
            notifyFailure("Error Creating Job Post");
            console.error(err.message);
          }
        });
      }
    );
  };

  return (
    <div className="jobPostCreate">
      <div className="jpcWrapper">
        <Navbar />
        <div className="jpcBeforeSplit">
          <div className="jpcLeftCon">
            <LeftBar />
          </div>

          <div className="jpcCenterCon">
            <div className="jpcHeader">This is header Title</div>

            <div className="jpcWholeContainer">
              <span className="jpcTitle">Post job requirements here!</span>
              <hr className="jpcHr" />
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="jpcImg"
                />
              ) : (
                <img src="/assets/cover.jpeg" alt="" className="jpcImg" />
              )}
              <label className="jpcIconAndTxt" htmlFor="fileInput">
                <ImageSearchOutlinedIcon className="jpcImgIcon" />
                <span className="jpcSelectImgTxt">
                  Select company logo Image{" "}
                  {!file && (
                    <span className="requiredTxt">(Image is required)</span>
                  )}
                </span>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: " none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />

              <form className="jpcColumnCon" onSubmit={handleSubmit}>
                {/* ========================== */}
                <span className="jpcCompanyName jpc">
                  Position {!position && <span className="jpcRequired">*</span>}{" "}
                </span>
                <input
                  type="text"
                  className="jpcCompanyNameInput jpcInput jpcInput2"
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="FullStack Developer"
                />
                {/* ========================== */}
                <span className="jpcCompanyName jpc">
                  Company Name{" "}
                  {!companyName && <span className="jpcRequired">*</span>}
                </span>
                <input
                  type="text"
                  className="jpcCompanyNameInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="ABC company"
                />
                {/* ===========================*/}
                <span className="jpcCompanyLocation jpc">
                  Company Location{" "}
                  {!companyLocation && <span className="jpcRequired">*</span>}
                </span>
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyLocation(e.target.value)}
                  placeholder="Bangalore"
                />
                {/* ========================== */}
                <span className="jpcNoOfEmployee jpc">
                  Salary Range{" "}
                  {!salaryRange && <span className="jpcRequired">*</span>}
                </span>{" "}
                <select
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setSalaryRange(e.target.value)}
                >
                  <option disabled selected={true}>
                    Select
                  </option>
                  <option value="5k-10k">5k-10k</option>
                  <option value="10k-15k">10k-15k</option>
                  <option value="15k-20k">15k-20k</option>
                  <option value="20k-30k">20k-30k</option>
                  <option value="30k-40k">30k-40k</option>
                  <option value="40k-50k">40k-50k</option>
                  <option value="50k-60k">50k-60k</option>
                  <option value="60k-70k">60k-70k</option>
                  <option value="70k-80k">70k-80k</option>
                  <option value="Negotiate">Negotiate</option>
                </select>
                {/* ====================== */}
                <span className="jpcCompanyLocation jpc">
                  Company Type
                  {!companyType && <span className="jpcRequired">*</span>}
                </span>{" "}
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyType(e.target.value)}
                  placeholder="WebApp and MobilApp Development"
                />
                {/* =======================*/}
                <span className="jpcNoOfEmployee jpc">
                  Required Number
                  {!noOfEmployee && <span className="jpcRequired">*</span>}
                </span>{" "}
                <select
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setNoOfEmployee(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">More than 10</option>
                </select>
                {/* ========================== */}
                {/* <span className="jpcCompanyLocation jpc">
                  Company Type
                 {<span className="jpcRequired">*</span>}</span>{" "}
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyType(e.target.value)}
                  placeholder="WebApp and MobilApp Development"
                /> */}
                {/* ========================== */}
                <span className="jpcNoOfEmployee jpc">
                  Contract Type{" "}
                  {!contractType && <span className="jpcRequired">*</span>}
                </span>{" "}
                <select
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setContractType(e.target.value)}
                  name="contractType"
                >
                  <option disabled selected={true}>
                    Select
                  </option>
                  <option value="Intern">Intern</option>
                  <option value="Junior">Junior</option>
                  <option value="Mid Senior">Mid Senior</option>
                  <option value="Senior">Senior</option>
                </select>
                {/* ========================== */}
                <span className="jpcNoOfEmployee jpc">
                  Job Type {!jobType && <span className="jpcRequired">*</span>}
                </span>{" "}
                <select
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option disabled selected={true}>
                    Select
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
                {/* ========================== */}
                <span className="jpcAboutTheJob jpc">
                  About The Job{" "}
                  {!aboutJob && <span className="jpcRequired">*</span>}
                </span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheJobInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutJob(e.target.value)}
                  placeholder="Describe about the job"
                />
                {/* ========================== */}
                <span className="jpcAboutTheCompany jpc">
                  About The Company
                  {!aboutCompany && <span className="jpcRequired">*</span>}
                </span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheCompanyInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutCompany(e.target.value)}
                  placeholder="Describe about the Company"
                />
                {/* ========================== */}
                <span className="jpcAboutTheRole jpc">
                  About The Role{" "}
                  {!aboutRole && <span className="jpcRequired">*</span>}
                </span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheRoleInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutRole(e.target.value)}
                  placeholder="Describe about the Role"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">
                  Requirement1{" "}
                  {!requirement1 && <span className="jpcRequired">*</span>}
                </span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement1(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">
                  Requirement2{" "}
                  {!requirement2 && <span className="jpcRequired">*</span>}
                </span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement2(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">
                  Requirement3{" "}
                  {!requirement3 && <span className="jpcRequired">*</span>}
                </span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement3(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">
                  Requirement4{" "}
                  {!requirement4 && <span className="jpcRequired">*</span>}
                </span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement4(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">Requirement5</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement5(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <span className="jpcRequirements jpc">Requirement6</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement6(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}{" "}
                <span className="jpcRequirements jpc">Requirement7</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement7(e.target.value)}
                  placeholder="&#9679;"
                />
                {/* ========================== */}
                <button className="jpcPostBut" type="submit">
                  {uploading ? "Creating..." : "Create Job"}
                </button>
                {fileError && (
                  <span className="imageError">Company logo img required</span>
                )}
              </form>
            </div>
          </div>

          <div className="jpcRightCon">
            <RightBar />
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default JobSearchFeed;
