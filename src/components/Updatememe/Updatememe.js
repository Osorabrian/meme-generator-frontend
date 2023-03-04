import React from "react";

export default function UpdateMeme(){
    return(
        <div style={{backgroundImage: "url('/landing_page.jpg')", height: "542px"}}>
           <div id="add-meme" className="text-right rounded" >
               <h1 className="text-primary">Update Meme</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title:</label>
                        <input className="form-control" type={"text"} placeholder="Meme Title" onChange={(e) => setTitle(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="meme_url">Meme URL:</label>
                        <input className="form-control" type={"url"} placeholder="Enter Meme URL" onChange={(e) => setImageUrl(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description:</label>
                        <textarea className="form-control" rows={3} placeholder="Enter Meme Description" onChange={(e) => setDescription(e.target.value)} required/>
                    </div>

                    <button className="btn btn-primary" type="submit">Add Meme</button>
                </form>
             </div>
        </div>
    )
}