import React, { useState } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const BookingConfirmation = () => {
  const [adultsCount, setAdultsCount] = useState(0); // State for number of adults

  const handleDecrement = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const handleIncrement = () => {
    setAdultsCount(adultsCount + 1);
  };



  return (
    <section>
      <div className="container">
        <h1 className="new-listing-heading primary-hd">Booking Confirmation</h1>
        <div className="row">
          <div className="col-lg-6 pe-lg-3" style={{ fontSize: '18px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 600 }}>Guest Details</h3>
            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '16px' }}>
              <span>Name</span>
              <span style={{ fontWeight: 600 }}>Ubaid Ahmed</span>
            </div>

            {/* No of guests */}
            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '16px' }}>
              <span>No. of guests</span>
              <span style={{ fontWeight: 600 }}>{adultsCount} Adults, 2 Kids</span>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '16px' }}>
              <span>Stay period</span>
              <span style={{ fontWeight: 600 }}>12 Dec 2023 - 14 Dec 2023</span>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '16px' }}>
              <span>ID Card Verification</span>
              <span style={{ fontWeight: 600 }}>
                <img src="../assets/icons/check-circle.svg" alt="" /> Verified
              </span>
            </div>

            <h3 style={{ fontSize: '30px', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>
              Accommodation Limit
            </h3>

            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '16px' }}>
              <span>No. of people per room</span>
              <div className="col-6 d-flex justify-content-end">
                <div className="counter">
                  <div className="counter-btn" onClick={handleDecrement}>
                    <img src="../assets/images/minus.png" alt="" />
                  </div>
                  <input
                    type="number"
                    className="counter-input text-center"
                    value={adultsCount}
                    readOnly
                  />
                  <div className="counter-btn" onClick={handleIncrement}>
                    <img src="../assets/images/plus.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="d-lg-none" style={{ marginTop: '54px' }} />
          </div>

          {/* Col for apartment details */}
          <div className="col-lg-6 mob-view-spacing ps-lg-3" style={{ marginTop: '10px' }}>
            {/* Apartment details */}
          </div>

          {/* Col for bill summary and confirmation */}
          <div className="col-lg-6">
            <hr />
            <p style={{ fontSize: '15px', marginTop: '30px' }}>
              By selecting the button below, I agree to the
              <span style={{ fontWeight: 600 }}> Terms & Conditions, Privacy Policy</span> and
              <span style={{ fontWeight: 600 }}> Host Terms & Conditions. </span>
            </p>

            <div className="mb-3">
              <button
                type="button"
                className="primary-button"
                style={{ padding: '25px 0', borderRadius: '12px', marginTop: '40px' }}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
