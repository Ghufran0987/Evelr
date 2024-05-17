import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import flatpickr from 'flatpickr';
import userImage from '../assets/images/user.png';
import 'flatpickr/dist/flatpickr.min.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../custom-hooks/useAuth';
import { logOut } from '../redux-store/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
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
  const [showSignUpModal, setSignUpModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useAuth();
  const { full_name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logOut());
    setLoginShowModal(false);
  };

  const handleLoginShow = () => {
    setLoginShowModal(true);
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
          {isAuth ? (
            <div className="d-flex flex-row justify-content-between">
              <a className="navbar-login-btn" type="button"> Switch to listing </a>
              <div className="dropdown" onClick={toggleDropdown}>
                <a
                  className="rounded-circle"
                  style={{ border: '3px solid var(--bs-primary-color)' }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                  <img
                    style={{ height: '56px', width: '56px' }}
                    src={userImage}
                    alt="user profile image"
                  />
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`}
                  aria-labelledby="dropdownMenuButton"
                  style={{ fontSize: '16px' }}
                >
                  <li className="mt-2">
                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">
                      <span>
                        <img style={{ height: '56px', width: '56px' }} src={userImage} alt="user profile image" />
                      </span>
                      <span style={{ marginLeft: '12px' }}>{full_name}</span>
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">My Reservations</a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">Personal Information</a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">Account Settings</a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">Gift Cards</a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item d-flex align-items-center" href="#">Help Center</a>
                  </li>
                  <li className="mt-3 mb-2">
                    <a className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
                      <span style={{ color: 'var(--bs-primary-color)', fontWeight: '600' }}>Log Out</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          ) : (
            <div className="nav-btns">
              <a className="navbar-login-btn" type="button" onClick={handleLoginShow}>Log In</a>
              {showLoginModal && <LoginModal handleClose={() => setLoginShowModal(false)} handleLogin={() => setLoginShowModal(false)} />}
              <a className="navbar-signup-btn" type="button" onClick={handleSignupShow}>Sign Up</a>
              {showSignUpModal && <SignUpModal handleClose={() => setSignUpModal(false)} />}
            </div>
          )}
        </div>
        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <a className="navbar-brand" id="offcanvasNavbarLabel" href="#">
              <img src="./assets/images/eve-logo-cropped.gif" alt="evelr logo" />
            </a>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Wishlist</a>
              </li>
              <li className="nav-item">
                <div className="row justify-content-between mt-2">
                  <div className="col-6">
                    <a className="navbar-login-btn" type="button" onClick={handleLoginShow}>Log In</a>
                    {showLoginModal && <LoginModal handleClose={() => setLoginShowModal(false)} />}
                  </div>
                  <div className="col-6">
                    <a className="navbar-signup-btn" type="button" onClick={handleSignupShow}>Sign Up</a>
                    {showSignUpModal && <SignUpModal handleClose={() => setSignUpModal(false)} />}
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
