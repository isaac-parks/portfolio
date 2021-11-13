import { Link } from "react-router-dom";

export default function BlogPreview({ title, previewImage, articleLink }) {
  return (
    <Link to={articleLink}>
      <div className="article-container">
        <article>
          <h4>{title}</h4>
          <img src={previewImage} alt="" />
        </article>
      </div>
    </Link>
  );
}
