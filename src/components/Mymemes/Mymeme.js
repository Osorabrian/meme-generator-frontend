import React, { useContext, useState, useEffect } from "react";
import { userIdContext } from "../App/App";
import MyMemeCard from "../mymemecard/mymemecard";

export default function MyMemes(){

    const [query, setQuery] = useState('')
    const[userId, setUserId] = useContext(userIdContext)
    const[memes, setMemes] = useState([])

    useEffect(() => {
        fetch(`https://memes-generator-api.onrender.com/mymemes/${userId}`)
        .then(response => response.json())
        .then(data => setMemes(data))
    },[memes])

    const data = memes.filter(meme => meme.title.toLowerCase().includes(query) || meme.created_at.includes(query))


    return(
        <>
        <div className="row">
            <h2 className="mt-3 text-primary col-8">My Memes</h2>
            <input type={"text"} placeholder = "Search Meme" className="search form-control mt-3 col-4" 
            style={{width: "20%", height: "30px"}} onChange={e => setQuery(e.target.value)}/>
        </div>

        <h4 style={{textAlign: "left"}}>Search Results({data.length})</h4>

        <div className="row">
        {data.map((meme) => {
        return (
            <MyMemeCard
            key={meme.id} 
            title={meme.title} 
            image_url={meme.image_url} 
            description={meme.description}
            id = {meme.id}
            />
        ) })}
        </div>
        
        </>
    )
}