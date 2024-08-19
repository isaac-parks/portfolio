import daytrade from "../../images/tesla.png";
import save from "../../images/money.png";
import coding from "../../images/coding.png";
import isaac from "../../images/isaac.png";
import lowlevelthoughts from "../../images/lowlevelthoughts.png";
import { useEffect } from "react";
import BlogPreview from "./blog-preview";
import style from "./index.css";
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
          articleLink="/blog/etude"
          previewImage={isaac}
          title="Etude"
        />
        <BlogPreview
          articleLink="/blog/coding"
          previewImage={coding}
          title="How I found my Passion in Coding"
        />
        {/* <BlogPreview
          articleLink="/blog/daytrade"
          previewImage={daytrade}
          title="I Love Day Trading - Here's Why You Shouldn't Do it"
        /> */}
        {/* <BlogPreview
          articleLink="/blog/savemoney"
          previewImage={save}
          title="3 Quick Ways to Start Saving Money"
        /> */}
      </div>
    </div>
  );
}
