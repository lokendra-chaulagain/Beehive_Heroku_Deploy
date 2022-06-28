import { createContext, useReducer } from "react";
// const JobPostsReducer = require("./JobPostReducer");
import JobPostsReducer from "./JobPostReducer";

const INITIAL_STATE = {
  jobPosts: [],
  isFetching: false,
  error: false,
};

//context
export const JobPostsContext = createContext(INITIAL_STATE);

//contextProvider
export const JobPostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobPostsReducer, INITIAL_STATE);

  return (
    <JobPostsContext.Provider
      value={{
        jobPosts: state.jobPosts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </JobPostsContext.Provider>
  );
};
