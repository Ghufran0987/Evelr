import React, { useEffect, useState } from "react";
import listing_image from "../assets/images/listing.jpg";
import star from '../assets/icons/star-fill.svg';
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import { getAllPost } from "../redux-store/features/post/postSlice";
import { useSelector,useDispatch } from "react-redux";
function Listings() {
  let navigate = useNavigate();
  const{items,isPostLoading}=useSelector(state=>state.post)
  const [numItems, setNumItems] = useState(items.length); // State variable to track number of items to display
  const [isLoading, setIsLoading] = useState(false); // State variable to track loading state
  const dispatch=useDispatch()
  const handleCardClick = (id) => {
    navigate(`/listing_details/${id}`);
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]); // dependency array ensures this only runs once
  const handleLoadMore = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate API call or any asynchronous operation to fetch more data
    setTimeout(() => {
      setNumItems(numItems + 6); // Increase the number of items to display
      setIsLoading(false); // Set loading state to false after fetching data
    }, 1000); // Simulated loading time
  };
  console.log(items)
  return (
    <section className="listings py-3">
      <div className="container">
        <div className="row">
          {/* Map over data to render each card */}
          {items.slice(0, numItems).map((list, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card" onClick={() => handleCardClick(list.id)}>
                <div style={{ height: '100%', overflow: 'hidden' }}>
                  <img
                    src={listing_image}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                {/* Add other card elements using data from JSON */}
                <div className="card-body position-relative">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-10">
                        <p className="price card-text">{list.rate}</p>
                        <h5 className="title card-title">{list.title}</h5>
                        <p className="location card-text">{list.address}</p>
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
      <Loader isLoading={isPostLoading} />
      <div className="listing-btns">
        <button onClick={handleLoadMore}>Load More</button>
        <button>View Map</button>
      </div>
    </section>
  );
}

export default Listings;
