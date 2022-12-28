import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME22.png";
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Juliana Barbosa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
       
  
     <HeaderSocials />
        <CTA />
        

        <div className="me">
          
          <img src={ME} alt="me" />
        
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
