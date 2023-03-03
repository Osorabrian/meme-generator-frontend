import React from "react"
import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className = "navbar bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light me-5" to="#">Meme Generator</NavLink>
                <ul className="nav me-auto">
                    <li className="nav-item me-3">
                        <NavLink className="nav-link text-light" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link text-light" to="/mymemes">My Memes</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link text-light" to="/add">Add</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link text-light" to="/signup">Sign Up</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link text-light" to="/">Log out</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}