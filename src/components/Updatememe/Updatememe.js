import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function UpdateMeme(){

    const { memeId } = useParams()
    const navigate = useNavigate()

    const[meme, setMeme] = useState('')
    const[title, setTitle] = useState('')
    const[imageUrl, setImageUrl] = useState('')
    const[description, setDescription] = useState('')

    useEffect(() => {
        fetch(`http://localhost:9292/memes/${memeId}`)
        .then(response => response.json())
        .then(data => setMeme(data))
    },[])

    function handleSubmit(e){
        e.preventDefault()
        
        let formData = {title: title, image_url: imageUrl, description: description}
        
        fetch(`https://memes-generator-api.onrender.com/memes/update/${memeId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        navigate('/mymemes')
    }

    return(
        <div style={{backgroundImage: "url('/landing_page.jpg')", height: "542px"}}>
           <div id="add-meme" className="text-right rounded" >
               <h1 className="text-primary">Update Meme</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title:</label>
                        <input className="form-control" type={"text"} placeholder={meme.title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="meme_url">Meme URL:</label>
                        <input className="form-control" type={"url"} placeholder={meme.image_url} onChange={(e) => setImageUrl(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description:</label>
                        <textarea className="form-control" rows={3} placeholder={meme.description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <button className="btn btn-primary" type="submit">Update Meme</button>
                </form>
             </div>
        </div>
    )
}