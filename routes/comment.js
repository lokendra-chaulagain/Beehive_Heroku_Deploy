const {
  createComment,
  getCommentsByPostID,
} = require("../controllers/commentController");
const router = require("express").Router();

//Create a new comment
router.post("/create", createComment);

//Get comments by postID
router.post("/getComments", getCommentsByPostID);

module.exports = router;
