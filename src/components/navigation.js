import React from "react";

const navigationStyle = {
    color: "lightBlue"
}

function Navigation({ currentPage, pageChange }) {
    return (
        <ul className="navList">
            <li className="nav-item">
                <a href="#home" style={navigationStyle} onClick={() => pageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" style={navigationStyle} onClick={() => pageChange('Portfolio')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#work" style={navigationStyle} onClick={() => pageChange('Work')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Work</a>
            </li>
            <li className="nav-item">
                <a href="#Contact" style={navigationStyle} onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    )
}
export default Navigation;