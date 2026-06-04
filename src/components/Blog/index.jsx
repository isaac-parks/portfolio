import { useEffect } from "react";
import Preview from "./preview";
import text from "./article-text.jsx";

function getPreview(fullJsx) {
  return String(fullJsx.props.children[0]).slice(0, 100) + " ... ";
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blog">
      <div className="articles">
        <Preview
          count="1"
          date="2026-06-13"
          link="/blog/psychosis"
          title="AI Psychosis"
          postPreview={getPreview(text.ai_slop())}
        />
        <Preview
          date="2026-02-01"
          count="2"
          link="/blog/ppl"
          title="I became a pilot"
          postPreview={getPreview(text.pilot())}
        />
        <Preview
          count="3"
          date="2023-04-25"
          link="/blog/etude"
          title="Etude"
          postPreview={getPreview(text.etude())}
        />
        <Preview
          count="4"
          date="2021-11-21"
          link="/blog/coding"
          title="How I found my Passion in Coding"
          postPreview={getPreview(text.coding())}
        />
      </div>
    </div>
  );
}
