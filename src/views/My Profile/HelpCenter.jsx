import React, { useState } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
const HelpSection = () => {
    const [guestGuideVisible, setGuestGuideVisible] = useState(true);

    const showGuestSection = () => {
        setGuestGuideVisible(true);
    };

    const showHostSection = () => {
        setGuestGuideVisible(false);
    };
    const { full_name } = useSelector((state) => state.auth);

    return (
        <section>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-6 mt-5">
                        <div className="col-12">
                            <h1 className="primary-hd">Hi {full_name}, how can we help you</h1>
                        </div>
                        <div className="col-12 mt-4">
                            <input
                                type="search_help"
                                className="form-control"
                                id="search_help"
                                placeholder="Search Help"
                                style={{ borderRadius: '57px !important', textAlign: 'center' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <div className="mt-4">
                        <button
                            id="guestBtn"
                            className={`help-center-btn ${guestGuideVisible ? 'help-center-btn-active' : ''}`}
                            style={{ padding: '15px 44px !important' }}
                            onClick={showGuestSection}
                        >
                            Guest
                        </button>
                    </div>
                    <div className="mt-4 ms-2">
                        <button
                            id="hostBtn"
                            className={`help-center-btn ${!guestGuideVisible ? 'help-center-btn-active' : ''}`}
                            style={{ padding: '15px 50px !important' }}
                            onClick={showHostSection}
                        >
                            Host
                        </button>
                    </div>
                </div>

                {/* Guest Guide Section  */}
                <div id="guest-guide" style={{ display: guestGuideVisible ? 'block' : 'none' }}>
                    <h2 className="sub-hd mt-5 mb-4">Guides for getting started</h2>
                    {/* Guest guide content here */}
                </div>

                {/* Host Guide Section  */}
                <div id="host-guide" style={{ display: guestGuideVisible ? 'none' : 'block' }}>
                    <h2 className="sub-hd mt-5 mb-4">Guides for host</h2>
                    {/* Host guide content here */}
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
