import BlogPost from "./blog-post";
import { useEffect } from "react";
import text from "./article-text";
import spaceodyssey from "../../images/spaceodyssey.jpg";

export default function SlopArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <BlogPost
      date="Jun 03, 2026"
      articleImage={spaceodyssey}
      title="AI Psychosis"
      content={text.ai_slop()}
    />
  );
}
