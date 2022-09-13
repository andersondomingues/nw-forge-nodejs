import style from './Navigator.module.css';
import { NavLink } from 'react-router-dom';
import locdb from  '../../libs/localization';

const Navigator = () => {

  return (
    <nav className={style.navigator}>
      <ul>
        <li><NavLink linkActive={style.linkActive} to="/Home">{locdb.navigatorHome}</NavLink></li>
        <li><NavLink linkActive={style.linkActive} to="/Character">{locdb.navigatorCharacter}</NavLink></li>
        <li><NavLink linkActive={style.linkActive} to="/File">{locdb.navigatorFile}</NavLink></li>
        <li><NavLink linkActive={style.linkActive} to="/Configuration">{locdb.navigatorConfiguration}</NavLink></li>
        <li><NavLink linkActive={style.linkActive} to="/Help">{locdb.navigatorHelp}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigator;
