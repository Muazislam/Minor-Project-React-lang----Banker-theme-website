function Blogcard({ img, title, description, externalLink, author, date, newsLink }) {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{author}</li>
            <li className="list-group-item">{date}</li>
            <li>
              <a href={newsLink} className="card-link">
                News
              </a>
            </li>
          </ul>

          <p className="card-text">
            {description}
          </p>
        </div>

        <div className="card-body">
          <a href={externalLink} className="card-link">
            Continue Reading...
          </a>
        </div>
      </div>
  );
}

export default Blogcard;
