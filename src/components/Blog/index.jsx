import coding from "../../images/coding.png";
import isaac from "../../images/isaac.png";
import golearn from "../../images/go-learn.png";
import { useEffect } from "react";
import BlogPreview from "./blog-preview";
import _ from "./index.css";
export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog">
      <h1>
        Hello!{" "}
        <span style={{ fontSize: "5px" }}>
          (insert generic developer wave emoji here)
        </span>
      </h1>
      <p>
        If you want to learn more about me, or see what I've been up to - <br />
        Check out some of my recent blog posts below!
      </p>
      <div className="articles">
        <BlogPreview
          title="Go learn something cool"
          previewImage={golearn}
          articleLink="https://www.youtube.com/watch?v=Lks7PXja7J4"
          renderVideo
        />
        <BlogPreview
          articleLink="/blog/etude"
          previewImage={isaac}
          title="Etude"
        />
        <BlogPreview
          articleLink="/blog/coding"
          previewImage={coding}
          title="How I found my Passion in Coding"
        />
      </div>
    </div>
  );
}
