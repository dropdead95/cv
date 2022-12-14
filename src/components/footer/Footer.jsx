import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Andrey Lisovskiy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/andreylisovskiy/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/andreylisovsky/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/dropdead95" target="_blank">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
