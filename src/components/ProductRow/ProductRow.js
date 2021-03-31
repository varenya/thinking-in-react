import "./productrow.css";

function ProductRow(props) {
  return (
    <div>
      <span className={props.stocked ? "" : "is-not-stocked"}>
        {props.product_name}
      </span>{" "}
      {props.product_price}
    </div>
  );
}

export { ProductRow };
