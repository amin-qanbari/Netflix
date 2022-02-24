import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData } from "./components/Products/data";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <Hero/> 
     <Products heading='Choose your favorite' data={productData}/>
    </div>
  );
}

export default App;
