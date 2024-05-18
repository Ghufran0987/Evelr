import React, { useState } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservation_image from '../../assets/images/cover.png';
import menu_icon from '../../assets/icons/three-dots-vertical.svg';
import cancel_icon from '../../assets/icons/trash.svg'
import edit_icon from '../../assets/icons/pencil-square.svg'
import help_icon from '../../assets/icons/question-circle.svg'
const MyReservation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <div className="container">
                <h1 className="new-listing-heading primary-hd">My Reservation</h1>
                <div id="my-reservations-tabs">
                    <div className="row">
                        <div className="col-3 col-lg-2 border-black">
                            <a>
                                <div className="place-highlights-btn">All</div>
                            </a>
                        </div>
                        <div className="col-3 col-lg-2">
                            <a>
                                <div className="place-highlights-btn">Pending</div>
                            </a>
                        </div>
                        <div className="col-3 col-lg-2">
                            <a>
                                <div className="place-highlights-btn">Stayed</div>
                            </a>
                        </div>
                        <div className="col-3 col-lg-2">
                            <a>
                                <div className="place-highlights-btn">Booked</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper" style={{ boxShadow: 'var(--bs-box-shadow-all-sides)', border: '1px solid transparent', marginTop: '60px', position: 'relative', zIndex: 0 }}>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5">
                            <img src={reservation_image} style={{ height: '282px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Apartment picture" />
                        </div>
                        <div className="col-12 col-lg-7 mt-4 mt-lg-0">
                            <div className="mb-5 mb-sm-3 mb-0">
                                <h3 className="my-reservation-hd-1">Apartment</h3>
                                <h3 className="my-reservation-hd-2">Salam Tower Apartment</h3>
                                <span style={{ fontSize: '18px' }}>
                                    <img className="rate-icon" style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(435%) hue-rotate(0deg) brightness(103%) contrast(106%)' }} src="../assets/icons/star-fill.svg" alt="" />
                                    <span>4.6</span>&nbsp;&nbsp;&nbsp; 1k+ Reviews
                                </span>
                            </div>
                            <div className="dropdown" onClick={toggleButton} style={{ fontSize: '28px', fontWeight: 600, position: 'absolute', top: '10px', right: '20px' }}>
                                <button style={{ background: 'transparent', border: 'none' }} type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded={isOpen ? 'true' : 'false'}>
                                    <img src={menu_icon} alt="menu-icon" style={{ height: '30px' }} />
                                </button>
                                <div className={`dropdown-menu  ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton" style={{ fontSize: '16px',right: '20px' }}>
                                    <li>
                                        <a className="dropdown-item d-flex justify-content-between" data-toggle="modal" data-target="#cancellationModal">
                                            <span>Cancel</span>
                                            <span><img src={cancel_icon} style={{ height: '18px', width: '18px' }} /></span>
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a className="dropdown-item d-flex justify-content-between" data-toggle="modal" data-target="#reservationEditModal">
                                            <span>Edit</span>
                                            <span><img src={edit_icon} style={{ height: '18px', width: '18px' }} /></span>
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a className="dropdown-item d-flex justify-content-between" href="#">
                                            <span>Get Help</span>
                                            <span><img src={help_icon} style={{ height: '18px', width: '18px' }} /></span>
                                        </a>
                                    </li>
                                </div>
                            </div>
                            <div className="my-reservation-confirm-btn">
                                <a href="" style={{ color: 'var(--bs-primary-color)' }}>Confirmation Pending</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginTop: '54px' }} />
            </div>
        </section>
    );
};

export default MyReservation;
