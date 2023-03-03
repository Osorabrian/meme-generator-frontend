import './App.css';
import NavBar from '../Navbar/Navbar';
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';
import HomePage from '../Home/homepage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
      {/* <LandingPage></LandingPage> */}
      {/* <SignUpPage></SignUpPage> */}
    </div>
  );
}

export default App;
