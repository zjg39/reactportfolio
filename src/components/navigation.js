import React from "react";

const navigationStyle = {
    color: "lightBlue"
}

function Navigation({ currentPage, changePage }) {
    return (
        <ul className="navList">
            <li className="nav-item">
                <a href="#home" style={navigationStyle} onClick={() => changePage('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" style={navigationStyle} onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" style={navigationStyle} onClick={() => changePage('Work')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#Contact" style={navigationStyle} onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    )
}
export default Navigation;