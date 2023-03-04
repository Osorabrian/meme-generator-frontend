import React, { useContext, useState, useEffect } from "react";
import { userIdContext } from "../App/App";
import MyMemeCard from "../mymemecard/mymemecard";

export default function MyMemes(){

    const[userId, setUserId] = useContext(userIdContext)
    const[memes, setMemes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/mymemes/${userId}`)
        .then(response => response.json())
        .then(data => setMemes(data))
    },[memes])

    return(
        <>
        <h2 className="mt-3 text-primary" style={{textAlign: "left"}}>All Memes</h2>
        <hr/>
        <div className="row">
        {memes.map((meme) => {
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