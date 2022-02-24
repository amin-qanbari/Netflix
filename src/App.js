import React from "react";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <Hero/> 
    </div>
  );
}

export default App;
