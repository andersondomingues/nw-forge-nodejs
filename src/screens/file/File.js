// import logo from './logo.svg';
import './File.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';

import locdb from '../../libs/localization.js';

const File = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
        <h1>{locdb.navigatorFile}</h1>
        <fieldset>
          <legend>{locdb.fileImport}</legend>
          <input type="file" />
        </fieldset>
        <fieldset>
          <legend>{locdb.fileExport}</legend>
          <input type="file" />
          <input type="button" value="Selecionar" />
        </fieldset>
      </form>
      <Footer />
    </div>
  );
}

export default File;
