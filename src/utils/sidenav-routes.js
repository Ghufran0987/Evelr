import React from "react";


import Messages from "../views/Messages";

const useSideNavRoutes = () => {
  
  return [
    
    {
      collapse: true,
      name: "Products",
      icon: "ni ni-shop text-primary",
      state: "dashboardsCollapse",
      isView: true,
      views: [
        
        {
          path: "/messages",
          name: "FAQs",
          miniName: "RS",
          component: <Messages />,
          layout: "/admin",
          // isView: true,
          isTop: true,
        }
      ]
    },
   
  ];
};
export default useSideNavRoutes;
