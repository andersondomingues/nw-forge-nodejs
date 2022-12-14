// import logo from './logo.svg';
import './Home.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';
import React from 'react';

import locdb from '../../libs/localization.js';

const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
      <h1>{locdb.navigatorHome}</h1>
      <p>
      home home home home home home home home home home home home home home home home home home home home 
      </p>
      </form>
      <Footer />
    </div>
  );
}

export default Home;
