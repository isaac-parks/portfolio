import { useEffect } from "react";
import html from "../../images/html-logo.png";
import css from "../../images/css-logo.png";
import javascript from "../../images/javascript-logo.png";
import react from "../../images/react-logo.png";
import node from "../../images/node-logo.png";
import blackjack from "../../images/blackjack-ss.jpg";
import valorant from "../../images/valorant-ss.jpg";
import usedcar from "../../images/usedcar.jpg";
import projects from "./projects.css";
import ProjectSection from "./project-section";

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
        <ProjectSection
          sectionTitle="Craigslist API"
          color="rgb(241, 176, 0)"
          img={usedcar}
          projectDescription="A work-in-progress open source project that can be used to fetch information directly from Craigslist."
          techStack="Django"
          codeLink="https://github.com/isaac-parks/Unofficial-Craigslist-API"
        />
        <ProjectSection
          sectionTitle="8-bit Blackjack"
          color="#3061e3"
          img={blackjack}
          projectDescription="Full feature Blackjack with betting and card rendering. Made using a
            combination of CSS grid and flexbox. The first completely original
            project I came up with! Currently hosted on GitHub."
          techStack="HTML, CSS, Javascript"
          liveLink="https://isaac-parks.github.io/BlackJack/"
          codeLink="https://github.com/isaac-parks/BlackJack"
        />
        <ProjectSection
          sectionTitle="Valorant Agents"
          img={valorant}
          color="rgb(255, 20, 0)"
          projectDescription="Created using Riot Games REST API documentation. Displays
            information about characters from the video game Valorant. Used
            Javascript events to create scroll effect for character selection.
            Currently hosted on GitHub."
          techStack="HTML, CSS, Javascript"
          liveLink="https://isaac-parks.github.io/Valorant-API/"
          codeLink="https://github.com/isaac-parks/Valorant-API"
        />
      </div>
    </div>
  );
}
