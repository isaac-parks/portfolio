import Buttons from "./btns";
import { Link } from "react-router-dom";
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
        <li id="first">
          <Link to="/">
            <a href="#">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a href="#">Projects</a>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <a href="#">Blog</a>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <a href="#">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
