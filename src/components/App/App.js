import './App.css';
import NavBar from '../Navbar/Navbar';
import LandingPage from '../Landingpage/Landingpage';
import SignUpPage from '../Signuppage/signuppage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <LandingPage></LandingPage> */}
      <SignUpPage></SignUpPage>
    </div>
  );
}

export default App;
