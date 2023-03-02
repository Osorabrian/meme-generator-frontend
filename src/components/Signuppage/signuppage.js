import React from "react";
import './signuppage.css'
import SignUp from "../Signup/Signup";

export default function SignUpPage(){
    return(
        <div style={{backgroundImage: "url('/sadmeme.jpg')", height: "542px"}}>
            <div id="intro">
                <h1 style={{textAlign: "left"}} className="text-light">Meme Generator</h1>
                <h3 style={{textAlign: "left"}} className="text-light">Brace yourself cause you are about to have a good time.</h3>
               <h3 style={{textAlign: "left"}} className = "text-light">Your go to app for Memes</h3>
            </div> 
            <SignUp></SignUp>
        </div>
    )
}