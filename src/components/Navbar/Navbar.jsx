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
            <Link className={style.navbar_desktop__links} to="/mercury">
              <li>
                <div className={style.navbar_mobile__list_items}>
                  <span
                    style={{ backgroundColor: 'var(--blue-lighter)' }}
                    className={style.circle}
                  ></span>
                  
                  Mercury
                  <i className={style.navbar_mobile__chevron}>
                    <img
                      className={style.chevron_right}
                      src={chevron_right}
                      alt=''
                    />
                  </i>
                </div>
              </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/venus">
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--yellow)' }}
                  className={style.circle}
                ></span>
                Venus
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/earth">
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--purple)' }}
                  className={style.circle}
                ></span>
                Earth
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/mars">
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--red-light)' }}
                  className={style.circle}
                ></span>
                Mars
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to='/jupiter'>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--red)' }}
                  className={style.circle}
                ></span>
                Jupiter
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/saturn">
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--orange)' }}
                  className={style.circle}
                ></span>
                Saturn
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/uranus">
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--cyan)' }}
                  className={style.circle}
                ></span>
                Uranus
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
            <Link className={style.navbar_desktop__links} to='/neptune'>
            <li>
              <div className={style.navbar_mobile__list_items}>
                <span
                  style={{ backgroundColor: 'var(--blue-light)' }}
                  className={style.circle}
                ></span>
                Neptune
                <i className={style.navbar_mobile__chevron}>
                  <img
                    className={style.chevron_right}
                    src={chevron_right}
                    alt=''
                  />
                </i>
              </div>
            </li>
            </Link>
          </ul>
        </nav>
        <nav className={style.navbar_desktop__items}>
          <ul>
            <Link className={style.navbar_desktop__links} to='/mercury'>
              <li>
                Mercury
              </li>
            </Link>
            <Link className={style.navbar_desktop__links} to='/venus'>
              <li>
                Venus
              </li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/earth">
              <li>Earth</li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/mars">
              <li>Mars</li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/jupiter">
              <li>Jupiter</li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/saturn">
              <li>Saturn</li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/uranus">
              <li>Uranus</li>
            </Link>
            <Link className={style.navbar_desktop__links} to="/neptune">
              <li>Neptune</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
