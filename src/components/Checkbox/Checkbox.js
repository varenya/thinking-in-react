import { Fragment } from "react";

function Checkbox({ currentValue, handleChange }) {
  return (
    <Fragment>
      <input
        id="stock"
        class="mr-2"
        type="checkbox"
        checked={currentValue}
        onChange={handleChange}
      />
      <label htmlFor="stock">Only show products in stock</label>
    </Fragment>
  );
}

export { Checkbox };
