import { useEffect } from "react";
import Preview from "./preview";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog">
      <div className="articles">
        <Preview
          date="10"
          count="1"
          link="/blog/ppl"
          title="The time I became a pilot"
          postPreview="hello"
        />
        <Preview
          count="2"
          date="10"
          link="/blog/etude"
          title="Etude"
          postPreview="hello"
        />
        <Preview
          count="3"
          date="10"
          articleLink="/blog/coding"
          title="How I found my Passion in Coding"
          postPreview="Hello"
        />
      </div>
    </div>
  );
}
