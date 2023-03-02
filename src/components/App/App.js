import './App.css';
import NavBar from '../Navbar/Navbar';
import LandingPage from '../Landingpage/Landingpage';
import SignUp from '../Signup/Signup';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      {/* <SignUp></SignUp> */}
    </div>
  );
}

export default App;
