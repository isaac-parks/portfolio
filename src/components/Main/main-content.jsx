import React from "react";
import Section from "./main-content-section";
import { useEffect } from "react";
import main from "../../webgl/main";
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
        paragraph="I spend like 90% of my time working on projects while doing full-stack web development full-time. 
        I also have 7 kids. That was a joke. But not about the projects. I have a lot of those. I'm into building stuff like bread board computers, bootloaders, 
        or implementing multi-layer perceptron models."
        btnClass="seework"
        btnText="My Projects"
        color="#3061E3"
        btnLink="/projects"
      />

      <Section
        title="Blog"
        titleClass="work"
        paragraph="Oh what is there to say. I am a self-taught developer who got into it because I wanted to learn more about how computers work.
        I love plants and could tell you a bunch of random information about them you don't care to hear. Did you know Venus Fly Traps are endemic to North Carolina?
        I enjoy tennis, running, and pretty much anything related to exercise. I like nature, being outside, camping, hiking and all that stuff.
        I play piano, although I don't play as much as I'd like to anymore. I also fly airplanes!
        Occasionally, I write/make videos about stuff on my mind, so I'll direct you to that now. I add and remove stuff often, so savor it while it lasts."
        btnClass="seework"
        btnText="Blog"
        color="#DA2528"
        btnLink="/blog"
      />
      <Section
        title="Contact Me"
        titleClass="work"
        paragraph="hmu"
        color="#F1B000"
        btnText="Let's Connect"
        btnClass="seework"
        btnLink="/contact"
      />
    </main>
  );
}
