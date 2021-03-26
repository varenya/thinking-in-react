import { Fragment, useState } from "react";
import "./App.css";
import { products } from "./api";
import { groupBy } from "./utility";
import { SearchBar } from "./components/SearchBar";
import { Checkbox } from "./components/Checkbox";
import { ProductRow } from "./components/ProductRow";

const productsByCategory = groupBy(products, "category");

function App() {
  const [searchText, setSearchText] = useState("");
  const [isChecked, setChecked] = useState(false);

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  function toggleChecked() {
    setChecked((prevValue) => !prevValue);
  }
  return (
    <div className="app">
      <section className="search">
        <SearchBar
          searchText={searchText}
          handleSearchText={handleSearchText}
        />
      </section>
      <section className="in_stock">
        <Checkbox currentValue={isChecked} handleChange={toggleChecked} />
      </section>
      <section className="product-list">
        <h1>Name Price</h1>
        {Object.keys(productsByCategory).map((category) => {
          let currentProductList = productsByCategory[category];
          return (
            <Fragment>
              <h2>{category}</h2>
              {currentProductList.map(({ name, price }) => (
                <ProductRow product_name={name} product_price={price} />
              ))}
            </Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default App;
