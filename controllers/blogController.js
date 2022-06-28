const Blog = require("../models/Blog");

//Create
const createBlog = async (req, res, next) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    next(error);
  }
};

//Update
const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

//Get
const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

//GetAll
const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

//Delete
const deleteBlog = async (req, res, next) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBlog);
  } catch (error) {
    next(error);
  }
};

//Get allBlogs of a user (by userID) element
const getAllBlogsOfAUser = async (req, res, next) => {
  const { userID } = req.body;
  try {
    userKoAllPosts = await Blog.find({ userID });
    res.status(200).json(userKoAllPosts);
  } catch (error) {
    next(error);
  }
};

//Get blog according to category
const getAllBlogsOfACategory = async (req, res, next) => {
  const { category } = req.params;
  try {
    catBlogs = await Blog.find({ category });
    res.status(200).json(catBlogs);
  } catch (error) {
    next(error);
  }
};

//Get title of all blogs
const getAllBlogsTitles = async (req, res, next) => {
  try {
    allBlogsTitles = await Blog.find({}, { title: 1, _id: 0 });
    res.status(200).json(allBlogsTitles);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  getAllBlogsOfAUser,
  getAllBlogsOfACategory,
  getAllBlogsTitles,
};
