import React from 'react';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/icons/filter-right.svg'
const Notifications = () => {
    return (
        <section>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="new-listing-heading primary-hd">Notifications</h1>
                    <div className="dropdown" style={{ fontSize: '28px', fontWeight: 600 }}>
                        <a
                            style={{ background: 'transparent', border: 'none' }}
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                src={profile}
                                width="40"
                                alt="filter"
                            />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton"
                            style={{ fontSize: '16px' }}
                        >
                            <li>
                                <a className="dropdown-item d-flex justify-content-between"><span>Mark All as Read</span></a>
                            </li>
                            <li className="mt-2">
                                <a className="dropdown-item d-flex justify-content-between"><span>Mark All as Unread</span></a>
                            </li>
                            <li className="mt-2">
                                <a className="dropdown-item d-flex justify-content-between"><span>Clear Notifications</span></a>
                            </li>
                        </div>
                    </div>
                </div>
                <div id="notification">
                    <span style={{ fontSize: '20px', color: 'var(--bs-text-secondary-color)' }}>Today, 20 Mar 2024</span>
                    <div
                        className="card-wrapper"
                        style={{
                            position: 'relative',
                            marginTop: '8px',
                            borderRadius: '14px',
                            boxShadow: 'var(--bs-box-shadow-all-sides)',
                            width: '100%',
                            border: 'none'
                        }}
                    >
                        <div className="notification-block">
                            <div className="unread-circle">
                                <img src="../assets/icons/circle-orange.png" alt="" />
                            </div>
                            <img
                                src="../assets/icons/notification-star-icon.png"
                                alt="notification"
                            />

                            <p>
                                Your host for Salam Towers have left a feedback of you. Please
                                provide your feedback on how was your experience with this host.
                            </p>
                        </div>
                        <div className="time-stamp">
                            <span>10:23 am</span>
                        </div>
                    </div>
                </div>
                {/* Repeat the above notification blocks for other notifications */}
            </div>
        </section>
    );
};

export default Notifications;
