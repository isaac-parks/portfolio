import style from "./contact.css";
export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Don't be shy! </h1>
      <section className="professional-box">
        <a href="mailto: isaacparks1800@gmail.com">isaacparks1800@gmail.com</a>
      </section>
      <section className="socials-container">
        <h2>Or find me on the web...</h2>
        <ul className="social-links">
          <li>
            <a href="https://github.com/indoorike" target="_blank">
              @indoorike
            </a>
          </li>
          <li>
            <a href="https://twitter.com/isaacwithaspace" target="_blank">
              @isaacwithaspace
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/isaacwithaspace/"
              target="_blank"
            >
              @isaacwithaspace
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
