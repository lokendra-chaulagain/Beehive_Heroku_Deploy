const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const jobPostRoute = require("./routes/jobPost");
const blogRoute = require("./routes/blog");
const userPostRoute = require("./routes/userPost");
const userDetailRoute = require("./routes/userDetail");
const userRoute = require("./routes/user");
const commentRoute = require("./routes/comment");
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log({ msg: "MongoDB connection error", err }));

//Middleware
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/jobPosts", jobPostRoute);
app.use("/api/userPosts", userPostRoute);
app.use("/api/userDetails", userDetailRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/comments", commentRoute);

//Error handling middleware
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
// }

//Port listening
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running on port");
});
