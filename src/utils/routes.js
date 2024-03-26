import React from "react";
import SideNavRoutes from "./sidenav-routes";
const useRoutes = () => {
  return {
    
    protectedRoutes: SideNavRoutes(),
  };
};

export default useRoutes;
