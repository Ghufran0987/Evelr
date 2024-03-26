import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login_TwoStepModal from './Login_TwoStepModal';

function LoginModal({ handleClose }) {
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
          <Modal.Title>Welcome Back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-4">
              <input type="email" className="form-control" id="Email" placeholder="Email/Phone Number" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="Password" placeholder="Password" />
            </div>
            <div className="mb-4">
              <a className="forget-pass" href="#">Forget Password?</a>
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Log In
              </button>
            </div>
            <div className="d-flex justify-content-center text-center">
              <span className="create-account">Don’t Have an Account? <a href="">Create Now</a></span>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Conditionally render Login_TwoStepModal based on login state */}
      {login && <Login_TwoStepModal handleClose={handleClose} />}
    </>
  );
}

export default LoginModal;
