// import style from "./contact.css";
import email from "../../images/email.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
export default function Contact() {
  return (
    <div className="contact-container">
      <section className="socials-container">
        <ul className="social-links">
          <li>
            <img id="github" src={email} alt="" />
            <a href="mailto: isaacparks1800@gmail.com">
              isaacparks1800@gmail.com
            </a>
          </li>
          <li>
            <img id="github" src={github} alt="" />
            <a
              href="https://github.com/isaac-parks"
              style={{ color: "#FF1400" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/isaac-parks
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
              linkedin.com/in/isaac-parks
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
