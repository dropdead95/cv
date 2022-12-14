import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <BiImages />
      </a>
      <a
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
