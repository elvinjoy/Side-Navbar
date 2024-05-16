import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/cancraft-logo-small.png';
import './Navbar.css';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        console.log("Toggling sidebar");
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebarOpen && !sidebar.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <>
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h4>CANCRAFT</h4>
                    <button className="close-btn" onClick={closeSidebar}>
                        <i className="bi bi-x text-dark"></i>
                    </button>
                </div>
                <hr />
                <div className="sidebar-content">
                    <ul className="sidebar-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Print Your Canvas</a></li>
                        <li><a href="#">Art Gallery</a></li>
                        <li><a href="#">Wish list</a></li>
                        <li><a href="#">My order</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Log out</a></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} alt="Logo" className="navbar-logo img-fluid mx-auto d-block" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
