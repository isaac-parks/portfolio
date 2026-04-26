import Section from "./main-content-section";
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
        <h1 style={{ color: "#3061E3", backgroundColor: "transparent" }}>
          Isaac Parks
        </h1>
        <p style={{ backgroundColor: "transparent" }}>
          <span style={{ color: "#FF1400", backgroundColor: "transparent" }}>
            Soft
            <span style={{ color: "#F1B000", backgroundColor: "transparent" }}>
              ware
            </span>{" "}
          </span>{" "}
          <span style={{ color: "green", backgroundColor: "transparent" }}>
            Developer
          </span>
        </p>
      </section>

      <Section
        titleClass="work"
        title="Projects"
        paragraph="All the cool things I work in in my spare time. I've built stuff like breadboard computers, 
        basic multi-layer perceptron models, OpenGL games, and more."
        btnClass="seework"
        btnText="My Projects"
        color="#3061E3"
        btnLink="/projects"
      />

      <Section
        title="Blog"
        titleClass="work"
        paragraph="TLDR - I am a self-taught developer who got into it because I wanted to learn more about how computers work.
        I love plants and could tell you a bunch of random information about them you don't care to hear. (Did you know Venus Fly Traps are endemic to North Carolina?)
        I enjoy tennis, running, and pretty much anything related to exercise. I like nature, being outside, camping, hiking and all that stuff.
        I play piano, although I don't play as much as I'd like to anymore. I also fly airplanes and own a 1976 Piper Cherokee!"
        btnClass="seework"
        btnText="Blog"
        color="#DA2528"
        btnLink="/blog"
      />
    </main>
  );
}
