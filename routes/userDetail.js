const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const {
  createUserDetail,
  updateUserDetail,
  getUserDetail,
  getAllUserDetail,
  deleteUserDetail,
  getUserDetailByUserID,
  bookmark,
  getBookmarkJobPost,
} = require("../controllers/userDetailController");
const { likeDislikePost } = require("../controllers/userPostController");
const { verifyUser } = require("../utils/verifyToken");

//Create
router.post("/create", createUserDetail);

//Update
router.put("/update/:id",verifyUser, updateUserDetail);

//Get
router.get("/get/:id", getUserDetail);

//Get all
router.get("/getAll", getAllUserDetail);

//Delete
router.delete("/delete/:id", deleteUserDetail);

//Find userDetail by element {userID}
router.post("/getByUserID", getUserDetailByUserID);

//jobPost bookmark
router.put("/bookmark/:postId", bookmark);

//GetAll bookmarks of a user
router.get("/getAllBookmarks/:userDetailId", getBookmarkJobPost);

module.exports = router;
