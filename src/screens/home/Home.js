// import logo from './logo.svg';
import './Home.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';

function Home() {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <Footer />
    </div>
  );
}

export default Home;
