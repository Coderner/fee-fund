import React from "react";
import "./Footer.css"

export default function Footer(){
  return(
      <div className="Footer">
             <h1 className="footerheadings">About Us</h1>
             <p>feeFund is a platform that connects children facing financial blocks in studies with compassionate sponsors like you! <br/><br/>
                 Becoming a sponsor means investing in a child’s education and empowering them to grow up in well educated and motivated individual. 
                 When you join our sponsorship family, you can be sure you're joining a growing, global community dedicated 
                 to doing whatever it takes for children, transforming their lives and the future we share.</p>
             <h1 className="footerheadings">Contact Us</h1>
             <div>feeFundhelp@gmail.com</div>
             <p className="copyright"> © {(new Date().getFullYear())} feeFund</p>
      </div>
  ) 
}