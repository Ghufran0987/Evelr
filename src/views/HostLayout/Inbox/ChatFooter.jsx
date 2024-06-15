import React from "react";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ChatFooter() {
  return (
    <div className="u-chat-footer mt-4">
      <div className="input-group d-flex align-items-center">
        <button className="input-group-append attach_btn">
          <input type="file" id="myFile" name="filename" />
          <i className="bi bi-plus-circle"></i>
        </button>
        <textarea
          className="form-control"
          placeholder="Type something"
          rows="2"
          cols="50"
        ></textarea>
        <button className="input-group-append send_btn">
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
