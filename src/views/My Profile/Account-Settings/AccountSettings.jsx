import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';
import '../../../assets/css/global.css';
import arrowImg from '../../../assets/images/arrow.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Reusable SettingCard Component
const SettingCard = ({ title, description, imgSrc, route }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={route}>
      <div className="loc-card-2" style={{ marginBottom: '20px' }}>
        <div className="pe-3">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div>
          <img className="me-2" src={imgSrc} alt="arrow" />
        </div>
      </div>
    </Link>
  </div>
);

// Main AccountSettings Component
const AccountSettings = () => {
  const settings = [
    { title: 'Payments & Payouts', description: 'Credit Cards, Coupons & more', imgSrc: arrowImg, route: '/security' },
    { title: 'Taxes', description: 'Manage Taxpayer information & documents', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Notifications', description: 'How we contact you', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Login & Security', description: 'Password & login history', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Preferences', description: 'Language & Currency', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Privacy & Sharing', description: 'Connected apps & sharing setting', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Work Travel', description: 'Add a work email for business trip benefits', imgSrc: arrowImg, route: '/login&security' },
    { title: 'Professional Listing Tools', description: 'Professional tools to manage properties', imgSrc: arrowImg, route: '/login&security' },
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="custom-breadcrumb">
        <div className="container">
          <div className="new-listing-heading">
            <h1 className="primary-hd">Account Setting</h1>
          </div>
        </div>
      </section>

      {/* Account Setting Section */}
      <section className="account-setting">
        <div className="container">
          <div className="row">
            {settings.map((setting, index) => (
              <SettingCard
                key={index}
                title={setting.title}
                description={setting.description}
                imgSrc={setting.imgSrc}
                route={setting.route}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountSettings;
