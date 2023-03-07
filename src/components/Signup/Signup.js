import React, {useState} from "react";
import './signup.css'
import { useNavigate } from "react-router-dom";

export default function SignUp() {

const[firstName, setFirstName] = useState('')
const[lastName, setLastName] = useState('')
const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
const[repeatPassword, setRepeatPassword] = useState('')

let navigate = useNavigate()

    function handleSubmit(e){

        e.preventDefault()

        let data = {"first_name": firstName, "last_name": lastName, "email": email, "password": password, "confirm_password": repeatPassword}

        if (password === repeatPassword ){

            navigate('/home')

           fetch("https://memes-generator-api.onrender.com/user/create", {
              method: "POST",
              headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
            },
               body: JSON.stringify(data)
          })
         .then(response => response.json())
        }else{
            alert("your passwords do not match")
        }
    }


    return (
    <form id="sign_up" className="rounded" onSubmit={handleSubmit}>

    <h1 style={{textAlign: "center"}} className="text-primary">Sign Up</h1>

        <div className="row mb-3">

            <div className="col-md-6">
                <label className="form-label" htmlFor="first_name">First Name:</label>
                <input type={"text"} className="form-control" placeholder="First Name" required onChange={e => setFirstName(e.target.value)}/>
            </div>
                
            <div className="col-md-6">
                <label className="form-label" htmlFor="last_name">Last Name:</label>
                <input type={"text"} className="form-control" placeholder="Last Name" required onChange={e => setLastName(e.target.value)}/>
            </div>
            
        </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="email">Email:</label>
        <input type={"email"} className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
    </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="password">Password:</label>
        <input type={"password"} className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/> 
    </div>

    <div className="mb-3">
        <label className="form-label" htmlFor="repeat-password">Repeat Password:</label>
        <input type={"password"} className="form-control" placeholder="Repeat Password" required onChange={e => setRepeatPassword(e.target.value)}/> 
    </div>

    <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree to the terms & conditions
        </label>
    </div>

     <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">Register</button>
    </div>
    
</form>
    )
}