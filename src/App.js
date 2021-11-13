import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Main from "./components/Main/main-content";
import Projects from "./components/Projects/projects";
import Blog from "./components/Blog";
import Article1 from "./components/Blog/article1";
import Footer from "./components/Footer/footer";
import styles from "./index.css";
import content from "./components/Main/content.css";
import header from "./components/Header/header.css";
import footer from "./components/Footer/footer.css";

export default function App() {
  const [menu, setMenu] = useState(false);
  function showMenu(e) {
    e.stopPropagation();
    setMenu(!menu);
  }

  window.addEventListener("click", (e) => {
    if (menu) showMenu(e);
  });

  return (
    <>
      <Header
        showMenu={menu ? "menu show" : "menu"}
        onClick={(e) => showMenu(e)}
      />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="blog/daytrade" element={<Article1 />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}
