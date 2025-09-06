import React, { useContext, useEffect } from "react";
import { GlobalAuthContext } from "../authContext/AuthContext";
import { Navigate } from "react-router-dom";

const UserPrivate = ({ children }) => {
  let { loggedInUser, checkLoggedInUser, loading } = useContext(GlobalAuthContext);

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return loggedInUser ? children : <Navigate to={"/login"} />;
};

export default UserPrivate;
