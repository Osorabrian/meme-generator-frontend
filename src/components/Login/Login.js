import React from "react"
import './login.css'

export default function LogIn() {
    return(
        <form id="log_in">
            <h2 style={{textAlign: "center"}}>Log In</h2>
            <div className="mb-3">
            <label className="form-label" htmlFor="email">Email:</label>
            <input type={"email"} className="form-control" placeholder="Email" required/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">Password:</label>
                <input type={"password"} className="form-control" placeholder="Password" required/> 
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    )
}