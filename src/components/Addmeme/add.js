import React from "react";
import './add.css'

export default function AddMeme(){
    return(
        <div style={{backgroundImage: "url('/landing_page.jpg')", height: "542px"}}>
           <div id="add-meme" className="text-right rounded" >
               <h1 className="text-primary">Create Meme</h1>
                <form >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title:</label>
                        <input className="form-control" type={"text"} placeholder="Meme Title"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description:</label>
                        <input className="form-control" type={"text"} placeholder="Enter Meme Description"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="meme_url">Meme URL:</label>
                        <input className="form-control" type={"text"} placeholder="Enter Meme URL"/>
                    </div>
                    
                    <button className="btn btn-primary" type="submit">Add Meme</button>
                </form>
             </div>
        </div>
    
        
    )
}