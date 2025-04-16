import React from "react";
import ProductList from "./ProductList";
import Header from "./Header.js";


export const Home = (props) => {
  const {showAlert} = props;

  return <div>  
    <Header showAlert={showAlert}/>
    <ProductList showAlert={showAlert} />

            
     
  </div>
};

export default Home;
