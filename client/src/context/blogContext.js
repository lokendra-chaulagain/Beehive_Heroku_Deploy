import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

//context
const BlogContext = createContext();

//context provider
export function BlogContextProvider({ children }) {
  const [posts, setPosts] = useState([{}]);
  const [blogs, setBlogs] = useState([{}]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/blogs/getAll");
        const res1 = await axios.get("/userPosts/getAll");

        const blogs = res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        const posts = res1.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        setBlogs(res.data);
        setPosts(res1.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        posts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useAPI2() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
