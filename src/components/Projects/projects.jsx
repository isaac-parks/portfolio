import { useEffect } from "react";
import html from "../../images/html-logo.png";
import css from "../../images/css-logo.png";
import javascript from "../../images/javascript-logo.png";
import react from "../../images/react-logo.png";
import node from "../../images/node-logo.png";
import blackjack from "../../images/blackjack-ss.jpg";
import valorant from "../../images/valorant-ss.jpg";
import usedcar from "../../images/usedcar.jpg";
import mlp from "../../images/mlp.jpg";
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
        <p>👇🏿</p>
      </div>

      <div className="tech-stack-section">
        <h2>
          Throwing around buzzwords is fun. Here are some I'd say I feel the
          most comfortable with.
        </h2>
        <ul
          style={{
            width: "75%",
            margin: "auto",
            padding: "0px",
            listStyle: "circle",
            textAlign: "left",
          }}
        >
          <li>Javascript.</li>
          <li>Any frontend JS framework because they are all the same.</li>
          <li>Python 🫶🏾</li>
          <li>
            Any backend web Python framework because they are all the same.
          </li>

          <li>C# and the rest of the .NET ecosystem.</li>
          <li>C.</li>
          <li>C++.</li>
          <li>Rust, sweet lord I love rust.</li>
          <li>
            Assembly. Don't ask me to write anything in assembly because I will
            not do it, but I wrote a VERY basic program in AVR assembly for a
            microcontroller, and it actually worked which is a flex, so I'm
            putting it on here.
          </li>
          <li>Relational Databases.</li>
          <li>AWS.</li>
          <li>Operating Systems - Design and Development. (Linux = 🐐)</li>
          <li>
            Hardware and Software Communcation protocols and how to approach
            learning new ones.
          </li>
          <li>
            Every single detail about how a computer works. (do you want to talk
            about how computers work for 3 hours?)
          </li>
          <li>Electricity.</li>
        </ul>
      </div>

      <div className="projects-container">
        <ProjectSection
          sectionTitle="Multi-Layer Perceptron (OpenAIsaac)"
          color="#936bdb"
          img={mlp}
          projectDescription={`This is my own implementation of a multi-layer perceptron neural network architecture based on the famous 2003 research paper <a href="https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf">A Neural Probalistic Language Model</a>. The general purpose of it is to generate text with similar patterns given a set of input text. In the repo, I'm using it as a fake name generator, but it can be used for any type of input text. Please keep in mind that I am not Sam Altman and this puppy is not GPT 🤠. It's far from perfect, but has been a lot of fun and super fascinating.`}
          techStack="Python, Pytorch, Matplotlib, Jupyter Notebook."
          codeLink="https://github.com/isaac-parks/OpenAIsaac"
        />
        <ProjectSection
          sectionTitle="Craigslist API"
          color="rgb(241, 176, 0)"
          img={usedcar}
          projectDescription="Why doesn't Craigslist have an API? Probably because no one has updated craigslist since the year the research paper mentioned about came out. A work-in-progress open source project that can be used to fetch information directly from Craigslist."
          techStack="Django."
          codeLink="https://github.com/isaac-parks/Unofficial-Craigslist-API"
        />
        <ProjectSection
          sectionTitle="8-bit Blackjack"
          color="#3061e3"
          img={blackjack}
          projectDescription="Full feature Blackjack with betting and card rendering. Made using a
            combination of CSS grid and flexbox. Kind of a boring project, but this is the first completely original
            project I came up with/implemented on my own so I keep it around. Plus, I'm a degenerate gambler."
          techStack="HTML, CSS, Javascript."
          liveLink="https://isaac-parks.github.io/BlackJack/"
          codeLink="https://github.com/isaac-parks/BlackJack"
        />
        {/* <ProjectSection
          sectionTitle="Valorant Agents"
          img={valorant}
          projectDescription="Created using Riot Games REST API documentation. Displays
            information about characters from the video game Valorant. Used
            Javascript events to create scroll effect for character selection.
            Currently hosted on GitHub."
          techStack="HTML, CSS, Javascript"
          liveLink="https://isaac-parks.github.io/Valorant-API/"
          codeLink="https://github.com/isaac-parks/Valorant-API"
        /> */}
      </div>
    </div>
  );
}
