import React from "react";
import Messages from "../views/Messages";
import ListingDetails from "../views/LisitngDetails";
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
          isTop: true,
        },
        // Add the route for listing details
        {
          path: "/listing_details/:id", // Define the route with a parameter :id
          name: "Listing Details", // Name for the link in the sidebar
          miniName: "LD", // Abbreviated name
          component: <ListingDetails />, // Component to render for listing details
          layout: "/admin", // URL layout
          isTop: false, // Not a top-level route
        }
      ]
    },
  ];
};

export default useSideNavRoutes;
