function ProductRow(props) {
  return (
    <tr>
      <td className="text-left px-2 py-2">{props.product_name}</td>
      <td className="text-left px-2 py-2">{props.product_price}</td>
    </tr>
  );
}

export { ProductRow };
