function Servicestemp({ icon, title, description, link }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* Render icon */}
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem", textAlign: "center" }}>{icon}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>
      </div>

      <div className="card-body">
        <a href={link} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Servicestemp;
