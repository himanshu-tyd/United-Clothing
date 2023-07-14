import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/UNITED.svg";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

const Header = ({ currentUser }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error signin out :", error);
      });
  };

  return (
    <div className="header" >
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
