import React from "react";
import "./about.css";
import ME from "../../assets/ME23.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                <p>ð¸ Less than 1 year in Developing.</p>
              <p>ð¸ +10 years in Project Management in Logistics / Supply Chain.</p></small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
              <p>ð¸ Web Developement @ Ironhoack Lisbon.</p>
              <p>ð¸ Project Management Professional - PMP (Certification from PMI).</p>
                </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Fun Facts</h5>
              <small>
                <p>ð¸ I have participated in several social projects in Brazil. </p>
                <p>ð¸ I currently live in Lisbon. </p>
                </small>
            </article>
          </div>
          <p>I'm from SÃ£o Paulo/Br. Nowadays
             I'm residing in Lisbon.To learn about IT area, I recently finished IT bootcamp in Ironhack Lisbon. 
             Technology and Logistics are my fields of knowledge.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
