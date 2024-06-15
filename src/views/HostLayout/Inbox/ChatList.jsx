import React from "react";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ChatList() {
  return (
    <div className="col-4 ps-0">
      <div className="u-inbox-search mb-4">
        <form>
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Search chats" />
            <span className="input-group-text"><i className="bi bi-search"></i></span>
          </div>
        </form>
      </div>
      <div className="u-inbox-chat">
        <div className="user-log d-flex align-items-center">
          <div className="user-status online">
            <img className="rounded-circle sidebar-user-img" src="../assets/images/h-user-profile-img.svg" alt="user profile" />
            <span className="status"><i className="bi bi-circle-fill"></i></span>
          </div>
          <span>
            <span className="u-name">John Smith</span>
            <span className="u-msg">You: want to see through this apartment</span>
          </span>
        </div>
        <div className="user-log d-flex align-items-center">
          <div className="user-status offline">
            <img className="rounded-circle sidebar-user-img" src="../assets/images/h-user-profile-img.svg" alt="user profile" />
            <span className="status"><i className="bi bi-circle-fill"></i></span>
          </div>
          <span>
            <span className="u-name">Thomas</span>
            <span className="u-msg">You: want to see through this apartment</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
