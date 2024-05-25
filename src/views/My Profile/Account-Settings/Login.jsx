import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../../assets/css/style.css';
import '../../../assets/css/global.css';
import arrowImg from '../../../assets/images/arrow.png';
import facebookLogo from '../../../assets/images/facebook.png';
import googleLogo from '../../../assets/images/google.png';
import linkedInLogo from '../../../assets/images/linkedin.png';

const BreadcrumbSection = () => (
  <section className="custom-breadcrumb">
    <div className="container">
      <div className="new-listing-heading">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Account</a></li>
            <li className="breadcrumb-item active" aria-current="page">Login & Security</li>
          </ol>
        </nav>
        <h1 className="primary-hd">Login & Security</h1>
      </div>
    </div>
  </section>
);

const PasswordTab = () => (
  <div className="tab-pane fade show active" id="password" role="tabpanel" aria-labelledby="password-tab">
    <div className="my-4">
      <h2 style={{ fontWeight: 600 }}>Update Password</h2>
      <h5>last updated 5 days ago</h5>
    </div>
    <form>
      <div>
        <input type="password" className="form-control" id="current-password" placeholder="Current Password" />
        <a style={{ fontSize: '14px', color: '#fc7f53', fontWeight: 600 }} href="#">Forget Password?</a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <input type="password" className="form-control" id="new-password" placeholder="New Password" />
      </div>
      <div>
        <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
      </div>
      <div>
        <a href="#" className="btn-update">Update</a>
      </div>
    </form>
  </div>
);

const LinkedAccountsTab = () => (
  <div className="tab-pane fade show active" id="linked-acc" role="tabpanel" aria-labelledby="linked-acc-tab">
    <div className="my-4">
      <h2 style={{ fontWeight: 600 }}>Linked Accounts</h2>
    </div>
    <div className="loc-card" style={{ margin: '20px 0 10px 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="pe-3" src={facebookLogo} alt="Facebook" />
          <div className="loc-card-content">
            <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Facebook</h3>
            <p>Not Connected</p>
          </div>
        </div>
        <div className="check-link">
          <p>Link</p>
        </div>
      </div>
    </div>
    <div className="loc-card" style={{ margin: '20px 0 10px 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="pe-3" src={googleLogo} alt="Google" />
          <div className="loc-card-content">
            <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Google</h3>
            <p>Connected</p>
          </div>
        </div>
        <div className="check-link">
          <p>UnLink</p>
        </div>
      </div>
    </div>
    <div className="loc-card" style={{ margin: '20px 0 10px 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="pe-3" src={linkedInLogo} alt="LinkedIn" />
          <div className="loc-card-content">
            <h3 style={{ fontSize: '22px', fontWeight: 600 }}>LinkedIn</h3>
            <p>Not Connected</p>
          </div>
        </div>
        <div className="check-link">
          <p>Link</p>
        </div>
      </div>
    </div>
    <div>
      <a href="#" className="btn-update">Update</a>
    </div>
  </div>
);

const DeviceHistoryTab = () => (
  <div className="tab-pane fade show active" id="device-his" role="tabpanel" aria-labelledby="device-his-tab">
    <div className="my-4">
      <h2 style={{ fontWeight: 600 }}>Device History</h2>
    </div>
    <div className="loc-card-orange">
      <div className="loc-card" style={{ margin: '20px 0 10px 0', backgroundColor: 'white' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img className="pe-3" src="../assets/images/mobile.png" alt="Mobile" />
            <div className="loc-card-content">
              <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Samsung S10+</h3>
              <p>December 5, 2023</p>
            </div>
          </div>
          <div className="check-link">
            <p>Log Out</p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'white', fontWeight: 600, padding: '0px 35px 8px' }}>Current Session</p>
    </div>
    <div className="loc-card" style={{ margin: '20px 0 10px 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="pe-3" src="../assets/images/pc.png" alt="PC" />
          <div className="loc-card-content">
            <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Windows X</h3>
            <p>December 1, 2023</p>
          </div>
        </div>
        <div className="check-link">
          <p>Log Out</p>
        </div>
      </div>
    </div>
    <div>
      <a href="#" className="btn-update">Update</a>
    </div>
  </div>
);

const AuthenticationTab = () => (
  <div className="tab-pane fade show active" id="authentication" role="tabpanel" aria-labelledby="authentication-tab">
    <div className="my-4">
      <h2 style={{ fontWeight: 600 }}>Two Factor Authentication</h2>
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ fontWeight: 600 }}>Authenticate your account</h3>
      <p>
        Protecting your account is our top priority. We recommend turning it on for account protection from unauthorized logins.
        Turning it off may result in account breaching.
      </p>
    </div>
    <div className="loc-card" style={{ margin: '20px 0 10px 0', backgroundColor: 'white' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '0px' }}>Authentication</h3>
          </div>
        </div>
        <div className="check-link">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'password':
      return <PasswordTab />;
    case 'linked-acc':
      return <LinkedAccountsTab />;
    case 'device-his':
      return <DeviceHistoryTab />;
    case 'authentication':
      return <AuthenticationTab />;
    default:
      return <PasswordTab />;
  }
};

const LoginSecurity = () => {
  const [activeTab, setActiveTab] = useState('password');

  return (
    <section className="login-security">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs mb-3 justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}
                  id="password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#password"
                  type="button"
                  role="tab"
                  aria-controls="password"
                  aria-selected={activeTab === 'password'}
                  onClick={() => setActiveTab('password')}
                >
                  Password
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'linked-acc' ? 'active' : ''}`}
                  id="linked-acc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#linked-acc"
                  type="button"
                  role="tab"
                  aria-controls="linked-acc"
                  aria-selected={activeTab === 'linked-acc'}
                  onClick={() => setActiveTab('linked-acc')}
                >
                  Linked Accounts
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'device-his' ? 'active' : ''}`}
                  id="device-his-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#device-his"
                  type="button"
                  role="tab"
                  aria-controls="device-his"
                  aria-selected={activeTab === 'device-his'}
                  onClick={() => setActiveTab('device-his')}
                >
                  Device History
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'authentication' ? 'active' : ''}`}
                  id="authentication-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#authentication"
                  type="button"
                  role="tab"
                  aria-controls="authentication"
                  aria-selected={activeTab === 'authentication'}
                  onClick={() => setActiveTab('authentication')}
                >
                  Authentication
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tab-content" id="myTabContent">
              <TabContent activeTab={activeTab} />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 mob-view-spacing">
            <div className="loc-card mt-4 py-4">
              <h4>Make your account more secure</h4>
              <p>
                We’re always working on ways to increase safety in our community. That’s why we look at every account to make sure it’s as secure as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Login_Security = () => (
  <div>
    <BreadcrumbSection />
    <LoginSecurity />
  </div>
);

export default Login_Security;
