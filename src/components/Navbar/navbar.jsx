import React from 'react'

import hamburguerIcon from '../../assets/icon-menu.svg';
import chevron_right from '../../assets/right-chevron.png';
import "../../styles/components/navbar.css";

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <div className="navbar__wrapper">
                <div className="navbar__logo">The Planets</div>
                <input type="checkbox" id="menu" />
                <label for="menu">
                    <img className="menu_img" src={hamburguerIcon} alt="" />
                </label>
                <nav id="items-navbar__mobile" className="navbar-mobile__items">
                    <ul>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--blue-lighter)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Mercury
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--yellow)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Venus
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>
                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--purple)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Earth
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--red-light)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Mars
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--red)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Jupiter
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>                        
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--orange)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Saturn
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--cyan)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Uranus
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>
                        </li>
                        <li>
                            <div className="navbar-mobile__list-items">
                                <span style={{backgroundColor: 'var(--blue-light)'}} className="circle"></span>
                                {/* <Link to='/'> */}
                                    Neptune
                                    {/* </Link> */}
                                <i className="navbar-mobile__chevron">
                                    <img className="chevron_right" src={chevron_right} alt="" />
                                </i>

                            </div>   
                        </li>
                    </ul>
                </nav>
            
            
                <nav className="navbar-desktop__items">
                    <ul>
                        <li>Mercury</li>
                        <li>Venus</li>
                        <li>Earth</li>
                        <li>Mars</li>
                        <li>Jupiter</li>
                        <li>Saturn</li>
                        <li>Uranus</li>
                        <li>Neptune</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
