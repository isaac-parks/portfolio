import { useEffect } from "react";
import css from "../../images/css-logo.png";
import blackjack from "../../images/blackjack-ss.jpg";
import mlp from "../../images/mlp.jpg";
import projects from "./projects.css";
import ProjectSection from "./project-section";
import rust from "../../images/rust.png";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects transition">
      <div className="footer-header">
        <h1>This is what I've been working on.</h1>
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
          <li>Not C++.</li>
          <li>Rust, man I love rust.</li>
          <li>
            Assembly. Don't ask me to write anything in assembly because I will
            not do it, but I wrote a VERY basic program in AVR assembly for a
            microcontroller, and it actually worked which is a flex, so I'm
            putting it on here.
          </li>
          <li>Relational Databases.</li>
          <li>AWS.</li>
          <li>Operating System Development (Linux = 🐐)</li>
          <li>
            Hardware and Software Communcation protocols and how to approach
            learning new ones.
          </li>
          <li>Electricity.</li>
        </ul>
      </div>

      <div className="projects-container">
        <ProjectSection
          sectionTitle="Rust Websocket Library"
          color="rgb(241, 176, 0)"
          img={rust}
          projectDescription={`A hand-baked implementation of <a href="https://datatracker.ietf.org/doc/html/rfc6455">the websocket protocol</a> using no (websocket related) external dependencies (I did not feeling like writing a hasher 💤). The goal is to keep it light so that it can run on a Raspberry Pi.`}
          techStack="Rust."
          codeLink="https://github.com/isaac-parks/rust-websocket"
        />
        <ProjectSection
          sectionTitle="Multi-Layer Perceptron (OpenAIsaac)"
          color="#936bdb"
          img={mlp}
          projectDescription={`An implementation of a multi-layer perceptron neural network architecture based on the famous 2003 research paper <a href="https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf">A Neural Probalistic Language Model</a>. The general purpose of it is to generate text with similar patterns given a set of input text. In the repo, I'm using it as a fake name generator, but it can be used for any type of input text. Please keep in mind that I am not Sam Altman and this puppy is not GPT 🤠. It's far from perfect, but has been a lot of fun and super fascinating.`}
          techStack="Python, Pytorch, Matplotlib, Jupyter Notebook."
          codeLink="https://github.com/isaac-parks/OpenAIsaac"
        />
        <ProjectSection
          sectionTitle="8-bit Blackjack"
          color="#3061e3"
          img={blackjack}
          projectDescription="Full feature Blackjack with betting and card rendering. Made using a
            combination of CSS grid and flexbox. Kind of a boring project, but this is the first completely original
            project I came up with/implemented on my own so I keep it around. I recently refactored it to use a game loop in hopes of building a rust backend for it."
          techStack="HTML, CSS, Javascript."
          liveLink="https://isaac-parks.github.io/BlackJack/"
          codeLink="https://github.com/isaac-parks/BlackJack"
        />
      </div>
    </div>
  );
}
