import './App.css';
import NavBar from '../Navbar/Navbar';
import  {Routes, Route} from "react-router-dom"
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';
import HomePage from '../Home/homepage';

function App() {
  return (
    <div className="App">
       
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="signup" element={<SignUpPage/>}></Route>
        <Route path="home" element={<HomePage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
