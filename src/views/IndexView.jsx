import React, { useEffect, useState } from 'react';
import NavbarComponent from '../component/Navbar';
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Listings from './Listing';
import { useSelector } from 'react-redux';
import '../assets/host-layout/assets/css/style.css'
import '../assets/host-layout/assets/css/global.css'
import Header from './HostLayout/Header';
import Sidebar from './HostLayout/SideBar'
import MainComponent from './HostLayout/MainComponent'
function IndexView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { user_type } = useSelector((state) => state.auth);
  const [isHost, setIsHost] = useState(false);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  useEffect(() => {
    console.log(user_type)
    if (user_type === "host") {
      setIsHost(true);
    }
    else{
      setIsHost(false)
    }
  }, [user_type]); // Add user_type as a dependency to avoid unnecessary re-renders

  return (
    <>
      {isHost ? (
        <>
        <Header/>
        <section className='h-dashboard py-3'>
          <div className="container">
            <div className="row">
              <Sidebar />
              <MainComponent/>
            </div>
          </div>
        </section>
        
        </>
      ) : (
        <>
          <NavbarComponent />
          <SearchBar />
          <Category onCategorySelect={handleCategorySelect} />
          <Listings categoryId={selectedCategoryId} />
          <Footer />
        </>
      )}
    </>
  );
}

export default IndexView;
