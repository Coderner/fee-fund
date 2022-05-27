import React from "react";
import "./Navbar.css"

export default function Navbar(){
  return(
      <div className="Navbar">
          <ul className="navlist">
              <li id="Logo">feeFund</li>
              <li id="space"></li>
              <li id="login"><button class="auth">Login</button></li>
              <li id="signup"><button class="auth">Signup</button></li>
          </ul>
      </div>
  ) 
}