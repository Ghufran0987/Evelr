import React from 'react';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function SearchBar() {
    // Function to handle focus on search card
  const showSearchCard = () => {
    // Add your logic here to show the search card
  };

  // Function to handle blur on search card
  const hideSearchCard = () => {
    // Add your logic here to hide the search card
  };

  // Function to handle focus on guest card
  const showGuestCard = () => {
    // Add your logic here to show the guest card
  };

  // Function to handle blur on guest card
  const hideGuestCard = () => {
    // Add your logic here to hide the guest card
  };
  return (
    <section className="py-3">
      <div className="container">
        <div
          style={{
            backgroundImage: "url('./assets/images/cover.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            borderRadius: '25px'
          }}
        >
          <div className="hero col-12">
            <div className="col-lg-7">
              <h1>Find your dream<br /><span>Accommodation</span></h1>
              <p>
                Discover your perfect space—a place that feels <br />just right,
                tailored to your every need and desire.
              </p>
              <div className="container position-relative p-0">
                <button className="search-btn" type="button">Search</button>
                <div className="hero-search">
                  <div className="row">
                    {/* Inputs for Where, Check-in, Check-out, Guests */}
                    <div className="col-lg-3 p-1 m-0">
        <label htmlFor="Where" className="form-label">Where</label>
        <input
          type="text"
          className="form-control"
          id="Where"
          placeholder="Search"
          onFocus={showSearchCard}
          onBlur={hideSearchCard}
        />
                    </div>

                    <div className="col-lg-3 p-1 m-0">
        <label htmlFor="Check-in" className="form-label">Check-in</label>
        <input
          type="text"
          className="form-control"
          id="Check-in"
          placeholder="Add Dates"
        />
                    </div>

                    <div className="col-lg-3 p-1 m-0">
        <label htmlFor="Check-out" className="form-label">Check-out</label>
        <input
          type="text"
          className="form-control"
          id="Check-out"
          placeholder="Add Dates"
        />
                    </div>

                    <div className="col-lg-3 p-1 m-0">
        <label htmlFor="Guests" className="form-label">Guests</label>
        <input
          type="text"
          className="form-control"
          id="Guests"
          placeholder="Add Guests"
          onFocus={showGuestCard}
          onBlur={hideGuestCard}
        />
                    </div>
                  </div>
                </div>
                {/* Guest Card Pop-Up */}
                <div
                  id="hero-guest-card"
                  className="col-12 col-lg-10 col-xl-9 col-xxl-8 position-absolute"
                >
                  {/* Guest card content */}
                </div>
                {/* Search Card Pop-Up */}
                <div
                  id="hero-search-card"
                  className="col-12 col-sm-9 col-md-6 col-lg-10 col-xl-9 col-xxl-8 position-absolute"
                >
                  {/* Search card content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
