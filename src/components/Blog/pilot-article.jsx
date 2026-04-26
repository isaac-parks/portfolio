import BlogPost from "./blog-post";
import { useEffect } from "react";
import text from "./article-text";
import airplane from "../../images/ppl.png";

export default function PilotArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <BlogPost
        date="April 25, 2023"
        articleImage={airplane}
        title="The time I became a pilot"
      />
      {text.pilot()}
    </>
  );
}
