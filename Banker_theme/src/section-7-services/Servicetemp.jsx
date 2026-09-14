function Servicestemp({ icon, title, description, link }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/*link code line here*/}
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
