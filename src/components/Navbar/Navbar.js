import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <img src={logo} alt="Logo"/>
                <ul className="nav-links">
                    <li><a href="/" className="nav-link">home</a></li>
                    <li><Link to="about" className="nav-link">about</Link></li>
                    <li><Link to="/" className="nav-link">tour</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
