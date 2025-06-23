// SmallBoxMenu.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router'

const SmallBoxMenu = () => {
    const [showBox, setShowBox] = useState(false);

    const toggleBox = () => {
        setShowBox(!showBox);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowBox(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleBox} />
            {showBox && (
                <div className="menu-box-overlay" onClick={toggleBox}>
                    <div className="menu-box" onClick={(e) => e.stopPropagation()}>
                        <div className="box-header">
                            <h3 className='Menu'><img src="/images/logo.svg" alt="" /></h3>

                        </div>
                        <div className="box-content">
                            <NavLink to="/user" className={({ isActive }) => isActive ? 'side-bar active' : 'side-bar'} onClick={() => setShowBox(false)}>
                                <img src="/images/usericon.svg" alt="" />
                                <p>Users</p>
                            </NavLink>
                            <NavLink to="/property" className={({ isActive }) => isActive ? 'side-bar active' : 'side-bar'} onClick={() => setShowBox(false)}>
                                <img src="/images/property.svg" alt="" />

                                <p>Property</p>
                            </NavLink>
                            <NavLink to="/user" className={({ isActive }) => isActive ? 'side-bar active' : 'side-bar'} onClick={() => setShowBox(false)}>
                                <img src="/images/reports.svg" alt="" />
                                <p>Reports</p>
                            </NavLink>
                            <NavLink to="/support" className={({ isActive }) => isActive ? 'side-bar active' : 'side-bar'} onClick={() => setShowBox(false)}>
                                 <img src="/images/support.svg" alt="" />
                                <p>Support</p>
                            </NavLink>



                            <div className='logout'>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'side-bar active' : 'side-bar '}>
                                    <img className='log-img' src="/images/logout.svg" alt="" />
                                    <p>Logout</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SmallBoxMenu;
