import { Link } from "react-router-dom";

export default function BlogPreview({
  title,
  previewImage,
  articleLink,
  renderVideo = false,
}) {
  return renderVideo
    ? videoPreview({ title, previewImage, articleLink })
    : articlePreview({ title, previewImage, articleLink });
}

function videoPreview(props) {
  return (
    <a href={props.articleLink} target="_blank">
      <div className="article-container">
        <article>
          <h4>{props.title}</h4>
          <img src={props.previewImage} alt="" />
        </article>
      </div>
    </a>
  );
}

function articlePreview(props) {
  return (
    <Link to={props.articleLink}>
      <div className="article-container">
        <article>
          <h4>{props.title}</h4>
          <img src={props.previewImage} alt="" />
        </article>
      </div>
    </Link>
  );
}
