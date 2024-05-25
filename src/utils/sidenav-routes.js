import React from "react";
import Messages from "../views/Messages";
import ListingDetails from "../views/LisitngDetails";
import PersonalInformation from "../views/My Profile/PersonalInformation";
import MyReservation from "../views/My Profile/Reservation";
import GiftCards from "../views/My Profile/GiftCard";
import HelpSection from "../views/My Profile/HelpCenter";
import Notifications from "../views/Notification";
import BookingConfirmation from "../views/Booking/BookingConfirmation";
import AccountSettings from "../views/My Profile/Account-Settings/AccountSettings";
import Login_Security from "../views/My Profile/Account-Settings/Login";
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
        {
          path: "/personal_information",
          name: "FAQs",
          miniName: "RS",
          component: <PersonalInformation />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/my_reservations",
          name: "FAQs",
          miniName: "RS",
          component: <MyReservation />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/notications",
          name: "FAQs",
          miniName: "RS",
          component: <Notifications />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/booking_confirmation",
          name: "FAQs",
          miniName: "RS",
          component: <BookingConfirmation />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/gift_card",
          name: "FAQs",
          miniName: "RS",
          component: <GiftCards />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/help_center",
          name: "FAQs",
          miniName: "RS",
          component: <HelpSection />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/account_settings",
          name: "FAQs",
          miniName: "RS",
          component: <AccountSettings />,
          layout: "/admin",
          isTop: true,
        },
        {
          path: "/security",
          name: "FAQs",
          miniName: "RS",
          component: <Login_Security />,
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
