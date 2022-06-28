const JobPostsReducer = (state, action) => {
  switch (action.type) {
    //Create
    case "CREATE_JOB_POST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "CREATE_JOB_POST_SUCCESS":
      return {
        jobPosts: [...state.jobPosts, action.payload],
        isFetching: false,
        error: false,
      };

    case "CREATE_JOB_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //Get all
    case "GETALL_JOB_POSTS_START":
      return {
        jobPosts: [],
        isFetching: true,
        error: false,
      };

    case "GETALL_JOB_POSTS_SUCCESS":
      return {
        jobPosts: action.payload,
        isFetching: false,
        error: false,
      };

    case "GETALL_JOB_POSTS_FAILURE":
      return {
        jobPosts: [],
        isFetching: false,
        error: true,
      };

    //Delete
    case "DELETE_JOB_POST_START":
      return {
        ...state, //at the beginning we wont change anything so we can use the old state
        isFetching: true,
        error: false,
      };

    case "DELETE_JOB_POST_SUCCESS":
      return {
        jobPosts: state.jobPosts.filter(
          (jobPost) => jobPost.id !== action.payload
        ),
        isFetching: false,
        error: false,
      };

    case "DELETE_JOB_POST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default JobPostsReducer;
