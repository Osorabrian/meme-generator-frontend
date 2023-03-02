import React from "react";
import './signup.css'

export default function SignUp() {
    return (
    <form id="sign_up">

    <h1 style={{textAlign: "center"}}>Sign Up</h1>

        <div className="mb-3">
            <label className="form-label" htmlFor="first_name">First Name:</label>
            <input type={"text"} className="form-control" placeholder="First Name" required/>

            <label className="form-label" htmlFor="last_name">Last Name:</label>
            <input type={"text"} className="form-control" placeholder="Last Name" required/>
        </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="email">Email:</label>
        <input type={"email"} className="form-control" placeholder="Email" required/>
    </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="password">Password:</label>
        <input type={"password"} className="form-control" placeholder="Password" required/> 
    </div>

    <div className="form-text mb-3">
        <a href="#">Forgot Password ?</a>
    </div>

    <button type="submit" className="btn btn-primary">Log In</button>
    
</form>
    )
}