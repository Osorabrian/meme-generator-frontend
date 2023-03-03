import React from "react";

export default function AddMeme(){
    return(
        <form>
            <div className="mb-5">
                <label className="form-label" htmlFor="title">Title:</label>
                <input className="form-control" type={"text"} placeholder="Meme Title"/>
            </div>

            <div className="mb-5">
                <label className="form-label" htmlFor="description">Description:</label>
                <input className="form-control" type={"text"} placeholder="Enter Meme Description"/>
            </div>

            <div className="mb-5">
                <label className="form-label" htmlFor="meme_url">Meme URL:</label>
                <input className="form-control" type={"text"} placeholder="Enter Meme URL"/>
            </div>
            
            <button className="btn btn-primary" type="submit">Add Meme</button>
        </form>
    )
}