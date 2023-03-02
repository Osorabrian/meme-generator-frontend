import React from "react"

export default function NavBar(){
    return(
        <nav className = "navbar bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light me-5" href="#">Meme Generator</a>
                <ul className="nav me-auto">
                    <li className="nav-item me-3">
                        <a className="nav-link text-light" href="#">Home</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-light" href="#">My Memes</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-light" href="#">Add</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-light" href="#">Sign Up</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-light" href="#">Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}