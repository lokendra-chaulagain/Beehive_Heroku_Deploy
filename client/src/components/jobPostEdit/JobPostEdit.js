import React, { useEffect, useState } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./jobPostEdit.scss";

function JobPostEdit() {
  //Fetching data from URL id
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const notifySuccess = (msg) => toast.success(msg, { theme: "colored" });
  const notifyFailure = (msg) => toast.error(msg, { theme: "colored" });

  const [jobPost, setJobPost] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/jobPosts/get/${path}`);
      setJobPost(res.data);
    };
    fetchData();
  }, [path]);
  console.log(jobPost);

  // Update
  const [position, setPosition] = useState(jobPost.position);
  const [companyName, setCompanyName] = useState(jobPost.companyName);
  const [companyLocation, setCompanyLocation] = useState(
    jobPost.companyLocation
  );
  const [salaryRange, setSalaryRange] = useState(jobPost.salaryRange);
  const [companyType, setCompanyType] = useState(jobPost.companyType);
  const [noOfEmployee, setNoOfEmployee] = useState(jobPost.noOfEmployee);
  const [contractType, setContractType] = useState(jobPost.contractType);
  const [jobType, setJobType] = useState(jobPost.jobType);
  const [aboutJob, setAboutJob] = useState(jobPost.aboutJob);
  const [aboutCompany, setAboutCompany] = useState(jobPost.aboutCompany);
  const [aboutRole, setAboutRole] = useState(jobPost.aboutRole);
  const [requirement1, setRequirement1] = useState(jobPost.requirement1);
  const [requirement2, setRequirement2] = useState(jobPost.requirement2);
  const [requirement3, setRequirement3] = useState(jobPost.requirement3);
  const [requirement4, setRequirement4] = useState(jobPost.requirement4);
  const [requirement5, setRequirement5] = useState(jobPost.requirement5);
  const [requirement6, setRequirement6] = useState(jobPost.requirement6);
  const [requirement7, setRequirement7] = useState(jobPost.requirement7);
  const [updating, setUpdating] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    const newJob = {
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
    };
    console.log(newJob);
    try {
      await axios.put(`/jobPosts/update/${path}`, newJob);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
      notifySuccess("Job Post Updated Successfully");
    } catch (err) {
      notifyFailure("Job Post Update Failed");
      console.error(err.message);
    }
  };

  return (
    <div className="jobPostEditCon">
      <span className="jpecTitle">Post job requirements here!</span>
      <hr className="jpecHr" />
      {/* <img src="/assets/cover.jpeg" alt="" className="jpecImg" /> */}
      <label className="jpecIconAndTxt" htmlFor="fileInput">
        <ImageSearchOutlinedIcon className="jpecImgIcon" />
        <span className="jpecSelectImgTxt">Select company logo Image</span>
      </label>
      <input type="file" id="fileInput" style={{ display: " none" }} />

      <form className="jpecColumnCon" onSubmit={handleUpdate}>
        {/* =====================================*/}
        <span className="jpecCompanyName jpec">Position</span>
        <input
          type="text"
          className="jpecCompanyNameInput jpecInput jpecInput2"
          onChange={(e) => setPosition(e.target.value)}
          defaultValue={jobPost.position}
        />
        {/* =====================================*/}
        <span className="jpecCompanyName jpec">Company Name</span>
        <input
          type="text"
          className="jpecCompanyNameInput jpecInput jpecInput2"
          onChange={(e) => setCompanyName(e.target.value)}
          defaultValue={jobPost.companyName}
        />
        {/* == */}
        <span className="jpecCompanyLocation jpec">Company Location</span>
        <input
          type="text"
          className="jpecCompanyLocationInput jpecInput jpecInput2"
          onChange={(e) => setCompanyLocation(e.target.value)}
          defaultValue={jobPost.companyLocation}
        />
        {/* ==*/}
        <span className="jpecNoOfEmployee jpec">Salary Range</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          onChange={(e) => setSalaryRange(e.target.value)}
        >
          <option value={jobPost.salaryRange}>{jobPost.salaryRange}</option>
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
        {/* =====================================*/}
        <span className="jpecCompanyLocation jpec">Company Type</span>{" "}
        <input
          type="text"
          className="jpecCompanyLocationInput jpecInput jpecInput2"
          onChange={(e) => setCompanyType(e.target.value)}
          // placeholder="WebApp and MobilApp Development"
          defaultValue={jobPost.companyType}
        />
        {/* =====================================*/}
        <span className="jpecNoOfEmployee jpec">Required Number</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          onChange={(e) => setNoOfEmployee(e.target.value)}
        >
          <option value={jobPost.noOfEmployee}>{jobPost.noOfEmployee}</option>
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
        <span className="jpecNoOfEmployee jpec">Contract Type</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          onChange={(e) => setContractType(e.target.value)}
          name="contractType"
        >
          <option value="Intern" defaultValue={jobPost.contractType}>
            {jobPost.contractType}
          </option>
          <option value="Intern">Intern</option>
          <option value="Junior">Junior</option>
          <option value="Mid-Senior">Mid-Senior</option>
          <option value="Senior">Senior</option>
        </select>
        {/* =====================================*/}
        <span className="jpecNoOfEmployee jpec">Job Type</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value={jobPost.jobType}>{jobPost.jobType}</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
        {/* =====================================*/}
        <span className="jpecAboutTheJob jpec">About The Job</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheJobInput jpecInputTextArea jpecInput2"
          onChange={(e) => setAboutJob(e.target.value)}
          placeholder="Describe about the job"
          defaultValue={jobPost.aboutJob}
        />
        <span className="jpecAboutTheCompany jpec">About The Company</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheCompanyInput jpecInputTextArea jpecInput2"
          onChange={(e) => setAboutCompany(e.target.value)}
          placeholder="Describe about the Company"
          defaultValue={jobPost.aboutCompany}
        />
        <span className="jpecAboutTheRole jpec">About The Role</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheRoleInput jpecInputTextArea jpecInput2"
          onChange={(e) => setAboutRole(e.target.value)}
          placeholder="Describe about the Role"
          defaultValue={jobPost.aboutRole}
        />
        <span className="jpecRequirements jpec">Requirement1</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement1(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement1}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement2</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement2(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement2}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement3</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement3(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement3}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement4</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement4(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement4}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement5</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement5(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement5}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement6</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement6(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement6}
        />
        {/* =====================================*/}
        <span className="jpecRequirements jpec">Requirement7</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          onChange={(e) => setRequirement7(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement7}
        />
        <button className="jpecPostBut" type="submit">
          {updating ? "Updating..." : "Update"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default JobPostEdit;
