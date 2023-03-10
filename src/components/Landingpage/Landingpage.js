import React from "react";
import LogIn from "../Login/Login";
import './landingpage.css'

export default function LandingPage(){
    return(
        <div id="landing_page" style={{backgroundImage: "url('/memewallpaper.jpg')", height: "542px"}}>
            <div id="intro">
                <h1 style={{textAlign: "left"}} className="text-light">Meme Generator</h1>
                <h3 style={{textAlign: "left"}} className="text-light">Brace yourself cause you are about to have a good time.</h3>
               <h3 style={{textAlign: "left"}} className = "text-light">Your go to app for Memes</h3>
            </div> 
            <LogIn></LogIn>
        </div>
    )
}