import React from "react";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ChatMessages() {
  return (
    <div className="u-chat">
      <div className="date-time-hr my-5">
        <span className="date-time">Today</span>
      </div>
      <div className="u-chat-msgs">
        <div className="row admin-text justify-content-end">
          <div className="col-7">
            <div className="d-flex flex-column align-items-end">
              <div className="d-flex align-items-end">
                <div>
                  <div className="u-content-map">
                    <p className="msg-text">
                      Ravi Shas has confirmed your reservation. You can check-in between 10 am to 7 pm and check-out between 10 am to 7 pm
                    </p>
                    <span className="msg-map-text">Following are the co-ordinates for your place.</span>
                    <div className="msg-map"></div>
                  </div>
                </div>
                <span className="rounded-circle ms-2 check-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              </div>
              <span className="msg-time mt-2"> Today 4:01 pm </span>
            </div>
          </div>
        </div>
        <div className="row user-text">
          <div className="col-7">
            <div className="d-flex align-items-start">
              <img className="rounded-circle me-2 user-img" src="../assets/images/h-user-profile-img.svg" alt="user profile" />
              <div className="msg-text-box">
                <p className="msg-text m-0">want to see through this apartment</p>
                <span className="msg-time"> Today 11:13 pm </span>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat above blocks for other messages */}
      </div>
      <div className="u-chat-msgs">
        <div className="row admin-text justify-content-end">
          <div className="col-7">
            <div className="d-flex flex-column align-items-end">
              <div className="d-flex align-items-end">
                <div>
                  <div className="u-content-map">
                    <p className="msg-text">
                      Ravi Shas has confirmed your reservation. You can check-in between 10 am to 7 pm and check-out between 10 am to 7 pm
                    </p>
                    <span className="msg-map-text">Following are the co-ordinates for your place.</span>
                    <div className="msg-map"></div>
                  </div>
                </div>
                <span className="rounded-circle ms-2 check-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              </div>
              <span className="msg-time mt-2"> Today 4:01 pm </span>
            </div>
          </div>
        </div>
        <div className="row user-text">
          <div className="col-7">
            <div className="d-flex align-items-start">
              <img className="rounded-circle me-2 user-img" src="../assets/images/h-user-profile-img.svg" alt="user profile" />
              <div className="msg-text-box">
                <p className="msg-text m-0">want to see through this apartment</p>
                <span className="msg-time"> Today 11:13 pm </span>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat above blocks for other messages */}
      </div>
    </div>
  );
}

export default ChatMessages;
