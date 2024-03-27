import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./views/home";
import MessagePage from "./views/messages";
import NotificationsPage from "./views/notifications";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/messages" element={<MessagePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>
  );
}

export default App;
