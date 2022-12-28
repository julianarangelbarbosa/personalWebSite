import React from "react";
import "./portfolio.css";
import ME2 from "../../assets/ME2.jpeg";
import TRUCK1 from "../../assets/truck1.jpg";
import TRUCK2 from "../../assets/truck2.jpg";
import TRUCK3 from "../../assets/truck3.jpg";

const data = [
  {
    id: 1,
    image: TRUCK1,
    title:
      "Project 01: Logistic Game: try to unload vehicles as many as possible ",
    github: "https://github.com/julianarangelbarbosa",
    demo: "https://julianarangelbarbosa.github.io/Proj-01_oct_22/",
  },
  {
    id: 2,
    image: TRUCK2,
    title: "Project 02: Planner: organize your routine",
    github: "https://github.com/julianarangelbarbosa",
    demo: "",
  },
  {
    id: 3,
    image: TRUCK3,
    title:
      "Project 03: Financial Market: Stay up to date with information on banks and stocks",
    github: "https://github.com/julianarangelbarbosa",
    demo: "https://infomoneyproject.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
