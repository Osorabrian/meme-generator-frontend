import  React from "react"

export default function CardComponent({image_url, title, description}){
    return(
        <div className="card col-2 mt-3 mb-2 ms-2 me-2 h-100">
        <img src={image_url} className="card-img-top" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
    </div>
    )
}