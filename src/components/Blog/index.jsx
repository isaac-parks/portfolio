import daytrade from "../../images/tesla.png";
import save from "../../images/money.png";
import { useEffect } from "react";
import BlogPreview from "./blog-preview";
import style from "./index.css";
export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog">
      <h1>Hello! 👋🏾</h1>
      <p>
        If you want to learn more about me, or see what I've been up to - <br />
        Check out some of my recent blog posts below!
      </p>
      <div className="articles">
        <BlogPreview
          articleLink="/blog/daytrade"
          previewImage={daytrade}
          title="I Made Enough Money to Pay off College by Day Trading. Here's Why You Shouldn't Do it."
        />
        <BlogPreview
          articleLink="/blog/savemoney"
          previewImage={save}
          title="3 Quick Ways to Start Saving Money"
        />
      </div>
    </div>
  );
}
