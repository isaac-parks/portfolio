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
            border: "3px solid grey",
            color: "white",
          }}
          className={btnClass}
        >
          {btnText}
        </button>
      </Link>
    </section>
  );
}
