import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Authentication/login";
import Signup from "./Components/Authentication/signup";
// import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
       {/* <Navbar/>   */}
        {/* <Routes> */}
           {/* <Route path="/signup"><Signup/></Route> */}
           {/* <Route path="/login"><Login/></Route> */}
        {/* </Routes> */}
        {/* <Signup/> */}
        <Login/>        
       {/* <Footer/>   */}
    </>
  );
}

export default App;
