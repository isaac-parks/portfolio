import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Main from "./components/Main/main-content";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog";
import Article1 from "./components/Blog/article1";
import Article2 from "./components/Blog/article2";
import casino from "./images/casino.jpg";
import greenhill from "./images/greenhill.png";
import logo from "./images/logo.png";
import logolight from "./images/logo-light.png";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import burgerlight from "./images/burger-light.png";
import burger from "./images/burger.png";
import Contact from "./components/Contact";
import Footer from "./components/Footer/footer";
import styles from "./index.css";
import content from "./components/Main/content.css";
import header from "./components/Header/header.css";
import footer from "./components/Footer/footer.css";

export default function App() {
  const [menu, setMenu] = useState(false);
  //true = dark false = light
  const [theme, setTheme] = useState("dark");

  function toggleMenu(e) {
    e.stopPropagation();
    setMenu(!menu);
  }

  function toggleTheme(e) {
    e.target.classList.add("colorBtnTransition");
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").style.backgroundColor = "#f0e7db";
    } else {
      setTheme("dark");
      document.querySelector("html").style.backgroundColor = "black";
    }
    setTimeout(() => {
      e.target.classList.remove("colorBtnTransition");
    }, 100);
  }
  window.addEventListener("click", (e) => {
    if (menu) toggleMenu(e);
  });

  return (
    <div className={theme}>
      <div className="content-wrapper">
        <Header
          logo={(theme === "dark" && logo) || logolight}
          showMenu={menu ? "menu show" : "menu"}
          toggleMenu={(e) => toggleMenu(e)}
          toggleTheme={(e) => toggleTheme(e)}
          burger={(theme === "dark" && burger) || burgerlight}
          sun={(theme === "dark" && sun) || moon}
          themeColor={(theme === "dark" && "yellow") || "#946cdc"}
        />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Main theme={(theme === "dark" && casino) || greenhill} />
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="blog/daytrade" element={<Article1 />}></Route>
            <Route path="blog/savemoney" element={<Article2 />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
