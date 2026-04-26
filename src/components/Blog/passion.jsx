import coding from "../../images/coding.png";
import BlogPost from "./blog-post.jsx";
import text from "./article-text.jsx";
export default function PassionInCoding() {
  return (
    <BlogPost
      title="How I Found My Passion in Coding"
      articleImage={coding}
      date="November 21, 2021"
      content={text.coding()}
    />
  );
}
