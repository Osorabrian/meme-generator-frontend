import React from "react";
import './signup.css'

export default function SignUp() {
    return (
    <form id="sign_up" className="rounded">

    <h1 style={{textAlign: "center"}} className="text-primary">Sign Up</h1>

        <div className="row mb-3">

            <div className="col-md-6">
                <label className="form-label" htmlFor="first_name">First Name:</label>
                <input type={"text"} className="form-control" placeholder="First Name" required/>
            </div>
                
            <div className="col-md-6">
                <label className="form-label" htmlFor="last_name">Last Name:</label>
                <input type={"text"} className="form-control" placeholder="Last Name" required/>
            </div>
            
        </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="email">Email:</label>
        <input type={"email"} className="form-control" placeholder="Email" required/>
    </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="password">Password:</label>
        <input type={"password"} className="form-control" placeholder="Password" required/> 
    </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="repeat-password">Password:</label>
        <input type={"password"} className="form-control" placeholder="Repeat Password" required/> 
    </div>

    <div class="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to the terms & conditions
        </label>
    </div>

     <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">Register</button>
    </div>
    
</form>
    )
}