import React from "react";
import LogIn from "../Login/Login";
import './landingpage.css'

export default function LandingPage(){
    return(
        <div id="landing_page" style={{backgroundImage: "url('/landing_page.jpg')", height: "540px"}}>
            <div id="intro">
                <h1 style={{textAlign: "left"}} className="text-primary">Meme Generator</h1>
                <h3 style={{textAlign: "left"}} className="text-primary">Brace yourself cause you are about to have a good time.</h3>
               <h3 style={{textAlign: "left"}} className = "text-primary">Your go to app for Memes</h3>
            </div> 
            <LogIn></LogIn>
        </div>
    )
}