import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { AuthContext } from "./authContext/AuthContext";

//context
const UserDetailContext = createContext();

//context provider
export function UserDetailContextProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [currentUserDetail, setCurrentUserDetail] = useState({});
  const [userFromDB, setUserFromDB] = useState({});
  useEffect(() => {
    const fetchCurrentUserDetail = async () => {
      try {
        const res = await axios.post("/userDetails/getByUserID", {
          userID: user?._id,
        });
        setCurrentUserDetail(res.data[0]);

        const re2 = await axios.get(`/users/get/${user?._id}`);
        setUserFromDB(re2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentUserDetail();
  }, [user?._id]);
 

  return (
    <UserDetailContext.Provider
      value={{
        currentUserDetail,
        userFromDB,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(UserDetailContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
