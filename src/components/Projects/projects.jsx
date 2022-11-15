import { useEffect } from "react";
import html from "../../images/html-logo.png";
import css from "../../images/css-logo.png";
import javascript from "../../images/javascript-logo.png";
import react from "../../images/react-logo.png";
import node from "../../images/node-logo.png";
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
          <span style={{ fontSize: "3.5rem" }}>
            {" "}
            I <span style={{ color: "#FF1400" }}>❤️ </span> Creating -{" "}
          </span>{" "}
          <br /> The good stuff. Here's What I've Been Working On.
        </h1>
        <p> 👇🏿</p>
      </div>

      <div className="tech-stack-section">
        <h2>
          Throwing around buzzwords is fun and all, but here are the
          technologies I'm most comfortable with right now.
        </h2>
        <ul
          style={{
            width: "50%",
            margin: "auto",
            padding: "0px",
            listStyle: "none",
          }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>VueJS</li>
          <li>Python</li>
          <li>Djagno Rest Framework</li>
          <li>Kafka</li>
          <li>React</li>
          <li>C#</li>
          <li>.NET Core</li>
          <li>ASP.NET Core</li>
          <li>Relational Databases</li>
          <li>Rest API Design</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="projects-container">
        <section className="project-section">
          <h4>8-bit Blackjack</h4>
          <img src={blackjack} alt="blackjack project" />
          <h2>// What it does</h2>
          <p>
            Full feature Blackjack with betting and card rendering. Made using a
            combination of CSS grid and flexbox. The first completely original
            project I came up with! Currently hosted on GitHub.
          </p>
          <div className="techstack">
            <h2>// Tech stack</h2>
            <p>HTML, CSS, Javascript</p>
            <p className="seecode">
              <a
                href="https://isaac-parks.github.io/BlackJack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it Live.{" "}
              </a>
              <a
                href="https://github.com/isaac-parks/BlackJack"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the Code.
              </a>
            </p>
          </div>
        </section>
        <section className="project-section">
          <h4 style={{ color: "#FF1400" }}>Valorant Agents</h4>
          <img src={valorant} alt="valorant project" />
          <h2>// What it does</h2>
          <p>
            Created using Riot Games REST API documentation. Displays
            information about characters from the video game Valorant. Used
            Javascript events to create scroll effect for character selection.
            Currently hosted on GitHub.
          </p>
          <div className="techstack">
            <h2>// Tech stack</h2>
            <p>HTML, CSS, Javascript</p>
            <p className="seecode">
              <a
                href="https://isaac-parks.github.io/Valorant-API/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See it Live.{"                 "}
              </a>
              <a
                href="https://github.com/isaac-parks/Valorant-API"
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
