import React, {useEffect, useState} from "react";
import CardComponent from "../memecard/cardcomponent";

export default function HomePage(){

    const[memes, setMemes] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/memes")
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    return(
        <>
        <h2 className="mt-3 text-primary" style={{textAlign: "left"}}>All Memes</h2>
        <hr/>
        <div className="row">
            {memes.map((meme) => {
        return (
            <CardComponent
            key={meme.id} 
            title={meme.title} 
            image_url={meme.image_url} 
            description={meme.description}
            />
        ) })}
        </div>
        
        </>
    )
}