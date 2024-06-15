// MainComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/host-layout/assets/css/style.css';
import '../../assets/host-layout/assets/css/global.css';
import logo from '../../assets/images/eve-logo-cropped.gif';
import userImage from '../../assets/images/user.png';
const MainComponent = () => (
  <main className="h-content col-10">
    <div className="row">
      <div className="col-8">
        <h1 className="h-dashboard-content-title">Your Reservations</h1>
        <ul className="h-dashboard-content-res-list">
          <li className="h-dashboard-content-res-list-item d-flex align-items-center justify-content-between">
            <div>
              <div className="d-flex align-items-center mb-3">
                <img src={userImage} alt="profile" />
                <div className="ms-2">
                  <h3 className="h-dashboard-content-res-usr-name">Ahsan</h3>
                  <p className="h-dashboard-content-res-date">13 Dec 2023 - 14 Dec 2023</p>
                </div>
              </div>
              <h3 className="h-dashboard-content-res-name">Salam Towers</h3>
              <p className="h-dashboard-content-res-addr">Jamia Millia, Malir, Karachi</p>
            </div>
            <div>
              <h3 className="h-dashboard-content-res-status">Status: In house</h3>
              <p className="h-dashboard-content-res-status-date">Checked in at 8:33 AM</p>
            </div>
          </li>
          {/* Additional reservation items */}
        </ul>
      </div>
      <div className="col-4">
        <h1 className="h-dashboard-content-title">Upcoming Guests</h1>
        <ul className="h-dashboard-content-upcoming-guest-list">
          <li className="h-dashboard-content-upcoming-guest-list-item">
            <div className="d-flex align-items-center">
              <img className="h-dashboard-content-upcoming-guest-profile me-2" src="../assets/images/user-profile.svg" alt="profile" />
              <div>
                <h3 className="h-dashboard-content-upcoming-guest">Asif Ali</h3>
                <p className="h-dashboard-content-upcoming-guest-date">15 Dec 2023 - 18 Dec 2023</p>
              </div>
            </div>
          </li>
          {/* Additional guest items */}
        </ul>
      </div>
    </div>
    {/* Additional content sections */}
  </main>
);

export default MainComponent;
