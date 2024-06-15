import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/host-layout/assets/css/style.css';
import '../../assets/host-layout/assets/css/global.css'; // Make sure to create appropriate styles in this CSS file
// Import images
import dashboardLogo from '../../assets/host-layout/assets/images/dashboard-logo.svg';
import dashboardLogoWhite from '../../assets/host-layout/assets/images/dashboard-logo-white.svg';
import inboxLogo from '../../assets/host-layout/assets/images/inbox-logo.svg';
import inboxLogoWhite from '../../assets/host-layout/assets/images/inbox-logo-white.svg';
import insightsLogo from '../../assets/host-layout/assets/images/insights-logo.svg';
import insightsLogoWhite from '../../assets/host-layout/assets/images/insights-logo-white.svg';
import myListingsLogo from '../../assets/host-layout/assets/images/mylistings-logo.svg';
import myListingsLogoWhite from '../../assets/host-layout/assets/images/mylistings-logo-white.svg';
import earningsLogo from '../../assets/host-layout/assets/images/earnings-logo.svg';
import earningsLogoWhite from '../../assets/host-layout/assets/images/earnings-logo-white.svg';
import notificationsLogo from '../../assets/host-layout/assets/images/notificatons-logo.svg';
import notificationsLogoWhite from '../../assets/host-layout/assets/images/notificatons-logo-white.svg';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
const SidebarItem = ({ title, iconGrey, iconWhite, isActive, onClick, route }) => (
  <li
    className={`h-dashboard-asidebar-list-item nav__link ${isActive ? 'h-dashboard-asidebar-active-tab' : ''}`}
    onClick={onClick}
  >
    <NavLink className="nav-link" to={route} tag={Link}>
      <div className="nav-icon">
        <img
          className="nav-icon-grey"
          src={iconGrey}
          alt=""
          style={{ display: isActive ? 'none' : 'block' }}
        />
        <img
          className="nav-icon-white"
          src={iconWhite}
          alt=""
          style={{ display: isActive ? 'block' : 'none' }}
        />
      </div>
      <div className="nav__link__content">
        <div className="nav__link__title">{title}</div>
      </div>
    </NavLink>
  </li>
);

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const items = [
    { title: 'Dashboard', iconGrey: dashboardLogo, iconWhite: dashboardLogoWhite, route: '/dashboard' },
    { title: 'Inbox', iconGrey: inboxLogo, iconWhite: inboxLogoWhite, route: '/host_inbox' },
    { title: 'Insights', iconGrey: insightsLogo, iconWhite: insightsLogoWhite, route: '/insights' },
    { title: 'My Listing', iconGrey: myListingsLogo, iconWhite: myListingsLogoWhite, route: '/my_listing' },
    { title: 'Earnings', iconGrey: earningsLogo, iconWhite: earningsLogoWhite, route: '/earnings' },
    { title: 'Notification', iconGrey: notificationsLogo, iconWhite: notificationsLogoWhite, route: '/notification' },
  ];

  return (
    <aside className="h-dashboard-asidebar col-2">
      <nav className="h-dashboard-asidebar-nav">
        <ul className="h-dashboard-asidebar-list">
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              title={item.title}
              iconGrey={item.iconGrey}
              iconWhite={item.iconWhite}
              isActive={activeTab === item.title}
              route={item.route}
              onClick={() => setActiveTab(item.title)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
