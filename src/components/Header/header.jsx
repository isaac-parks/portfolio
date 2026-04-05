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
      <div id="logo-container">
        <Link to="/">
          <img id="header-logo" src={logo} alt="" className="personal-logo" />
          <h1 style={{ backgroundColor: "transparent" }}>Isaac Parks</h1>
        </Link>
      </div>

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
