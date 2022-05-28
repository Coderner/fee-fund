import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Login from "./Components/Authentication/login";
// import Signup from "./Components/Authentication/signup";
import Homepage from "./Components/Homepage/Homepage";
// import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
       <Navbar/>  
       <Homepage/>
       {/* <Login/>
       <Signup/> */}
       <Footer/>  
    </>
  );
}

export default App;
