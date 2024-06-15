import React from "react";
import ChatList from "./ChatList";
import ChatArea from "./ChatArea";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import filterRight  from '../../../assets/host-layout/assets/icons/filter-right.svg';
function Inbox() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h-dashboard-content-title mb-0">Inbox</h1>
        <div className="dropdown" style={{ fontSize: "28px", fontWeight: "600" }}>
          <a
            style={{ background: "transparent", border: "none" }}
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={filterRight} width="40" alt="filter" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
            style={{ fontSize: "16px" }}
          >
            <li>
              <a className="dropdown-item d-flex justify-content-between"><span>By Days</span></a>
            </li>
            <li className="mt-2">
              <a className="dropdown-item d-flex justify-content-between"><span>By Weeks</span></a>
            </li>
            <li className="mt-2">
              <a className="dropdown-item d-flex justify-content-between"><span>By Months</span></a>
            </li>
            <li className="mt-2">
              <a className="dropdown-item d-flex justify-content-between"><span>By Year</span></a>
            </li>
          </div>
        </div>
      </div>
      <div className="row rounded-5 h-chat-box m-0 p-0">
        <ChatList />
        <ChatArea />
      </div>
    </div>
  );
}

export default Inbox;
