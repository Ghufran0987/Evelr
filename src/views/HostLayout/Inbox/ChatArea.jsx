import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";
import '../../../assets/host-layout/assets/css/style.css'
import '../../../assets/host-layout/assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ChatArea() {
  return (
    <div className="col-8 chat-area">
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </div>
  );
}

export default ChatArea;
