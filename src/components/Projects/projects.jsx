import { useEffect } from "react";

import blackjack from "../../images/blackjack-ss.jpg";
import valorant from "../../images/valorant-ss.jpg";
import projects from "./projects.css";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects transition">
      <div className="footer-header">
        <h1>
          <span style={{ fontSize: "5rem" }}>
            {" "}
            I <span style={{ color: "red" }}>❤️ </span> Creating -{" "}
          </span>{" "}
          <br /> The good stuff. Here's What I've Been Working On.
        </h1>
        <p> 👇🏿</p>
      </div>

      <div className="projects-container">
        <section className="project-section">
          <img src={blackjack} alt="" />
          <h4>8-bit Blackjack</h4>
          <p>
            Full feature Blackjack with betting and card rendering. Currently
            hosted on GitHub.
          </p>
          <div className="techstack">
            <h2>Tech Stack</h2>
            <p>HTML, CSS, Javascript</p>
            <p className="seecode">
              <a
                href="https://indoorike.github.io/BlackJack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it Live.{" "}
              </a>
              <a
                href="https://github.com/indoorike/BlackJack"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the Code.
              </a>
            </p>
          </div>
        </section>
        <section className="project-section">
          <img src={valorant} alt="" />
          <h4 style={{ color: "red" }}>Valorant Agents</h4>
          <p>
            Created using Riot Games REST API documentation. Displays
            information about characters from the video game Valorant.
          </p>
          <div className="techstack">
            <h2>Tech Stack</h2>
            <p>HTML, CSS, Javascript</p>
            <p className="seecode">
              <a
                href="https://indoorike.github.io/Valorant-API/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it Live.{"                 "}
              </a>
              <a
                href="https://github.com/indoorike/Valorant-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the Code.
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
