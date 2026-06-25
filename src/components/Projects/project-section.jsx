import parse from "html-react-parser";
export default function ProjectSection({
  sectionTitle,
  color,
  img,
  projectDescription,
  techStack,
  liveLink,
  codeLink,
}) {
  return (
    <section className="project-section">
      <h4 style={{ color: color }}>{sectionTitle}</h4>
      <img src={img} alt={`${sectionTitle} project`} />
      <h2>// What is it?</h2>
      <p>{parse(projectDescription)}</p>
      <div className="techstack">
        <h2>// Tech stack</h2>
        <p>{techStack}</p>
        <p className="seecode">
          <LiveProjectLink projectLink={liveLink} color={color} />
          <ProjectCodeLink codeLink={codeLink} color={color} />
        </p>
      </div>
    </section>
  );
}

function LiveProjectLink({ projectLink, color }) {
  if (projectLink) {
    return (
      <a
        style={{ color: color }}
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        See it Live.{" "}
      </a>
    );
  }
  return null;
}

function ProjectCodeLink({ codeLink, color }) {
  if (codeLink) {
    return (
      <a
        style={{ color: color }}
        href={codeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View the Code.
      </a>
    );
  }
  return null;
}
