import Button from "../Button/Button";
function Pricingcard({ model, price, feat1, feat2, feat3, feat4, feat5 }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{model}</h5>
        <h5 className="card-title">{price}</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{feat1}</li>
          <li className="list-group-item">{feat2}</li>
          <li className="list-group-item">{feat3}</li>
          <li className="list-group-item">{feat4}</li>
          <li className="list-group-item">{feat5}</li>
        </ul>
      </div>

      <Button />
    </div>
  );
}

export default Pricingcard;
