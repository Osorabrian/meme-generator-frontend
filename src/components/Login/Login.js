import React, {useContext, useState} from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { userIdContext } from "../App/App"
import { useAuth } from "../auth"
import './login.css'

export default function LogIn() { 

const navigate = useNavigate()

const location = useLocation()
const auth = useAuth()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const[userId, setUserId] = useContext(userIdContext)

const redirectPath = location.state?.path || '/'

function handleSubmit(e){
    e.preventDefault()

    fetch(`http://localhost:9292/user/${email}`)
    .then(response => response.json())
    .then(data => {
        if(data.password === password){
            navigate(redirectPath, {replace: true})
            setUserId(data.id)
            auth.login(data.id)
        }else{
            alert("Please enter the right password")
        }
})

}
    return(
        <form id="log_in" className="rounded" onSubmit={handleSubmit}>
            <h1 style={{textAlign: "center"}} className="text-primary">Log In</h1>

            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email:</label>
                <input type={"email"} className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="password">Password:</label>
                <input type={"password"} className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/> 
            </div>

            <div className="form-text mb-3">
                <a href="#">Forgot Password ?</a>
            </div>

            <div className="form-text mb-3">
               <p>Don't have an account ?<Link to='/signup'> Create an account</Link></p> 
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary w-50">Log In</button>
            </div>
        </form>
    )
}