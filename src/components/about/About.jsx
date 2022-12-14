import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { MdCastForEducation } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5>Education</h5>
              <small>It School Intellect Fox</small>
            </article>
            <article className="about__card">
              <MdLanguage className="about__icon" />
              <h5>Languages</h5>
              <small>English B1</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Pet Projects</small>
            </article>
          </div>
          <p>
            As a frontend developer, I have such qualities as problem-solving
            skills and critical thinking, communication skills, self-awareness
            and self-learning, accountability, time-management, emotional
            intelligence.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
