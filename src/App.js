import React from 'react';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import IndexView from './views/IndexView';
import Messages from './views/Messages';
import AdminLayout from './layout/AdminLayout';
function App() {
  return (
    <Routes>
      <Route path="/*" element={<AdminLayout />} />
      <Route path="/" element={<IndexView />}>
      </Route>
      
    </Routes>
  );
}


export default App;
