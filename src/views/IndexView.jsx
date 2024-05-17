import React, { useState } from 'react';
import NavbarComponent from '../component/Navbar';
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Listings from './Listing';

function IndexView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <NavbarComponent />
      <SearchBar />
      <Category onCategorySelect={handleCategorySelect} />
      <Listings categoryId={selectedCategoryId} />
      <Footer />
    </>
  );
}

export default IndexView;
