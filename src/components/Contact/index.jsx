import style from "./contact.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Don't be shy! 😉 </h1>
      <section className="professional-box">
        <p>
          The fastest way to reach me is my email! (No way this guy is a Gen Z!){" "}
        </p>
        <a href="mailto: isaacparks1800@gmail.com">isaacparks1800@gmail.com</a>
      </section>
      <section className="socials-container">
        <h2>Or find me on the web...</h2>
        <ul className="social-links">
          <li>
            <img id="github" src={github} alt="" />
            <a
              href="https://github.com/isaac-parks"
              style={{ color: "#FF1400" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              @isaac-parks
            </a>
          </li>

          <li>
            <img src={linkedin} alt="" />
            <a
              href="https://www.linkedin.com/in/isaac-parks-4902691b6/"
              target="_blank"
              style={{ color: "green" }}
              rel="noopener noreferrer"
            >
              @Isaac Parks
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
