import './App.css';
import NavBar from '../Navbar/Navbar';
import  {Routes, Route} from "react-router-dom"
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';
import HomePage from '../Home/homepage';
import AddMeme from '../Addmeme/add';
import UpdateMeme from '../Updatememe/Updatememe';
import MyMemes from '../Mymemes/Mymeme';
import { createContext, useState } from 'react';
import AuthProvider from '../auth';
import RequireAuth from '../Requireauth';

export const userIdContext = createContext()

function App() {

  const[userId, setUserId] = useState(null)

  return (
    <div className="App">
     <AuthProvider>
      <userIdContext.Provider value={[userId, setUserId]}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="signup" element={<SignUpPage/>}></Route>
          <Route path="home" element={<RequireAuth><HomePage/></RequireAuth>}></Route>
          <Route path="mymemes" element={<RequireAuth><MyMemes/></RequireAuth>}></Route>
          <Route path="mymemes/:memeId" element={<UpdateMeme/>}></Route>
          <Route path="add" element={<RequireAuth><AddMeme/></RequireAuth>}></Route>
        </Routes>
      </userIdContext.Provider>
      </AuthProvider> 
       
    </div>
  );
}

export default App;
