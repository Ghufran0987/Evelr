import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Import the ModalContent component
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import SignUpModal from './SignUpModal';
import { Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const NavbarComponent = () => {
  const [showLoginModal, setLoginShowModal] = useState(false);
  const [showSignUpModal,setSignUpModal]=useState(false);
  const handleLoginClose = () => {
    setLoginShowModal(false);
  };

  const handleLoginShow = () => {
    setLoginShowModal(true);
  };
  const handleSignupClose = () => {
    setSignUpModal(false);
  };

  const handleSignupShow = () => {
    setSignUpModal(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/eve-logo-cropped.gif" alt="evelr logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/' tag={Link}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/messages' tag={Link}>
                Messages
              </NavLink>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./notifications/notification.html">
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Wishlists
              </a>
            </li>
          </ul>
          <div className="nav-btns">
            
          <a className="navbar-login-btn"  type="button" onClick={handleLoginShow}>Log In</a> {/* Button to trigger modal */}
          {showLoginModal && <LoginModal handleClose={handleLoginClose} />} {/* Render modal when showModal is true */}
            <a
              className="navbar-signup-btn"
              type="button"
              onClick={handleSignupShow}
            >
              Sign Up
            </a>
            {showSignUpModal &&<SignUpModal handleClose={handleSignupClose}/>}
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a className="navbar-brand" id="offcanvasNavbarLabel" href="#">
              <img
                src="./assets/images/eve-logo-cropped.gif"
                alt="evelr logo"
              />
            </a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wishlist
                </a>
              </li>
              <li className="nav-item">
                <div className="row justify-content-between mt-2">
                  <div className="col-6">
                    <a
                      className="navbar-login-btn"
                      type="button"
                      onClick={handleLoginShow} // Trigger handleShow instead of toggling modal directly
                    >
                      Log In
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="navbar-signup-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#signup-modal"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;





// const NavbarComponent = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   const handleShow = () => {
//     setShowModal(true);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-light py-3">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src="./assets/images/eve-logo-cropped.gif" alt="evelr logo" />
//         </a>
//         <div className="nav-btns">
//           <a className="navbar-login-btn" onClick={handleShow}>Log In</a> {/* Button to trigger modal */}
//           {showModal && <LoginModal handleClose={handleClose} />} {/* Render modal when showModal is true */}
//           <a
//             className="navbar-signup-btn"
//             type="button"
//             data-bs-toggle="modal"
//             data-bs-target="#signup-modal"
//           >
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarComponent;
