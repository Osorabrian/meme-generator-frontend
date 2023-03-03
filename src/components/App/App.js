import './App.css';
import NavBar from '../Navbar/Navbar';
import  {Routes, Route} from "react-router-dom"
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';
import HomePage from '../Home/homepage';
import AddMeme from '../Addmeme/add';

function App() {
  return (
    <div className="App">
       
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="signup" element={<SignUpPage/>}></Route>
        <Route path="home" element={<HomePage/>}></Route>
        <Route path="add" element={<AddMeme/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
