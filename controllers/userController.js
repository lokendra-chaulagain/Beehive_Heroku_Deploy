const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update
const updateUser = async (req, res, next) => {
  if (!req.body.password) {
    delete req.body.password;
  }
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get User
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user) + "User found";
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users) + "Users found";
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser) + "User deleted";
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { updateUser, getUser, getAllUsers, deleteUser };
