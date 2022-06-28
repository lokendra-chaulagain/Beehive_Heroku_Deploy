const router = require("express").Router();
const {
  updateUser,
  getUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController");
const {
  verifyUser,
  verifyToken,
  verifyAdmin,
} = require("../utils/verifyToken");

//Update User
router.put("/update/:id", updateUser);

//Get User
router.get("/get/:id", verifyUser, getUser);

//Get All User
router.get("/getAll", getAllUsers);

//Delete User
router.delete("/delete/:id", verifyUser, deleteUser);

module.exports = router;
