import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/UNITED.svg";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import {connect } from "react-redux";


const Header = ({ currentUser }) => {
  
  const handSignOut=()=>{
    try{
      signOut(auth)
      console.log("SignOut in successfull")
    }catch(error){
    console.log("Error in SingOut:",error.massage)
  }
}

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handSignOut}>
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

const mapStateToProps=(state)=>({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
