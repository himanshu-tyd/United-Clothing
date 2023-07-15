import React from "react";
import './accesspage.styles.scss';
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const Access=()=>{
    return(
        <div className="sign-in-and-sing-up">
            <SignIn/> 
            <SignUp/>  
        </div>
    )
}

export default Access;