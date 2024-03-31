import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from '../component/Navbar';
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Listings from './Listing';
function IndexView({ handleClose }) {


  return (
    <>
       <NavbarComponent/>
       <SearchBar/>
       <Category/>
       <Listings/>
        <Footer/>
        
    </>
 
  );
}

export default IndexView;
