import React from "react"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className = "navbar bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light me-5" to="#">Meme Generator</Link>
                <ul className="nav me-auto">
                    <li className="nav-item me-3">
                        <Link className="nav-link text-light" to="/home">Home</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link text-light" to="#">My Memes</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link text-light" to="#">Add</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link text-light" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link text-light" to="/">Log out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}