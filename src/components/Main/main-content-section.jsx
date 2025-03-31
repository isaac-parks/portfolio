import { Link } from "react-router-dom";
export default function Section({
  title,
  titleClass,
  paragraph,
  btnClass,
  btnText,
  btnLink,
  color,
}) {
  return (
    <section className={titleClass}>
      <h2 style={{ color: color }}>{title}</h2>
      <p>{paragraph}</p>
      <Link to={btnLink} style={{ textDecoration: "none" }}>
        <button
          href={btnLink}
          style={{
            backgroundColor: color,
            border: "1px solid",
            color: "white",
            minWidth: "120px"
          }}
          className={btnClass}
        >
          {btnText}
        </button>
      </Link>
    </section>
  );
}
