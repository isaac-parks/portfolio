import coding from "../../images/coding.png";
import isaac from "../../images/isaac.png";
import airplane from "../../images/ppl.png";
import { useEffect } from "react";
import BlogPreview from "./blog-preview";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog">
      <div className="articles">
        <BlogPreview
          articleLink="/blog/ppl"
          previewImage={airplane}
          title="The time I became a pilot"
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
