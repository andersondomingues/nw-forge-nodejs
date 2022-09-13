// import logo from './logo.svg';
import './Configuration.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';

import locdb from '../../libs/localization.js';

const Configuration = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
        <h1>{locdb.navigatorConfiguration}</h1>
        <fieldset>
          <legend>{locdb.configurationLanguage}</legend>
        </fieldset>
        <p>
        configuration configuration configuration configuration configuration configuration configuration configuration 
        </p>
      </form>
      <Footer />
    </div>
  );
}

export default Configuration;
