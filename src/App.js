import React,{useMemo} from 'react';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import IndexView from './views/IndexView';
import Messages from './views/Messages';
import AdminLayout from './layout/AdminLayout';
import NavbarComponent from './component/Navbar';
import { useDispatch, useSelector } from "react-redux";
import Notification from './component/notification';
import useInterceptor from './custom-hooks/useInterceptor';
function App() {
  const { open, message, type } = useSelector(
    (state) => state.notification
  );
  
  let interceptors = useInterceptor();

  let dataTableData = useMemo(() => {
    return interceptors;
  }, [interceptors]);

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
