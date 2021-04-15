import { Fragment, useState, useEffect } from "react";
import "./App.css";
import { groupBy } from "./utility";
import { SearchBar } from "./components/SearchBar";
import { Checkbox } from "./components/Checkbox";
import { ProductRow } from "./components/ProductRow";

const PRODUCT_LIST_URL = `/products`;

function App() {
  const [searchText, setSearchText] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [status, setStatus] = useState("INITIAL");
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    try {
      setStatus("LOADING");
      const serverProductList = await fetch(`${PRODUCT_LIST_URL}`).then((res) =>
        res.json()
      );
      setProductList(serverProductList);
      setStatus("DONE");
    } catch (e) {
      setStatus("ERROR");
    }
  }

  async function searchProducts(searchText) {
    setStatus("LOADING");
    try {
      const serverProductList = await fetch(
        `${PRODUCT_LIST_URL}/${searchText}`
      ).then((res) => res.json());
      setProductList(serverProductList);
      setStatus("DONE");
    } catch (e) {
      setStatus("ERROR");
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const productsByCategory = groupBy(productList, "category");

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  function toggleChecked() {
    setChecked((prevValue) => !prevValue);
  }

  function handleAsyncSearch() {
    searchProducts(searchText);
  }

  /*   
      isChecked stocked 
        true     true  ->   hide not stocked products
        true     false ->   show all 
        false    true  -> do nothing
        false    false -> do nothing
  */
  if (status === "INITIAL" || status === "LOADING") {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="app">
      <section className="search flex">
        <SearchBar
          searchText={searchText}
          handleSearchText={handleSearchText}
        />
        <button onClick={handleAsyncSearch}>Search</button>
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
              {currentProductList.map(({ name, price, stocked }) =>
                isChecked && !stocked ? null : (
                  <ProductRow
                    product_name={name}
                    product_price={price}
                    stocked={stocked}
                  />
                )
              )}
            </Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default App;
