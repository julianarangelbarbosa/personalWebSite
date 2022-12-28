import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="a" className="footer__logo">
        Juliana Barbosa - Fullstack Developer
      </a>

      <ul className="personal">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

<div className="footer__socials">
  <a href="https://www.linkedin.com/in/juliana-rangel-barbosa/"><BsLinkedin/></a>
  <a href="https://github.com/julianarangelbarbosa"><FaGithub/></a>
</div>

<div className="footer_copyright">
<small></small>

</div>

    </footer>
  );
};

export default Footer;
