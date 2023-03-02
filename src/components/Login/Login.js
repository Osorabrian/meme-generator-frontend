import React from "react"
import './login.css'

export default function LogIn() {
    return(
        <form id="log_in">
            <h1 style={{textAlign: "center"}}>Log In</h1>
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