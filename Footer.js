import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        
        <div className="flex-1 ml-60">
          <div className="text-white font-inter font-semibold text-lg mb-4">
            Categories
          </div>
          <ul className="text-white font-inter font-normal text-base">
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
         
        <div className="flex-1">
          <div className="text-white font-inter font-semibold text-lg mb-4">
            Contact
          </div>
          <ul className="text-white font-inter font-normal text-base">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
