import React from 'react';
import '../styles/Navbar.css'; // Import the Navbar styles

const Navbar = () => {
    return (
        <nav>
            <div className="nav-brand">
                <a href="#" className="logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/Group.svg`} alt="Logo" />
                </a>
                <h4>Pop Rock Crystal</h4>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">Shop</a></li>
                    <li><a href="contact.asp">About us</a></li>
                    <li><a href="about.asp">Help</a></li>
                </ul>
                <div className="rightSide">
                    <div className="redDot"><p>00</p></div>
                    <a href="#" className="basket">
                        <img src={`${process.env.PUBLIC_URL}/assets/ion_basket.svg`} alt="Basket" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
