import isaac from "../../images/isaac.jpg";
import style from "./article.css";
export default function BlogPost({ title, articleImage, date, content }) {
  return (
    <div className="post-container">
      <section className="title">
        <h1>{title}</h1>
      </section>
      <section className="article-image-container">
        <img src={articleImage} alt="" />
      </section>
      <section className="author-date">
        <div className="author">
          <img src={isaac} alt="" />
          <p>By Isaac Parks</p>
        </div>
        <div className="date">
          <p>
            <em>{date}</em>
          </p>
        </div>
      </section>
      <section className="content">
        <p>{content}</p>
      </section>
    </div>
  );
}
