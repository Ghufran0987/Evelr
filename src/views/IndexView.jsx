import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from '../component/Navbar';
import Footer from '../component/Footer';

function IndexView({ handleClose }) {


  return (
    <>
       <NavbarComponent/>
        <Footer/>
        
    </>
 
  );
}

export default IndexView;
