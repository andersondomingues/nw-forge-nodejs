// import logo from './logo.svg';
import './Help.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';
import React from 'react';

import locdb from '../../libs/localization.js';

const Help = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
      <h1>{locdb.navigatorHelp}</h1>
      <p>
      HELP HELP HELPH LEPLH EPL
      </p>
      </form>
      <Footer />
    </div>
  );
}

export default Help;
