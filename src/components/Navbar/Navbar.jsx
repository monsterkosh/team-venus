import React from 'react';
import { Link } from 'react-router-dom';
import hamburguerIcon from '../../assets/icon-menu.svg';
import chevron_right from '../../assets/right-chevron.png';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.navbar__wrapper}>
        <div className={style.navbar__logo}>The Planets</div>
        <input type='checkbox' id='menu' className={style.menu} />
        <label htmlFor='menu'>
          <img className={style.menu_img} src={hamburguerIcon} alt='' />
        </label>
        <nav
          id={style.items_navbar__mobile}
          className={style.navbar_mobile__items}
        >
          <ul>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--blue-lighter)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/' /> */}
                Mercury
                {/* <Link to='/' /> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--yellow)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Venus
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--purple)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Earth
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--red-light)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Mars
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--red)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Jupiter
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--orange)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Saturn
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--cyan)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Uranus
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--blue-light)' }}
                  className={style.circle}
                ></span>
                {/* <Link to='/'> */}
                Neptune
                {/* </Link> */}
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
          </ul>
        </nav>
        <nav className={style.navbar_desktop__items}>
          <ul>
            <li>
              <Link to='/mercury'>Mercury</Link>
            </li>
            <li>
              <Link to='/venus'>Venus</Link>
            </li>
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
  );
}

export default Navbar;
