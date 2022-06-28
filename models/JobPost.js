const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    companyLocation: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "",
    },

    officeOrRemote: {
      type: String,
      enum: ["Office", "Remote"],
    },

    salaryRange: {
      type: String,
      enum: [
        "5k-10k",
        "10k-15k",
        "15k-20k",
        "20k-30k",
        "30k-40k",
        "40k-50k",
        "50k-60k",
        "60k-70k",
        "70k-80k",
        "Negotiate",
      ],
    },

    companyName: {
      type: String,
      required: true,
    },

    companyType: {
      type: String,
      required: true,
    },

    noOfEmployee: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    companyProfileImg: {
      type: String,
      default: "",
    },

    contractType: {
      type: String,
      enum: ["Intern", "Junior", "Mid Senior", "Senior"],
    },

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract"],
    },

    aboutJob: {
      type: String,
      required: true,
    },

    aboutCompany: {
      type: String,
      required: true,
    },

    aboutRole: {
      type: String,
      required: true,
    },

    requirement1: {
      type: String,
      default: "",
    },

    requirement2: {
      type: String,
      default: "",
    },

    requirement3: {
      type: String,
      default: "",
    },

    requirement4: {
      type: String,
      default: "",
    },

    requirement5: {
      type: String,
      default: "",
    },

    requirement6: {
      type: String,
      default: "",
    },

    requirement7: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPost", JobPostSchema);
