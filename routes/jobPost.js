const router = require("express").Router();
// const JobPost = require('../models/JobPost');
const bcrypt = require("bcrypt");
const {
  createJobPost,
  updateJobPost,
  deleteJobPost,
  getJobPost,
  GetAllJobPosts,
  getAllJobPostsOfAUser,
} = require("../controllers/jobPostController");
const { verifyUser, verifyToken } = require("../utils/verifyToken");

//Create JobPost
router.post("/create", verifyToken, createJobPost);

//Update JobPost
router.put("/update/:id", verifyUser, updateJobPost);

//Get JobPost
router.get("/get/:id", getJobPost);

//GetAll JobPost
router.get("/getAll", GetAllJobPosts);

//Delete JobPost
router.delete("/delete/:id", verifyUser, deleteJobPost);

//Get all Posts of a user
router.post("/getAllJobPostsOfAUser", getAllJobPostsOfAUser);

module.exports = router;
