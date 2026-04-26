import BlogPost from "./blog-post";
import { useEffect } from "react";
import text from "./article-text";
export default function PilotArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
    {text.pilot}
    </>
  )
}
