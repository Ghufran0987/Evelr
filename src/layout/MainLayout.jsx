import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
