import logo from "../../images/logo.png";
import Buttons from "./btns";
import { Link } from "react-router-dom";
export default function Header({
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
          <img src={logo} alt="" className="logo" />
          <h1>Isaac Parks</h1>
        </div>
      </Link>
      <Buttons
        burger={burger}
        toggleTheme={toggleTheme}
        toggleMenu={toggleMenu}
        sun={sun}
        themeColor={themeColor}
      />
      <ul className={showMenu}>
        <Link to="/">
          <li id="first">
            <a href="#">Home</a>
          </li>
        </Link>
        <Link to="/projects">
          <li>
            <a href="#">Projects</a>
          </li>
        </Link>
        <Link to="/blog">
          <li>
            <a href="#">Blog</a>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <a href="#">Contact</a>
          </li>
        </Link>
      </ul>
    </header>
  );
}
