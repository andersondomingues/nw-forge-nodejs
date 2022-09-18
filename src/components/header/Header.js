import React from 'react';
import style from './Header.module.css';
import locdb from  '../../libs/localization';
import logo from '../../assets/images/logo.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import braIcon from '../../assets/icons/flag-bra.png';
import usaIcon from '../../assets/icons/flag-usa.png';

const Header = () => {

  const PT_BR = 'pt';
  const EN_US = 'en';

  const [currentLocale, setCurrentLocale] = useState(locdb.getLanguage());

  const braClick = () => {
    if (currentLocale !== PT_BR) {
      locdb.setLanguage(PT_BR);
    }
    setCurrentLocale(PT_BR);
  }

  const usaClick = () => {

    if (currentLocale !== EN_US) {
      locdb.setLanguage(EN_US);
    }
    setCurrentLocale(EN_US);
  }

  const switchStyle = (navData) => {
    return navData.isActive ? style.linkActive : 'none';
  }

  return (
    <div className={style.header}>
      <a href="/">
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
          <li><NavLink className={switchStyle} to="/Discord">{locdb.headerDiscord}</NavLink></li>
          <li><NavLink className={switchStyle} to="/Help">{locdb.headerHelp}</NavLink></li>
          <li><NavLink className={switchStyle} to="/Configuration">{locdb.headerConfiguration}</NavLink></li>
          <li><NavLink className={switchStyle} to="/File">{locdb.headerFile}</NavLink></li>
          <li><NavLink className={switchStyle} to="/Home">{locdb.headerHome}</NavLink></li>          
        </ul>
      </nav>
    </div>
  );
};

export default Header;
