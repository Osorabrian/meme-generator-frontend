import React from "react"
import './login.css'

export default function LogIn() {
    return(
        <form id="log_in">
            <label className="form-label" htmlFor="email">Email</label>
            <input type={"email"} className="form-control" placeholder="Email"/>
            <label className="form-label" htmlFor="password">Password</label>
            <input type={"password"} className="form-control" placeholder="Password"/>
            <button type="submit">Log In</button>
        </form>
    )
}