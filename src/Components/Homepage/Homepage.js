import React from "react";
import "./Homepage.css";
import join from "../Images/main.jpg"
import child from "../Images/child.jpg"
import smiling from "../Images/smiling.jpg"
import sponsor1 from "../Images/sponsor1.jpg"
import sponsor2 from "../Images/sponsor2.jpg"

export default function Homepage(){
  return(
    <>
       <div className="main">
         <div class="text">
            <h1>#SponsorEducation</h1>
             <h4>A good education is the greatest gift you can give. </h4>
             <p className="maintext">Education is the most powerful weapon which you can use to change the world.
             <br/>
             A quality education is a gift that unlocks a bright future for any child.
             Secure a future that is rich in opportunities for a child by funding their education.</p>
             <h4>Do not let poverty define the future of an child.</h4>
          </div>
        </div>
        <div className="joincommunity">
          <h1>Don't let your studies suffer due to your financial condition.</h1>
          <h2>Education for all | Right To Education</h2>
          <h2>Join the community</h2>
          <img src={join}/>
          <div><button className="register">Register Now</button></div>
        </div>
        <div className="becomesponsor">
          <h1>Become A Sponsor!</h1>
          <h2>Help Dreams Come True</h2>
          <img className="sponsorimage" src={child}/>
          <img className="sponsorimage" src={smiling}/>
          <img className="sponsorimage" src={sponsor1}/>
          <img className="sponsorimage" src={sponsor2}/>
          <h2> #SponsorEducation with feeFund</h2>
          <div><button className="fund">Fund Now</button></div>
        </div>
    </>
  ) 
}