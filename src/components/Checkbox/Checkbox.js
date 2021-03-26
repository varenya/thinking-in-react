import { Fragment, useState } from "react";

function Checkbox({ currentValue, handleChange }) {
  return (
    <Fragment>
      <input
        id="stock"
        type="checkbox"
        checked={currentValue}
        onChange={handleChange}
      />
      <label htmlFor="stock">Only show products in stock</label>
    </Fragment>
  );
}

export { Checkbox };
