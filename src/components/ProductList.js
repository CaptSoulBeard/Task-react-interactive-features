// Components
import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
