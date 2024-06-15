import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Router, Routes } from 'react-router-dom';
import useRoutes from "../utils/routes"
import NavbarComponent from '../component/Navbar';
import Footer from '../component/Footer';
import { useSelector } from 'react-redux';
import Header from '../views/HostLayout/Header';
import Sidebar from '../views/HostLayout/SideBar';
function AdminLayout() {
    const routes = useRoutes();
    const [isHost, setIsHost] = useState(false);
    const{user_type}=useSelector((state)=>state.auth)
    const getCollapseRoutes = (routes) => {
        return routes.map((route) => {
          if (route.collapse) {
            return getCollapseRoutes(route.collapse);
          }
          if (route.path) {
            return (
              <>
                <Route
                  exact
                  path={route.path}
                  element={route.component}
                  key={route.key}
                />
              </>
            );
          }
          return null;
        });
      };
      const getRoutes = ({ protectedRoutes, publicRoutes }) => {
        return (
          <>
            {/* <Route element={<PublicRoute />}>
              {publicRoutes.map((prop , key) => {
                return <Route path={prop.route} element={prop.component} key={key} />;
              })}
            </Route> */}
            {protectedRoutes?.length &&
              protectedRoutes.map((prop, key) => {
                if (prop.collapse && prop.isView) {
                  return getCollapseRoutes(prop.views);
                }
                if (prop.layout === "/admin" && prop.isView) {
                  return (
                    <Route
                      path={prop.path}
                      element={prop.component}
                      key={key}
                      exact
                    />
                  );
                } else {
                  return null;
                }
              })}
            ;
          </>
        );
      };
    useEffect(()=>{
      if(user_type==="host"){
        setIsHost(true)
      }
      else{
        setIsHost(false)
      }
    })
  return (
  
    <>
      {isHost ? (
        <>
          <Header />
          <section className='h-dashboard py-3'>
            <div className="container">
              <div className="row">
                <Sidebar />
                <div className="col-10">
                  <Routes>
                    {getRoutes(routes)}
                  </Routes>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <NavbarComponent />
          <Routes>
            {getRoutes(routes)}
          </Routes>
          <Footer />
        </>
      )}
    </ >
  );
}

export default AdminLayout;
