import React, { useContext, useState, useEffect } from "react";
import CardComponent from "../memecard/cardcomponent";
import { userIdContext } from "../App/App";

export default function MyMemes(){

    const[userId, setUserId] = useContext(userIdContext)
    const[memes, setMemes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/mymemes/${userId}`)
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    return(
        <>
        <h2 className="mt-3 text-primary" style={{textAlign: "left"}}>All Memes</h2>
        <hr/>
        <div className="row">

        </div>
        
        </>
    )
}