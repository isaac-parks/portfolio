import { useEffect } from "react";
import Preview from "./preview";
import text from './article-text.jsx'

function getPreview(fullJsx) {
  return String(fullJsx.props.children[0]).slice(0, 100) + ' ... '
}

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
          link="/blog/coding"
          title="How I found my Passion in Coding"
          postPreview={getPreview(text.coding('blue'))}
        />
      </div>
    </div>
  );
}
