// import React, { useEffect, useState } from "react";
// import listing_image from "../assets/images/listing.jpg";
// import star from '../assets/icons/star-fill.svg';
// import { useNavigate } from "react-router-dom";
// import Loader from "../component/Loader";
// import { getAllPost } from "../redux-store/features/post/postSlice";
// import { useSelector, useDispatch } from "react-redux";

// function Listings() {
//   let navigate = useNavigate();
//   const { items, isPostLoading } = useSelector(state => state.post);
//   const [numItems, setNumItems] = useState(6); // Initial number of items to display
//   const dispatch = useDispatch();

//   const handleCardClick = (id) => {
//     navigate(`/listing_details/${id}`);
//   };

//   useEffect(() => {
//     dispatch(getAllPost());
//   }, [dispatch]); // Dependency array ensures this only runs once

//   const handleLoadMore = () => {
//     setNumItems(numItems + 6); // Increase the number of items to display
//   };

//   return (
//     <section className="listings py-3">
//       <div className="container">
//         {isPostLoading ? (
//           <Loader isLoading={isPostLoading} /> // Render Loader component if isPostLoading is true
//         ) : (
//           <div className="row">
//             {/* Map over data to render each card */}
//             {items.slice(0, numItems).map((list, index) => (
//               <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
//                 <div className="card" onClick={() => handleCardClick(list.id)}>
//                   <div style={{ height: '100%', overflow: 'hidden' }}>
//                     <img
//                       src={listing_image}
//                       className="card-img-top"
//                       alt="..."
//                     />
//                   </div>
//                   {/* Add other card elements using data from JSON */}
//                   <div className="card-body position-relative">
//                     <div className="col-12">
//                       <div className="row">
//                         <div className="col-10">
//                           <p className="price card-text">{list.rate}</p>
//                           <h5 className="title card-title">{list.title}</h5>
//                           <p className="location card-text">{list.address}</p>
//                         </div>
//                         <div className="col-2">
//                           <div className="rate-wrapper">
//                             <img
//                               className="rate-icon"
//                               style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(435%) hue-rotate(0deg) brightness(103%) contrast(106%)' }}
//                               src={star}
//                             />
//                             <span>{list.rate}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="listing-btns">
//         <button onClick={handleLoadMore}>Load More</button>
//         <button>View Map</button>
//       </div>
//     </section>
//   );
// }

// export default Listings;





import React, { useEffect, useState } from "react";
import listing_image from "../assets/images/listing.jpg";
import star from '../assets/icons/star-fill.svg';
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import { getAllPost } from "../redux-store/features/post/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCurrency } from "../redux-store/features/currency/currencySlice";
function Listings({ categoryId }) {
  let navigate = useNavigate();
  const { items, isPostLoading } = useSelector(state => state.post);
  const [numItems, setNumItems] = useState(6); // Initial number of items to display
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]); // Add dispatch to the dependency array to run only once on mount

  console.log("DropDownCurrency=>", items);


  const handleCardClick = (id) => {
    navigate(`/listing_details/${id}`);
  };

  useEffect(() => {
    dispatch(getAllPost(categoryId));
  }, [dispatch, categoryId]); // Dependency array includes categoryId

  const handleLoadMore = () => {
    setNumItems(numItems + 6); // Increase the number of items to display
  };

  return (
    <section className="listings py-3">
      <div className="container">
        {isPostLoading ? (
          <Loader isLoading={isPostLoading} /> // Render Loader component if isPostLoading is true
        ) : (
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
        )}
      </div>
      <div className="listing-btns">
        <button onClick={handleLoadMore}>Load More</button>
        <button>View Map</button>
      </div>
    </section>
  );
}

export default Listings;
