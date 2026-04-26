import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Main from "./components/Main/main-content";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog";
import PassionInCoding from "./components/Blog/passion";
import Etude from "./components/Blog/etude";
import day from "./images/daywallpaper.png";
import night from "./images/nightwallpaper.jpg";
import afterdark from "./images/afterdark-logo.png";
import daylogo from "./images/personal-logo.png";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import burgerlight from "./images/burger-light.png";
import burger from "./images/burger.png";
import Contact from "./components/Contact";
import Footer from "./components/Footer/footer";
import "./main.css";
import PilotArticle from "./components/Blog/pilot-article";

export default function App() {
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      document.getElementById("colorBtn").click();
    }
  }, []);
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  function toggleMenu(e) {
    e.stopPropagation();
    setMenu(!menu);
  }

  function toggleTheme(event) {
    const colorButton = event.target;
    colorButton.classList.add("colorBtnTransition");
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").style.backgroundColor = "#f0e7db";
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("html").style.backgroundColor = "black";
      localStorage.setItem("theme", "dark");
    }
    setTimeout(() => {
      colorButton.classList.remove("colorBtnTransition");
    }, 100);
  }
  window.addEventListener("click", (e) => {
    if (menu) toggleMenu(e);
  });

  return (
    <div className={theme}>
      <div className="content-wrapper">
        <Header
          logo={(theme === "dark" && afterdark) || daylogo}
          showMenu={menu ? "menu show" : "menu"}
          toggleMenu={(e) => toggleMenu(e)}
          toggleTheme={toggleTheme}
          burger={(theme === "dark" && burger) || burgerlight}
          sun={(theme === "dark" && sun) || moon}
          themeColor={(theme === "dark" && "#f0e7db") || "black"}
        />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<Main theme={(theme === "dark" && night) || day} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="blog/coding"
              element={
                <PassionInCoding
                  color={(theme === "dark" && "white") || "black"}
                />
              }
            ></Route>
            <Route
              path="blog/etude"
              element={
                <Etude color={(theme === "dark" && "white") || "black"} />
              }
            ></Route>
            <Route
              path="blog/ppl"
              element={
                <PilotArticle
                  color={(theme === "dark" && "white") || "black"}
                />
              }
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
