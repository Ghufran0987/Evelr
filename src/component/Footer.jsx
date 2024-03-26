import React from 'react';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Footer = () => {
  return (
    <footer style={{ marginTop: '52px' }}>
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-12">
              <h5>Support</h5>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Get help with a safety issue</a></li>
                <li><a href="#">Anti-discrimination</a></li>
                <li><a href="#">Disability support</a></li>
                <li><a href="#">Cancellation options</a></li>
                <li><a href="#">Report neighborhood concern</a></li>
              </ul>
            </div>
            <hr className="d-lg-none d-md-none" />
            <div className="col-xl-3 col-lg-3 col-md-6 col-12">
              <h5>Hosting</h5>
              <ul>
                <li><a href="#">List your home</a></li>
                <li><a href="#">Hosting Resources</a></li>
                <li><a href="#">Community Forum</a></li>
                <li><a href="#">Hosting responsibly</a></li>
                <li><a href="#">Evelr-friendly Apartments</a></li>
              </ul>
            </div>
            <hr className="d-lg-none d-md-none" />
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 mt-md-5 mt-lg-0">
              <h5>Evelr</h5>
              <ul>
                <li><a href="#">News Room</a></li>
                <li><a href="#">New Features</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Emergency Stays</a></li>
              </ul>
            </div>
            <hr className="d-lg-none d-md-none" />
            <div className="col-xl-2 col-lg-3 col-md-6 col-12 mt-md-5 mt-lg-0">
              <h5>Get the app</h5>
              <a href="#">
                <img
                  className="footer-app-store"
                  src="./assets/images/app-store.png"
                  alt="App Store"
                />
              </a>
              <br />
              <a href="#">
                <img
                  className="footer-play-store"
                  src="./assets/images/google-play.png"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
          <hr />
          <div className="footer-last">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-md-6 p-2 m-0">
                <p className="m-0">© 2024 Evelr Corporation. All rights reserved</p>
              </div>
              <div className="col-md-6 p-2 m-0 text-md-end">
                <a href="">Terms & Condition</a>
                <a className="m-lg-3" href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
