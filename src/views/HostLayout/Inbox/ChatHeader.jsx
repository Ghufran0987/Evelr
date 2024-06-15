import React from "react";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ChatHeader() {
  return (
    <div className="u-chat-header d-flex align-items-center justify-content-between">
      <div className="u-name">
        <div className="d-flex align-items-center">
          <div className="user-status online">
            <img className="rounded-circle h-user-img" src="../assets/images/h-user-profile-img.svg" alt="user profile" />
            <span className="status"><i className="bi bi-circle-fill"></i></span>
          </div>
          <span className="h-chat-username">
            <span style={{ fontWeight: "600" }}>John Smith</span>
            <span className="h-chat-user-status"> Online </span>
          </span>
        </div>
      </div>
      <div className="user-call-btns d-flex align-items-center">
        <button className="btn btn-call me-1">
          <i className="bi bi-telephone"></i>
        </button>
        <div className="dropdown u-menu">
          <a
            style={{ background: "transparent", border: "none" }}
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ fontSize: "16px" }}>
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>View Profile</span></a>
            </li>
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>Shared Media</span></a>
            </li>
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>Mute Conversation</span></a>
            </li>
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>Block User</span></a>
            </li>
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>Report User</span></a>
            </li>
            <li>
              <a className="dropdown-item del d-flex justify-content-between"><span>Delete Conversation</span></a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
