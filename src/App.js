
import React from "react";
// import { Carousel } from "react-bootstrap";
import CarrouselC from "./Components/Carrousel/Carrousel";
import Footer from "./Components/Footer/Footer";
import NavbarC from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
  const App = () => {
  return (
    <div className="App"> 
      <NavbarC/>
      <CarrouselC/>
      <ProductList/>
      <Footer/>
    </div>
  );
};

export default App;
