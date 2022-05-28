import React from "react";
import "./signup.css"

export default function Signup(){
  return(
    
      <>
         <form action="" class="signupform">
                
            <h1 className="registerheading">Register</h1>   

            <div className="field">
                <label className="fieldname" htmlFor="name">Student Name</label>
                <input className="inputfield" type="text" name="name" id="name"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="phone number">Phone number</label>
                <input className="inputfield" type="number" name="phone number" id="phonenumber"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="School/College">School/College</label>
                <input className="inputfield" type="School/College" name="School/College" id="School/College"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="Class/Year">Class/Year</label>
                <input className="inputfield" type="Class/Year" name="Class/Year" id="Class/Year"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="Address">Address</label>
                <input className="inputfield" type="Address" name="Address" id="Address"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="Income"> Parents Income</label>
                <input className="inputfield" type="Income" name="Income" id="Income"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="IncomeSource">Source of Income</label>
                <input className="inputfield" type="IncomeSource" name="IncomeSource" id="IncomeSource"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="IncomeCertificate">Income Certificate</label>
                <input className="inputfield" type="file" name="IncomeCertificate" id="IncomeCertificate"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="Proof">School Fees Proof</label>
                <input className="inputfield" type="file" name="Proof" id="Proof"/>
            </div>
            
            <div className="field">
                <label className="fieldname" htmlFor="Funding">Funding Required</label>
                <input className="inputfield" type="Funding" name="Funding" id="Funding"/>
            </div>

            <div className="field">
                <label className="fieldname" htmlFor="Bank">Bank Details </label>
                <input className="inputfield" type="Bank" name="Bank" id="Bank"/>
            </div>

            <button type="submit" className="register">Sign up</button>
         </form>
    </>
  ) 
}