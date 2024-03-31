import React, { useState } from 'react';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Router, Routes } from 'react-router-dom';
import useRoutes from "../utils/routes"
import NavbarComponent from '../component/Navbar';
import Footer from '../component/Footer';

function AdminLayout() {
    const routes = useRoutes();

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
  return (
    <>
    <NavbarComponent/>
      <Routes>
              {getRoutes(routes)}
              
      </Routes>
    <Footer/>
    </>
  );
}

export default AdminLayout;
