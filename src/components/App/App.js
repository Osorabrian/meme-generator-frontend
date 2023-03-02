import './App.css';
import NavBar from '../Navbar/Navbar';
import LandingPage from '../Landingpage/Landingpage';
import LogIn from '../Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      <LogIn></LogIn>
    </div>
  );
}

export default App;
