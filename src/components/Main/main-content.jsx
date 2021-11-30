import React from "react";
import Section from "./main-content-section";
import { useEffect } from "react";
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
        <h1 style={{ color: "#3061E3" }}>Isaac Parks</h1>
        <p>
          <span style={{ color: "red" }}>Front</span>{" "}
          <span style={{ color: "orange" }}>End</span>{" "}
          <span style={{ color: "green" }}>Developer</span>
        </p>
      </section>

      <Section
        titleClass="work"
        title="Projects"
        paragraph="The coolest part about programming is being able to create. 
        It's really amazing to be capable of dreaming up something in my head, 
        and make it happen by talking to a computer! That's pretty incredible when you think about it. 
        This is why I really enjoy creating projects that reflect a piece of myself."
        btnClass="seework"
        btnText="My Projects"
        color="#3061E3"
        btnLink="/projects"
      />

      <Section
        title="About Me"
        titleClass="work"
        paragraph="I do a lot! A crucial part of who I am is based on my love of learning. 
        That's why my skillset has become so diverse - any time I see something that sparks my interest, I learn about it."
        btnClass="seework"
        btnText="Learn More"
        color="#DA2528"
        btnLink="/blog"
      />
      <Section
        title="Contact Me"
        titleClass="work"
        paragraph="I take any chance I can get to expand my network and get to know new people. I love discussing new ideas, and creating opportunities. Let's get in touch! "
        color="#dd8800"
        btnText="Let's Connect"
        btnClass="seework"
        btnLink="/contact"
      />
    </main>
  );
}
