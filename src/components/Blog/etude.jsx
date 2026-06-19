import { useEffect } from "react";
import text from "./article-text.jsx";
import isaac from "../../images/isaac.png";
import BlogPost from "./blog-post.jsx";
export default function Etude() {
  return (
    <>
      <BlogPost
        date="April 25, 2023"
        articleImage={isaac}
        title="Etude"
        content={text.etude()}
      />
    </>
  );
}
