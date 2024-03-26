import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login_TwoStepModal from './Login_TwoStepModal';

function SignUpModal({ handleClose }) {
  const [show, setShow] = useState(true); // State to control the login modal
  const [login, setLogin] = useState(false); // State to handle login process

  const handleLogin = () => {
    setLogin(true); // Set login state to true
    setShow(false); // Close the login modal
  };

  const closeLogin = () => {
    setLogin(false); // Reset login state
    setShow(false); // Close the login modal
  };

  return (
    <>
     <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Evelr</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              id="FullName"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="form-control"
              id="GovernmentID"
              placeholder="Government ID Card"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="form-control"
              id="PhoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3">
            <div className="col-12 mt-4">
              <div className="select-wrapper">
                <select id="countrySelect" className="form-select select-input">
                  <option selected disabled>Currency</option>
                  <option value="$">Dollar ($)</option>
                  <option value="Pkr">Pakistani Rupee</option>
                  <option value="Inr">Indian Rupee</option>
                </select>
                <span className="custom-arrow"></span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <label className="currency-text">Auto-Select according to your country</label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="ReEnterPassword"
              placeholder="Re-Enter Password"
            />
          </div>
          <div className="mb-4">
            <div className="d-flex flex-row">
              <button
                type="submit"
                className="btns-signup host-btn active"
                onClick={() => console.log("Be a Host clicked")}
              >
                Be a Host
              </button>
              <button
                type="submit"
                className="btns-signup guest-btn"
                onClick={() => console.log("Be a Guest clicked")}
              >
                Be a Guest
              </button>
            </div>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Sign Up
            </button>
          </div>
          <div className="d-flex justify-content-center text-center mb-2">
            <span className="privacy-policy">
              By continuing I accept the
              <a href="#">Terms & Conditions</a><br />
              and <a href="#">Privacy Policy</a>
            </span>
          </div>
        </form>
      </Modal.Body>
    </Modal>

      {/* Conditionally render Login_TwoStepModal based on login state */}
      {login && <Login_TwoStepModal handleClose={handleClose} />}
    </>
  );
}

export default SignUpModal;
