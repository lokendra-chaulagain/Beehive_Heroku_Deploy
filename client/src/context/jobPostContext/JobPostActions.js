//Create
export const CreateJobPostStart = () => ({
  type: "CREATE_JOB_POST_START",
});

export const CreateJobPostSuccess = (jobPost) => ({
  type: "CREATE_JOB_POST_SUCCESS",
  payload: jobPost,
});

export const CreateJobPostFailure = () => ({
  type: "CREATE_JOB_POST_FAILURE",
});

//Get all
export const GetAllJobPostsStart = () => ({
  type: "GETALL_JOB_POSTS_START",
});

export const GetAllJobPostsSuccess = (jobPosts) => ({
  type: "GETALL_JOB_POSTS_SUCCESS",
  payload: jobPosts,
});

export const GetAllJobPostsFailure = () => ({
  type: "GETALL_JOB_POSTS_FAILURE",
});

//Delete
export const DeleteJobPostStart = () => ({
  type: "DELETE_JOB_POST_START",
});

export const DeleteJobPostSuccess = (id) => ({
  type: "DELETE_JOB_POST_SUCCESS",
  payload: id,
});

export const DeleteJobPostFailure = () => ({
  type: "DELETE_JOB_POST_FAILURE",
});
