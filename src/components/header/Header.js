import React from 'react';
import style from './Header.module.css';

import logo from '../../assets/images/logo.png';

const Header = () => {

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
          <li><a href="/CadastroIntegradora">Discord</a></li>
          <li><a href="/CadastroIntegradora">Discord</a></li>
          <li><a href="/CadastroIntegradora">Discord</a></li>
          <li><a href="/CadastroIntegradora">Discord</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
