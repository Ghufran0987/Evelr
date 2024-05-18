import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import giftBoxImage from '../../assets/images/Gift Box.png';

const GiftCards = () => {
  return (
    <section>
      <div className="container">
        <h1 className="new-listing-heading primary-hd">Gift Cards</h1>
        <div className="row">
          <div className="col-lg-7">
            <p style={{ fontSize: '18px' }}>
              Looks like gift cards aren't available right now, but we’re working on it!
            </p>
            <div style={{ marginTop: '70px' }}>
              <img src={giftBoxImage} alt="gift-box" />
            </div>
          </div>
          <hr className="d-lg-none" style={{ marginTop: '54px' }} />
          <div className="col-lg-5 mob-view-spacing">
            <div className="card-wrapper">
              <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Need Help?</h3>
              <p>
                Get answers to your questions in our
                <b><a href="" className="text-dark"> Help Center.</a></b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCards;
