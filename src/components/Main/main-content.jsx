import { useEffect } from "react";
import "./content.css";
export default function Main({ theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section
        className="introduction"
        style={{ backgroundImage: `url(${theme})` }}
      >
        <h1 style={{ color: "#FF8A65", backgroundColor: "transparent" }}>
          Isaac Parks
        </h1>
      </section>
      <p className="professional-summary">
        I'm Isaac. I'm a software engineer with professional experience using
        technologies such as Python, Typescript, Docker, and Amazon Web
        Services. The only thing I love as much as software development (or
        prompting Codex if you're reading this as a recruiter) is flying my 1976
        Piper Cherokee.
      </p>
      <section className="experience">
        <h2>## Experience</h2>
        <p>
          Fullstack Software Engineer III @{" "}
          <a
            href="https://www.linkedin.com/company/imt-insurance/"
            target="blank"
          >
            IMT Insurance
          </a>{" "}
          (Jun 2022, Present)
        </p>
        <p>
          Software Engineer @{" "}
          <a
            href="https://www.linkedin.com/company/worldwide-integrated-supply-chain-solutions"
            target="blank"
          >
            Worldwide Logistics
          </a>{" "}
          (Jan 2022, Jun 2022)
        </p>
        <p>
          Most Dependable Pizza Delivery Guy in History @{" "}
          <a href="https://pizzaranch.com/" target="blank">
            Pizza Ranch
          </a>{" "}
          (Aug 2019, Jan 2022)
        </p>
      </section>
      <section className="skills">
        <h2>## Skills</h2>
        <div className="skill">
          <p style={{ fontWeight: "bold" }}>
            Programming Languages:
            <p style={{ fontWeight: "normal", display: "inline" }}>
              {" "}
              Python, Javascript, Typescript, C#, C, Rust
            </p>
          </p>
        </div>
        <div className="skill">
          <p style={{ fontWeight: "bold" }}>
            Technologies:
            <p style={{ fontWeight: "normal", display: "inline" }}>
              {" "}
              Vue, Django, AWS, Docker, Kubernetes, CI/CD (GitLab, Google Cloud
              Build)
            </p>
          </p>
        </div>
        <div className="skill">
          <p style={{ fontWeight: "bold" }}>
            AI Stuff:
            <p style={{ fontWeight: "normal", display: "inline" }}>
              {" "}
              Cursor, Claude Code, Codex
            </p>
          </p>
        </div>
      </section>
      <section className="airplane">
        <h2>## Airplane</h2>
        <ul>
          <li>PPL SEL IR</li>
          <li>1976 Piper Cherokee (PA-28-140)</li>
          <li>Garmin GNS 430 (WAAS Capable)</li>
        </ul>
      </section>
      <section className="games">
        <h2>## Games</h2>
        <ul>
          <li>Sekiro</li>
          <li>Expedition 33</li>
          <li>Stardew Valley</li>
          <li>Baulder's Gate 3</li>
          <li>Mewgenics</li>
          <li>Arc Raiders</li>
          <li>Hollow Knight: Silksong</li>
          <li>Deadlock</li>
        </ul>
      </section>
    </main>
  );
}
