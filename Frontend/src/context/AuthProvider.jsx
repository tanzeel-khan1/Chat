// import React from 'react'
// import Cookies from 'js-cookie'
// import { useContext } from 'react';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({children}) => {
//     const inatialState =  Cookies.get("jwt") || localStorage.getItem("userInfo")

//     const [authUser, setAuthUser] = React.useState(inatialState ? JSON.parse(inatialState) : undefined);
//   return (
//     <>
//       <AuthContext.Provider value={{authUser, setAuthUser}}>
//         {children}
//       </AuthContext.Provider>
//     </>
//   )
// }

// export  const useAuth = () => React.useContext(AuthContext);
import React from "react";
import Cookies from "js-cookie";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const token = Cookies.get("jwt");
  const userInfo = localStorage.getItem("userInfo");

  let initialState = undefined;

  // Parse localStorage userInfo safely
  if (userInfo) {
    try {
      initialState = JSON.parse(userInfo);
    } catch (error) {
      console.error("Invalid JSON in localStorage userInfo");
    }
  } else if (token) {
    // store token directly if no userInfo
    initialState = token;
  }

  const [authUser, setAuthUser] = React.useState(initialState);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
