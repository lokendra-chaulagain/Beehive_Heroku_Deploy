import React, { useContext, useState, useEffect, createContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { axiosInstance } from "../config";

//context
const UserAllPostsContext = createContext();

//context provider
export function UserAllPostsContextProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [userAllJobPosts, setUserAllJobPosts] = useState([{}]);
  const [userAllBlogs, setUserAllBlogs] = useState([{}]);
  const [userFeedPosts, setUserFeedPosts] = useState([{}]);
  useEffect(() => {
    const fetchUserAllPosts = async () => {
      try {
        const res1 = await axiosInstance.post("/blogs/getAllBlogsOfAUser", {
          userID: user?._id,
        });

        const res = await axiosInstance.post("/jobPosts/getAllJobPostsOfAUser", {
          userID: user?._id,
        });

        const res2 = await axiosInstance.post("/userPosts/getAllPostsOfAUser", {
          userID: user?._id,
        });

        setUserAllBlogs(res.data);
        setUserAllJobPosts(res1.data);
        setUserFeedPosts(res2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserAllPosts();
  }, [user]);

  return (
    <UserAllPostsContext.Provider
      value={{
        userAllJobPosts,
        userAllBlogs,
        userFeedPosts,
      }}
    >
      {children}
    </UserAllPostsContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(UserAllPostsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
