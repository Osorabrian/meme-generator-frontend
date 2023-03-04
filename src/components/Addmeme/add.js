import React,{useState, useContext} from "react";
import { userIdContext } from "../App/App";
import './add.css'

export default function AddMeme(){

    const[userId, setUserId] = useContext(userIdContext)
    const[title, setTitle] = useState('')
    const[imageURL, setImageUrl] = useState('')
    const[description, setDescription] =useState('')

    function handleSubmit(e){
        e.preventDefault()

        let formData = {title: title, image_url: imageURL, description: description, user_id: userId}
        
        fetch("http://localhost:9292/memes/create",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))

        alert("Meme has been added successfully")
    }

    return(
        <div style={{backgroundImage: "url('/landing_page.jpg')", height: "542px"}}>
           <div id="add-meme" className="text-right rounded" >
               <h1 className="text-primary">Create Meme</h1>
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