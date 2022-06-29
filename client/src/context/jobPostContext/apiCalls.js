
import { axiosInstance } from "../../config";

//Get all
const getAllJobPosts = async (dispatch) => {
  dispatch({ type: "GETALL_JOB_POSTS_START" });
  try {
    const res = await axiosInstance.get("/jobPosts/getAll");
    //sort by date
    res.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    dispatch({ type: "GETALL_JOB_POSTS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GETALL_JOB_POSTS_FAILURE" });
  }
};

//Delete
const deleteJobPost = async (id, dispatch) => {
  dispatch({ type: "DELETE_JOB_POST_START" });
  try {
    await axiosInstance.delete("/posts/delete/" + id);
    dispatch({ type: "DELETE_JOB_POST_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_JOB_POST_FAILURE" });
  }
};

//Create
const createJobPost = async (jobPost, dispatch) => {
  dispatch({ type: "CREATE_JOB_POST_START" });
  try {
    await axiosInstance.post("/jobPosts/create", jobPost);
    dispatch({ type: "CREATE_JOB_POST_SUCCESS", payload: jobPost });
  } catch (error) {
    dispatch({ type: "CREATE_JOB_POST_FAILURE" });
  }
};

//export
export { getAllJobPosts, deleteJobPost, createJobPost };
