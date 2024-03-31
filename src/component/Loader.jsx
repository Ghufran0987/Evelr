import React from "react";
import { Spinner } from "reactstrap";
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Loader = ({ isLoading = false }) => {
  return (
    <div className={`spinner-backdrop ${isLoading ? "show" : ""}`}>
      <Spinner
        color="light"
        style={{
          height: "3rem",
          width: "3rem"
        }}
      />
    </div>
  );
};

export default Loader;
