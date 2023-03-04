import './App.css';
import NavBar from '../Navbar/Navbar';
import  {Routes, Route} from "react-router-dom"
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';
import HomePage from '../Home/homepage';
import AddMeme from '../Addmeme/add';
import MyMemes from '../Mymemes/Mymeme';
import { createContext, useState } from 'react';

export const userIdContext = createContext()

function App() {

  const[userId, setUserId] = useState(null)

  return (
    <div className="App">
    <userIdContext.Provider value={[userId, setUserId]}>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="signup" element={<SignUpPage/>}></Route>
        <Route path="home" element={<HomePage/>}></Route>
        <Route path="mymemes" element={<MyMemes/>}></Route>
        <Route path="add" element={<AddMeme/>}></Route>
      </Routes>
    </userIdContext.Provider> 
    </div>
  );
}

export default App;
