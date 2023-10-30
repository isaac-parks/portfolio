import Buttons from "./btns";
import { Link } from "react-router-dom";
import personalLogo from "../../images/personal-logo.png";
export default function Header({
  logo,
  toggleMenu,
  burger,
  toggleTheme,
  showMenu,
  sun,
  themeColor,
}) {
  return (
    <header id="header" className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="" className="personal-logo" />
          {/* <img src={logo} alt="" className="logo" /> */}
          <h1 style={{ backgroundColor: "transparent" }}>Isaac Parks</h1>
        </div>
      </Link>
      <ul className={showMenu}>
        <li id="first">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Buttons
        burger={burger}
        toggleTheme={toggleTheme}
        toggleMenu={toggleMenu}
        sun={sun}
        themeColor={themeColor}
      />
    </header>
  );
}
