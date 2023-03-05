import React from "react";
import { Link } from "react-router-dom";

export default function MyMemeCard({image_url, title, description, id}){

    function handleDelete(){
        fetch(`https://memes-generator-api.onrender.com/memes/delete/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
    }



    return(
        <div className="card col-3 mt-3 mb-2 ms-2 me-2 h-100">
        <img src={image_url} className="card-img-top" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link className="btn btn-success col-4 me-1" to={`/mymemes/${id}`} >Update</Link>
            <button className="btn btn-danger col-4" onClick={handleDelete}>Delete</button>
        </div>
    </div>
    )
}