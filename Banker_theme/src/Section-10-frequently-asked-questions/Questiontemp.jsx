function Questiontemp({ query1, description1, query2, description2 }) {
  return (
    <div className="container text-center">
      <div className="row g-2">
        <div className="col-6">
          <div className="p-3">
            <h3>{query1}</h3>
            <p>{description1}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3">
            <h3>{query2}</h3>
            <p>{description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questiontemp;
