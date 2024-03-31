import React, { useState } from 'react';
import Nearme from '../assets/images/near-me.svg';
import Appartment from '../assets/images/appartment.png';
import Cottage from '../assets/images/cottage.svg';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Category() {
  const [activeLink, setActiveLink] = useState('Trending'); // State to manage active link

  // Function to handle link click
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="nav-scroller">
          {/* Left scroll button */}
          <button
            type="button"
            className="nav-scroller-btn nav-scroller-btn--left"
            aria-label="Scroll left"
          >
            {/* Left arrow SVG */}
          </button>
          
          {/* Navigation links */}
          <nav className="nav-scroller-nav">
            <div className="nav-scroller-content">
              {/* Trending link */}
              <a
                href="#"
                className={`nav-scroller-item nav__link ${
                  activeLink === 'Trending' ? 'active-tab' : ''
                }`}
                onClick={() => handleLinkClick('Trending')}
              >
                <img src={Nearme} alt="" />
                <div className="nav__link__content">
                  <div className="nav__link__title">Trending</div>
                </div>
              </a>
              
              {/* Near Me link */}
              <a
                href="#"
                className={`nav-scroller-item nav__link ${
                  activeLink === 'Near Me' ? 'active-tab' : ''
                }`}
                onClick={() => handleLinkClick('Near Me')}
              >
                <img src={Appartment} alt="" />
                <div className="nav__link__content">
                  <div className="nav__link__title">Near Me</div>
                </div>
              </a>

              {/* Cottage link */}
              <a
                href="#"
                className={`nav-scroller-item nav__link ${
                  activeLink === 'Cottage' ? 'active-tab' : ''
                }`}
                onClick={() => handleLinkClick('Cottage')}
              >
                <img src={Cottage} alt="" />
                <div className="nav__link__content">
                  <div className="nav__link__title">Cottage</div>
                </div>
              </a>
              
              {/* Apartment link */}
              <a
                href="#"
                className={`nav-scroller-item nav__link ${
                  activeLink === 'Apartment' ? 'active-tab' : ''
                }`}
                onClick={() => handleLinkClick('Apartment')}
              >
                <img src={Appartment} alt="" />
                <div className="nav__link__content">
                  <div className="nav__link__title">Apartment</div>
                </div>
              </a>
              
              {/* Shop link */}
              <a
                href="#"
                className={`nav-scroller-item nav__link ${
                  activeLink === 'Shop' ? 'active-tab' : ''
                }`}
                onClick={() => handleLinkClick('Shop')}
              >
                <img src={Cottage} alt="" />
                <div className="nav__link__content">
                  <div className="nav__link__title">Shop</div>
                </div>
              </a>
              
            </div>
          </nav>
          
          {/* Right scroll button */}
          <button
            type="button"
            className="nav-scroller-btn nav-scroller-btn--right"
            aria-label="Scroll right"
          >
            {/* Right arrow SVG */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Category;
