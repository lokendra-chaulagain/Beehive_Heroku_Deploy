const router = require("express").Router();
const {
  createUserPost,
  updateUserPost,
  getAllUserPosts,
  getUserPost,
  deleteUserPost,
  getAllPostsOfAUser,
  likeDislikePost,
  getAllLikesId,
} = require("../controllers/userPostController");
const { verifyUser, verifyToken } = require("../utils/verifyToken");

//Create UserPost
router.post("/create", verifyToken, createUserPost);

//Update UserPost
router.put("/update/:id", verifyUser, updateUserPost);

//Get UserPost
router.get("/get/:id", getUserPost);

//Get All UserPost
router.get("/getAll", getAllUserPosts);

//Delete UserPost
router.delete("/delete/:id", verifyUser, deleteUserPost);

//Get all Posts of a user
router.post("/getAllPostsOfAUser", getAllPostsOfAUser);

//LIKE / DISLIKE A POST
router.put("/like/:id", likeDislikePost);

//Get all likes id
router.get("/getAllLikesId/:id", getAllLikesId);

module.exports = router;
