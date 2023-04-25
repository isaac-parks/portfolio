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
      <h2>// What it does</h2>
      <p>{projectDescription}</p>
      <div className="techstack">
        <h2>// Tech stack</h2>
        <p>{techStack}</p>
        <p className="seecode">
          <LiveProjectLink projectLink={liveLink} />
          <ProjectCodeLink codeLink={codeLink} />
        </p>
      </div>
    </section>
  );
}

function LiveProjectLink({ projectLink }) {
  if (projectLink) {
    return (
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        See it Live.{" "}
      </a>
    );
  }
  return null;
}

function ProjectCodeLink({ codeLink }) {
  if (codeLink) {
    return (
      <a href={codeLink} target="_blank" rel="noopener noreferrer">
        View the Code.
      </a>
    );
  }
  return null;
}
