import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Container from "../components/Shared/Container";
import { ProductProvider } from "../components/context/ProductContext";
import { CartProvider } from "../components/context/CartContext";

const Root = () => {
  return (
    <div>
      <ProductProvider>
        <CartProvider>
          <Navbar></Navbar>
          <Container>
            <Outlet></Outlet>
          </Container>
        </CartProvider>
      </ProductProvider>
      <Footer></Footer>
    </div>
  );
};

export default Root;
