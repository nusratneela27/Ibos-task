import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Container from "../components/Shared/Container";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="h-screen">
          <Outlet></Outlet>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Root;
