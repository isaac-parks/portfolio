import BlogPost from "./blog-post";
import { useEffect } from "react";
import text from "./article-text";
import airplane from "../../images/ppl.png";

export default function PilotArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <BlogPost
      date="Feb 02, 2026"
      articleImage={airplane}
      title="I became a pilot"
      content={text.pilot()}
    />
  );
}
