import { createContext, useReducer } from "react";
import UserDetailReducer from "./UserDetailsReducer";

const INITIAL_STATE = {
  userDetail: null,
  isFetching: false,
  error: false,
};

//context
export const UserDetailContext = createContext(INITIAL_STATE);

//contextProvider
export const UserDetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserDetailReducer, INITIAL_STATE);

  return (
    <UserDetailContextProvider
      value={{
        userDetail: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserDetailContextProvider>
  );
};

// import { createContext, useReducer, useEffect, useState } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")) || null, //fetching user from local storage
//   isFetching: false,
//   error: false,
// };

// //context
// export const AuthContext = createContext(INITIAL_STATE);

// //contextProvider
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   //saving user in local storage
//   const [didMount, setDidMount] = useState(false);
//   useEffect(() => {
//     setDidMount(true);

//     localStorage.setItem("user", JSON.stringify(state.user));
//     return () => setDidMount(false);
//   }, [state.user]);
//   if (!didMount) {
//     return null;
//   }

//   // useEffect(() => {

//   // }, [])

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
