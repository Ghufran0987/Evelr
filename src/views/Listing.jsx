import React, { useState } from "react";
import listing from "../utils/data";
import star from '../assets/icons/star-fill.svg';
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
function Listings() {
  let navigate = useNavigate();
  const [numItems, setNumItems] = useState(6); // State variable to track number of items to display
  const [isLoading, setIsLoading] = useState(false); // State variable to track loading state

  const handleCardClick = (id) => {
    navigate(`/listing_details/${id}`);
  };

  const handleLoadMore = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate API call or any asynchronous operation to fetch more data
    setTimeout(() => {
      setNumItems(numItems + 6); // Increase the number of items to display
      setIsLoading(false); // Set loading state to false after fetching data
    }, 1000); // Simulated loading time
  };

  return (
    <section className="listings py-3">
      <div className="container">
        <div className="row">
          {/* Map over data to render each card */}
          {listing.slice(0, numItems).map((list, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card" onClick={() => handleCardClick(list.id)}>
                <div style={{ height: '100%', overflow: 'hidden' }}>
                  <img
                    src={list.image}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                {/* Add other card elements using data from JSON */}
                <div className="card-body position-relative">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-10">
                        <p className="price card-text">{list.price}</p>
                        <h5 className="title card-title">{list.title}</h5>
                        <p className="location card-text">{list.location}</p>
                      </div>
                      <div className="col-2">
                        <div className="rate-wrapper">
                          <img
                            className="rate-icon"
                            style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(435%) hue-rotate(0deg) brightness(103%) contrast(106%)' }}
                            src={star}
                          />
                          <span>{list.rate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Render Loader component if isLoading is true */}
      <Loader isLoading={isLoading} />
      <div className="listing-btns">
        <button onClick={handleLoadMore}>Load More</button>
        <button>View Map</button>
      </div>
    </section>
  );
}

export default Listings;
