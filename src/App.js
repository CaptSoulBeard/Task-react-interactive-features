import { useState } from "react";
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
//styling
import "./App.css";

function App() {
  const [product, setProduct] = useState("");

  const [theme, setTheme] = useState("theme");

  return (
    <div className={theme}>
      <Home setTheme={setTheme} theme={theme} />
      <ProductList setProduct={setProduct} />
      <Detail product={product} />
    </div>
  );
}

export default App;
