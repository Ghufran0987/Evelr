import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button components from React Bootstrap

function Login_TwoStepModal({ handleClose }) {
  const [show, setShow] = useState(true); // Set initial state of show to true
  const handleLogin = () => setShow(false); // Close the modal on login
  const handleResend = () => alert("Resend code"); // Function to handle resending code

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>2-Step Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center text-center mb-3">
            <span className="privacy-policy">Enter the code sent to mobile number 0312****105</span>
          </div>

          <form>
            <div id="login-otp-inputs" className="otp-field mb-4">
              {/* Input fields for OTP */}
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" disabled />
              <input type="number" placeholder="-" disabled />
              <input type="number" placeholder="-" disabled />
              <input type="number" placeholder="-" disabled />
            </div>

            <div className="mb-3">
              {/* Button for login */}
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Log In
              </button>
            </div>

            <div className="d-flex justify-content-center text-center mb-3">
              {/* Link to resend code */}
              <span className="privacy-policy">
                Didn’t receive code? <a href="#" onClick={handleResend}>Resend</a>
              </span>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login_TwoStepModal;
