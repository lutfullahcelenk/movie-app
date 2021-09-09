import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { signOut } from "../auth/firebase";
const Navbar = () => {
  // const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            LutFlix
          </a>
          <div className="buttons">
            {currentUser ? (
              <h3>{currentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => history.push("/login")}
              >
                Login
              </button>
            )}
            {currentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => history.push("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;