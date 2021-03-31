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
    <div className="flex justify-center items-center w-screen h-screen bg-primary">
      <div class="w-1/2 bg-white p-8 rounded-md shadow-xl">
        <SearchBar
          searchText={searchText}
          handleSearchText={handleSearchText}
        />
        <section className="flex items-center my-4 justify-center">
          <Checkbox currentValue={isChecked} handleChange={toggleChecked} />
        </section>
        <table className="border-2 border-secondary p-4 rounded-md w-full">
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
          </tr>
          {Object.keys(productsByCategory).map((category) => {
            let currentProductList = productsByCategory[category];
            return (
              <Fragment>
                <tr>
                  <td
                    className="text-bold italic"
                    style={{ backgroundColor: "#ece8e8" }}
                    colspan="2"
                  >
                    {category}
                  </td>
                </tr>
                {currentProductList.map(({ name, price }) => (
                  <ProductRow product_name={name} product_price={price} />
                ))}
              </Fragment>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
