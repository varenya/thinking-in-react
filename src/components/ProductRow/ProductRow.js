function ProductRow(props) {
  return (
    <div>
      <span>{props.product_name}</span> {props.product_price}
    </div>
  );
}

export { ProductRow };
