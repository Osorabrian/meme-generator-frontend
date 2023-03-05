import React, {useEffect, useState} from "react";
import CardComponent from "../memecard/cardcomponent";

export default function HomePage(){

    const[memes, setMemes] = useState([])
    const[query, setQuery] = useState('')

    useEffect(() => {
        fetch("http://localhost:9292/memes")
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    const data = memes.filter(meme => meme.title.toLowerCase().includes(query) || meme.created_at.includes(query))

    return(
        <>
        <div className="row">
            <h2 className="mt-3 text-primary col-8">All Memes</h2>
            <input type={"text"} placeholder = "Search Meme" className="search form-control mt-3 col-4" 
            style={{width: "20%", height: "30px"}} onChange={e => setQuery(e.target.value)}/>
        </div>
        
        <h4 style={{textAlign: "left"}}>Search Results({data.length})</h4>
        <div className="row">
            {data.map((meme) => {
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