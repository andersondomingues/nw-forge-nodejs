import React from 'react';
import style from './Header.module.css';
import locdb from  '../../libs/localization';
import logo from '../../assets/images/logo.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import braIcon from '../../assets/icons/flag-bra.png';
import usaIcon from '../../assets/icons/flag-usa.png';

const Header = () => {

  const [currentLocale, setCurrentLocale] = useState(locdb.getLanguage());

  const braClick = () => {
    locdb.setLanguage('pt');
    setCurrentLocale('pt');
  }

  const usaClick = () => {
    locdb.setLanguage('en');
    setCurrentLocale('us');
  }

  return (
    <div className={style.header}>
      <a href="/" className={style.linkActive}>
        <img className={style.logo} src={logo} alt="solartech logo" />
      </a>
      <h1>
        NW-FORGE<br />
        <span>v1.0.0.0 Alpha</span>
      </h1>
      <nav className={style.menu}>
        <ul>
          <li>
            <img src={braIcon} alt="" title="Português do Brasil" onClick={braClick}/>
            <img src={usaIcon} alt="" title="American English" onClick={usaClick} />
          </li>
          <li><NavLink activeClassName={style.linkActive} to="/Discord">{locdb.headerDiscord}</NavLink></li>
          <li><NavLink activeClassName={style.linkActive} to="/Help">{locdb.headerHelp}</NavLink></li>
          <li><NavLink activeClassName={style.linkActive} to="/Configuration">{locdb.headerConfiguration}</NavLink></li>
          <li><NavLink activeClassName={style.linkActive} to="/File">{locdb.headerFile}</NavLink></li>
          <li><NavLink activeClassName={style.linkActive} to="/Home">{locdb.headerHome}</NavLink></li>          
        </ul>
      </nav>
    </div>
  );
};

export default Header;
