import React from "react";
import "./login.css"

export default function Login(){
  return(
      <>
         <form action=""  className="loginform">
            
            <h1 className="loginheading">Welcome Back</h1>
            <div>
                <label className="fieldname" htmlFor="email">Email</label>
                <input className="input" type="text" name="email" id="email"/>
            </div>

            <div>
                <label className="fieldname" htmlFor="password">Password</label>
                <input className="input" type="password" name="password" id="password"/>
            </div>

            <button className="login" type="submit">Login</button>
         </form>
      </>
  ) 
}