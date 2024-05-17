// import React, { useEffect, useState } from 'react';
// import Nearme from '../assets/images/near-me.svg';
// import Appartment from '../assets/images/appartment.png';
// import Cottage from '../assets/images/cottage.svg';
// import '../assets/css/style.css';
// import '../assets/css/global.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { getAllCategory } from '../redux-store/features/category/categorySlice';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../component/Loader'; // Assuming you have a Loader component

// function Category() {
//   const [activeLink, setActiveLink] = useState('Trending'); // State to manage active link
//   const { items, isCategoryLoading, error } = useSelector(state => state.category);
//   const { isPostLoading } = useSelector(state => state.post); // If you have isPostLoading in your post slice

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCategory());
//   }, [dispatch]);

//   console.log("Category", items);

//   // Function to handle link click
//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//   };

//   return (
//     <section className="py-3">
//       <div className="container">
//         <div className="nav-scroller">
//           {/* Left scroll button */}
//           <button
//             type="button"
//             className="nav-scroller-btn nav-scroller-btn--left"
//             aria-label="Scroll left"
//           >
//             {/* Left arrow SVG */}
//           </button>

//           {/* Navigation links */}
//           <nav className="nav-scroller-nav">
//             <div className="nav-scroller-content">
//               {/* Map over items to create links */}
//               {items.map(item => (
//                 <a
//                   key={item.id}
//                   href="#"
//                   className={`nav-scroller-item nav__link ${
//                     activeLink === item.title ? 'active-tab' : ''
//                   }`}
//                   onClick={() => handleLinkClick(item.title)}
//                 >
//                   <img src={getCategoryIcon(item.title)} alt={item.title} />
//                   <div className="nav__link__content">
//                     <div className="nav__link__title">{item.title}</div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </nav>

//           {/* Right scroll button */}
//           <button
//             type="button"
//             className="nav-scroller-btn nav-scroller-btn--right"
//             aria-label="Scroll right"
//           >
//             {/* Right arrow SVG */}
//           </button>
//         </div>
//       </div>

//       {/* Conditional rendering for Loader */}
//       {isCategoryLoading ? (
//         <Loader isLoading={isPostLoading} />
//       ) : null}
//     </section>
//   );
// }

// // Function to get the appropriate icon based on the category title
// const getCategoryIcon = (title) => {
//   switch (title) {
//     case 'Trending':
//       return Nearme;
//     case 'Apartment':
//       return Appartment;
//     case 'Cottage':
//       return Cottage;
//     // Add cases for other categories as needed
//     default:
//       return Nearme; // Default icon
//   }
// };

// export default Category;









import React, { useEffect, useState } from 'react';
import Nearme from '../assets/images/near-me.svg';
import Appartment from '../assets/images/appartment.png';
import Cottage from '../assets/images/cottage.svg';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { getAllCategory } from '../redux-store/features/category/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../component/Loader'; // Assuming you have a Loader component

function Category({ onCategorySelect }) {
  const [activeLink, setActiveLink] = useState(null); // State to manage active link
  const { items, isCategoryLoading, error } = useSelector(state => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    onCategorySelect(id);
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
              {/* Map over items to create links */}
              {items.map(item => (
                <a
                  key={item.id}
                  href="#"
                  className={`nav-scroller-item nav__link ${
                    activeLink === item.id ? 'active-tab' : ''
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  <img src={getCategoryIcon(item.title)} alt={item.title} />
                  <div className="nav__link__content">
                    <div className="nav__link__title">{item.title}</div>
                  </div>
                </a>
              ))}
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

// Function to get the appropriate icon based on the category title
const getCategoryIcon = (title) => {
  switch (title) {
    case 'Trending':
      return Nearme;
    case 'Apartment':
      return Appartment;
    case 'Cottage':
      return Cottage;
    // Add cases for other categories as needed
    default:
      return Nearme; // Default icon
  }
};

export default Category;
