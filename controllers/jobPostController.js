const JobPost = require("../models/JobPost");

//Create
const createJobPost = async (req, res, next) => {
  const newJobPost = new JobPost(req.body);
  try {
    const savedJobPost = await newJobPost.save();
    res.status(200).json(savedJobPost);
  } catch (error) {
    next(error);
  }
};

//Update
const updateJobPost = async (req, res, next) => {
  try {
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedJobPost);
  } catch (error) {
    next(error);
  }
};

//Get
const getJobPost = async (req, res, next) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);
    res.status(200).json(jobPost);
  } catch (error) {
    next(error);
  }
};

//GetAll
const GetAllJobPosts = async (req, res, next) => {
  try {
    const JobPosts = await JobPost.find();
    res.status(200).json(JobPosts);
  } catch (error) {
    next(error);
  }
};

//Delete
const deleteJobPost = async (req, res, next) => {
  try {
    const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ msg: "This JobPost has ben deleted ", deletedJobPost });
  } catch (error) {
    next(error);
  }
};

//Get all jobPosts of a user (by userID) element
const getAllJobPostsOfAUser = async (req, res, next) => {
  const { userID } = req.body;
  try {
    userKoAllJobPosts = await JobPost.find({ userID });
    res.status(200).json(userKoAllJobPosts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createJobPost,
  updateJobPost,
  getJobPost,
  GetAllJobPosts,
  deleteJobPost,
  getAllJobPostsOfAUser,
};
