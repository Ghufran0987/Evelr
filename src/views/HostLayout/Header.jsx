import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../assets/host-layout/assets/images/eve-logo-cropped.gif'; // Adjust the path as necessary
import userImage from '../../assets/host-layout/assets/images/user.png'; // Adjust the path as necessary
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux-store/features/authSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogOut=()=>{
    
    dispatch(logOut())
    navigate('/')
    
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-color py-3 border-bottom border-black">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="evelr logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto">
              <button className="navbar-login-btn" type="button" onClick={handleLogOut}>
                Switch to travelling
              </button>
              <div className="dropdown">
                <button
                  className="rounded-circle"
                  style={{ border: '3px solid var(--bs-primary-color)' }}
                  type="button"
                  id="userDropdownHost"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    style={{ height: '56px', width: '56px' }}
                    src={userImage}
                    alt="user profile"
                  />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdownHost"
                  style={{ fontSize: '16px' }}
                >
                  <li className="mt-2">
                    <Link className="dropdown-item d-flex align-items-center justify-content-between" to="#">
                      <img
                        style={{ height: '56px', width: '56px' }}
                        src={userImage}
                        alt="user profile"
                      />
                      <span style={{ marginLeft: '12px' }}>Ubaid Ahmed</span>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span>My Reservations</span>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span>Personal Information</span>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span>Account Settings</span>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span>Gift Cards</span>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span>Help Center</span>
                    </Link>
                  </li>
                  <li className="mt-3 mb-2">
                    <Link className="dropdown-item d-flex align-items-center" to="#">
                      <span style={{ color: 'var(--bs-primary-color)', fontWeight: '600' }}>
                        Log Out
                      </span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
