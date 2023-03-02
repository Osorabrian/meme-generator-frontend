import React from "react"
import './login.css'

export default function LogIn() {
    return(
        <form id="log_in" className="rounded">
            <h1 style={{textAlign: "center"}} className="text-primary">Log In</h1>
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
            <div className="text-center">
                <button type="submit" className="btn btn-primary w-50">Log In</button>
            </div>
        </form>
    )
}