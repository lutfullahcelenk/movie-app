import { createContext, useState, useEffect } from "react";
// import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  // console.log(
  //   ":rocket: currentUser",
  //   currentUser
  // );
  // useEffect(() => {
  //   userObserver(setCurrentUser);
  // }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
