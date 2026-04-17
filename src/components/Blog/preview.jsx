export default function Preview({ link, count, date, title, postPreview }) {
  return (
    <a href={link}>
      <section className="preview">
        <p className="preview_count">{count}</p>
        <div className="post">
          <h4>{title}</h4>
          <p>{postPreview}</p>
        </div>
        <div className="date">{date}</div>
      </section>
    </a>
  );
}
