import React from 'react'
import '../assets/css/Navbar.css'
import imgIcon from '../assets/img/icon.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo ">
                        {/* HDPHL <i className="fab fa-typo3"></i> */}
                        <img src={imgIcon} alt="Hodophile"/> &nbsp; HDPHL
                    </a>
                </div>
            </nav>
        </>
    )
}
