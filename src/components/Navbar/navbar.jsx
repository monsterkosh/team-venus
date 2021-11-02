import React from 'react';
// import "../pages/styles/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>The Planets</div>
        <input type='checkbox' id='menu' />
        <label for='menu'>
          <img className='menu_img' src='./icons/icon-hamburger.svg' alt='' />
        </label>
        <nav className='navbar-mobile__items'>
          <ul>
            <li>
              {/* <Link to='/'> */}
              Mercury
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Venus
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Earth
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Mars
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Jupiter
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Saturn
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Uranus
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to='/'> */}
              Neptune
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </div>

      {/* <nav className="navbar-mobile__items">
                <ul>
                    <li><Link to='/' />Mercury</li>
                    <li><Link to='/' />Venus</li>
                    <li><Link to='/' />Earth</li>
                    <li><Link to='/' />Mars</li>
                    <li><Link to='/' />Jupiter</li>
                    <li><Link to='/' />Saturn</li>
                    <li><Link to='/' />Uranus</li>
                    <li><Link to='/' />Neptune</li>
                </ul>
            </nav> */}
    </div>
  );
}

export default Home;
