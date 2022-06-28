const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      default: "",
    },

    nickName: {
      type: String,
      default: "",
    },

    profilePic: {
      type: String,
      default: "",
    },

    coverPic: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    profession: {
      type: String,
      default: "",
    },

    homeTown: {
      type: String,
    },

    currentlyLiving: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },

    followings: {
      type: Array,
      default: [],
    },

    relationShipStatus: {
      type: String,
      enum: [1, 2, 3, 4],
    },

    likes: {
      type: Array,
      default: [],
    },

    dislikes: {
      type: Array,
      default: [],
    },

    currentJob1Position: {
      type: String,
      default: "",
    },

    currentJob1Company: {
      type: String,
      default: "",
    },

    currentJob2Position: {
      type: String,
      default: "",
    },

    currentJob2Company: {
      type: String,
      default: "",
    },

    founderOf1: {
      type: String,
      default: "",
    },

    founderOf2: {
      type: String,
      default: "",
    },

    currentStudyingCourse: {
      type: String,
      default: "",
    },

    currentStudyingUniversity: {
      type: String,
      default: "",
    },

    graduatedCourse: {
      type: String,
      default: "",
    },

    graduatedUniversity: {
      type: String,
      default: "",
    },

    plus2CompletedCollege: {
      type: String,
      default: "",
    },

    plus2CompletedCollegeLocation: {
      type: String,
      default: "",
    },

    sEECompletedCollege: {
      type: String,
      default: "",
    },

    sEECompletedSchoolLocation: {
      type: String,
      default: "",
    },

    pastJob1Position: {
      type: String,
      default: "",
    },

    pastJob1Company: {
      type: String,
      default: "",
    },

    pastJob2Position: {
      type: String,
      default: "",
    },

    pastJob2Company: {
      type: String,
      default: "",
    },

    jobPostsBookmark: {
      type: Array,
      default: [],
    },

    githubLink: {
      type: String,
      default: "",
    },

    linkedinLink: {
      type: String,
      default: "",
    },

    twitterLink: {
      type: String,
      default: "",
    },

    instagramLink: {
      type: String,
      default: "",
    },

    websiteLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserDetail", UserDetailSchema);
