import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/UNITED.svg";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import {useSelector } from "react-redux";
import CardIcon from "../card-icon/card-icon";
import CardDropDown from "../card-dropdown/card-dropdown";



const Header = () => {
  const currentUser=useSelector((state)=>state.user.currentUser );
  const hidden=useSelector((state)=>state.card.hidden);


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
        {currentUser ? (<div className="option" onClick={handSignOut}>SIGN OUT</div>)
         : (<Link className="option" to="/signin"> SIGN IN</Link>)}
        
        <CardIcon/>
      </div>
      { hidden ?null: <CardDropDown/>}
    </div>
  );
};


export default (Header);
