import { createContext, useState, useEffect, useCallback, useMemo } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setCurrentUser = (receivedToken, receivedUser) => {
    setToken(receivedToken);
    setUser(receivedUser);
  }
  useEffect((() => {
    // setUser(JSON.parse(localStorage.getItem("user")));
    // setToken(localStorage.getItem("token"));
    if(localStorage.getItem("user") != "") {setIsLoggedIn(true)}
    else {setIsLoggedIn(false)};
    
  }),[])

 
  return <UserContext.Provider value={{user, token, isLoggedIn, setCurrentUser, setUser, setToken, setIsLoggedIn}}>{children}</UserContext.Provider>;
};
export default UserContext;
