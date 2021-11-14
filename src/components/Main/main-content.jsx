import React from "react";
import Section from "./main-content-section";
import logo2 from "../../images/logo.jpg";
import casino from "../../images/casino.jpg";
import greenhill from "../../images/greenhill.png";
import { Link } from "react-router-dom";
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
          <span style={{ color: "red" }}>Developer</span>{" "}
          <span style={{ color: "orange" }}>Designer</span>{" "}
          <span style={{ color: "green" }}>Marketer</span>
        </p>
      </section>
      <Section
        titleClass="work"
        title="Work"
        paragraph="The coolest part about programming is being able to create. I have the capability of dreaming up something in my head, and manifesting it by talking to a computer! That's pretty incredible when you think about it. It's important to me that my projects reflect a piece of myself."
        btnClass="seework"
        btnText="My Projects"
        color="#3061E3"
        btnLink="/projects"
      />
      <Section
        title="About Me"
        titleClass="work"
        paragraph="It has always been amazing to me how much of our world is based on
    computers. From the light in our refrigerators to the Perseverance Rover on
    Mars, the world of programming is vast and complex. Every line of code I
    write is a puzzle piece in understanding that complexity."
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
