import logo from "../../images/logo.png";
import burger from "../../images/burger.png";
import sun from "../../images/sun.png";
import { Link } from "react-router-dom";
export default function Header({ onClick, showMenu }) {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
          <h1>Isaac Parks</h1>
        </div>
      </Link>
      <div className="buttons">
        <input type="image" src={sun} alt="Color Mode" />
        <input onClick={onClick} type="image" src={burger} alt="Menu" />
      </div>
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
        <Link to="/projects">
          <li>
            <a href="#">Contact</a>
          </li>
        </Link>
      </ul>
    </header>
  );
}
