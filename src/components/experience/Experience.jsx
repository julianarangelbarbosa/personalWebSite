import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experiene</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="expertise__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="expertise__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ExpressJs</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Project Management</h3>
          <div className="expertise__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Agile: Product Owner and Kanban</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Waterfall</h4>
                <p></p>
                <small className="text-light"></small>
              </div>
            </article>

            

           

            
          </div>
        </div>





      </div>
    </section>
  );
};

export default Experience;
