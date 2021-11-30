import isaac from "../../images/isaac.jpg";
import style from "./article.css";
export default function BlogPost({ title, articleImage, date }) {
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
          <img src={isaac} alt="isaacparks" />
          <p>By Isaac Parks</p>
        </div>
        <div className="date">
          <p>
            <em>{date}</em>
          </p>
        </div>
      </section>
    </div>
  );
}
