import React from 'react';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import IndexView from './views/IndexView';
import Messages from './views/Messages';
import AdminLayout from './layout/AdminLayout';
import NavbarComponent from './component/Navbar';
import { useDispatch, useSelector } from "react-redux";
import Notification from './component/notification';
function App() {
  const { open, message, type } = useSelector(
    (state) => state.notification
  );

  
  return (
    <>
   
    <Routes>
      <Route path="/*" element={<AdminLayout/>} />
      <Route path='/' element={<IndexView/>}/>
    </Routes>
    <Notification open={open} message={message} type={type} />
    </>
    
  );
}


export default App;
