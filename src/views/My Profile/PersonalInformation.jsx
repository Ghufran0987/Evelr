import React, { useEffect } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import flatpickr from 'flatpickr';
import userImage from '../../assets/images/user.png';
import 'flatpickr/dist/flatpickr.min.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getUserInfo } from '../../redux-store/features/authSlice';
import { getCountry } from '../../redux-store/features/country/countrySlice';
const PersonalInformation = () => {
  const dispatch = useDispatch();
  const { user_info } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const name = user_info.full_name ? user_info.full_name.split(' ') : ['', ''];
  
  return (
    <section>
      <div className="container">
        <h1 className="new-listing-heading primary-hd">Personal Information</h1>
        <div className="row">
          <div className="col-lg-7">
            <form>
              <h3 style={{ fontSize: '35px', fontWeight: 600 }}>Full Name</h3>
              <p style={{ fontSize: '18px' }}>
                Name should be same as on your government ID, passport or any legal document.
              </p>
              <div className="col-lg-8 mt-2">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={name?.[0] || ''}
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={name?.[1] || ''}
                />
              </div>

              <h3 style={{ fontSize: '35px', fontWeight: 600, marginTop: '30px' }}>
                Email Address
              </h3>
              <p style={{ fontSize: '18px' }}>
                Use an email address you always have access to.
              </p>
              <div className="col-lg-8 mt-4" style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={user_info?.email||''}
                />
                <img
                  style={{ position: 'absolute', top: '30%', right: '15px' }}
                  src="../assets/icons/round-check-small.png"
                  alt=""
                />
              </div>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="newEmail"
                  placeholder="Add new email"
                />
              </div>

              <h3 style={{ fontSize: '35px', fontWeight: 600, marginTop: '30px' }}>
                Phone Number
              </h3>
              <p style={{ fontSize: '18px' }}>
                Contact Number (for confirmed guests &amp; Evelr to get in touch).
                You can add other numbers &amp; choose how they are used.
              </p>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={user_info?.phone||''}
                />
              </div>
              <div className="col-lg-8 mt-4" style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-control"
                  id="newPhoneNumber"
                  placeholder="Add a new phone number"
                />
                <img
                  style={{ position: 'absolute', top: '30%', right: '15px' }}
                  src="../assets/icons/round-check-small.png"
                  alt=""
                />
              </div>

              <h3 style={{ fontSize: '35px', fontWeight: 600, marginTop: '30px' }}>
                CNIC Verification
              </h3>
              <p style={{ fontSize: '18px' }}>
                Stops fraud, secures transactions, ensures eligibility, and maintains safety.
              </p>
              <div className="col-lg-8 mt-4" style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-control"
                  id="CNICVerification"
                  placeholder="CNIC Verification"
                />
                <img
                  style={{ position: 'absolute', top: '30%', right: '15px' }}
                  src="../assets/icons/round-cross.png"
                  alt=""
                />
              </div>
              <div className="col-lg-8 mt-4">
                <a
                  className="primary-button"
                  style={{ padding: '15px 0 !important', width: '100%' }}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addCNICModal"
                >
                  Verify your CNIC
                </a>
              </div>

              <h3 style={{ fontSize: '35px', fontWeight: 600, marginTop: '30px' }}>
                Address
              </h3>
              <p style={{ fontSize: '18px' }}>
                Current address should be same as on your government ID, passport or any legal document.
              </p>

              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="AddressLine1"
                  placeholder="Address Line 1"
                  value={user_info?.address||''}
                />
              </div>

              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="AddressLine2"
                  placeholder="Address Line 2 (if applicable)"
                />
              </div>

              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="AddressLine3"
                  placeholder="Address Line 3 (if applicable)"
                />
              </div>

              <div className="col-lg-8 mt-4">
                <div className="select-wrapper">
                  <select id="countrySelect" className="form-select select-input">
                    <option selected disabled>Country</option>
                    <option value="Pak">Pakistan</option>
                    <option value="Ind">India</option>
                    <option value="Ban">Bangladesh</option>
                  </select>
                  <span className="custom-arrow"></span>
                </div>
              </div>

              <div className="col-lg-8 mt-4">
                <div id="stateSelect" className="select-wrapper">
                  <select className="form-select select-input">
                    <option selected disabled>State/Province</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Punjba">Punjab</option>
                    <option value="KPK">KPK</option>
                  </select>
                  <span className="custom-arrow"></span>
                </div>
              </div>

              <div className="col-lg-8 mt-4">
                <div className="select-wrapper">
                  <select id="citySelect" className="form-select select-input">
                    <option selected disabled>City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Lahore">Lahore</option>
                  </select>
                  <span className="custom-arrow"></span>
                </div>
              </div>

              <h3 style={{ fontSize: '35px', fontWeight: 600, marginTop: '30px' }}>
                Emergency Contact
              </h3>
              <p style={{ fontSize: '18px' }}>
                Essential for quick help, vital info when you can't communicate,
                and immediate support in crises.
              </p>
              <h4 style={{ fontSize: '28px', fontWeight: 500, marginTop: '20px' }}>
                Contact 1
              </h4>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="contactName"
                  placeholder="Contact Name"
                />
              </div>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="yourRelation"
                  placeholder="Your Relation"
                />
              </div>
              <div className="col-lg-8 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number"
                />
              </div>
              <div className="col-lg-8 mt-4">
                <button
                  className="primary-button"
                  style={{ padding: '15px 0 !important', width: '100%' }}
                >
                  Add another contact
                </button>
              </div>
            </form>
          </div>
          <hr className="d-lg-none" style={{ marginTop: '54px' }} />
          <div className="col-lg-5 mob-view-spacing">
            <button
              className="primary-button"
              style={{ padding: '20px 62px !important', float: 'right' }}
            >
              Update Information
            </button>

            <div className="card-wrapper" style={{ marginTop: '90px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 600 }}>Need Help?</h3>
              <p>
                Get answers to your questions in our{' '}
                <b>
                  <a href="" className="text-dark">Help Center.</a>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
