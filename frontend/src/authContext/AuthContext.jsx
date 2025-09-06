import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const GlobalAuthContext = createContext();

const AuthContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authUser,setAuthUser] = useState({})
  const [loading, setLoading] = useState(true);

  const checkLoggedInUser = async () => {
    try {
      let response = await AxiosInstance.get("/user/me"); // API CALL
      console.log(response);
      setAuthUser(response.data.data);
      setLoggedInUser(response.data.success);
    } catch (error) {
      setLoggedInUser(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  return (
    <GlobalAuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        loading,
        setLoading,
        checkLoggedInUser,
        authUser
      }}
    >
      {children}
    </GlobalAuthContext.Provider>
  );
};

export default AuthContext;
