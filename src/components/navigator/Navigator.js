import style from './Navigator.module.css';
import { NavLink } from 'react-router-dom';
import locdb from  '../../libs/localization';

const Navigator = () => {
  return (
    <nav className={style.navigator}>
      <ul>
        <li><NavLink exact activeClassName={style.linkActive} to="/Character">{locdb.navigatorCharacter}</NavLink></li>
        <li><NavLink exact activeClassName={style.linkActive} to="/Powers">{locdb.navigatorPowers}</NavLink></li>
        <li><NavLink exact activeClassName={style.linkActive} to="/Boons">{locdb.navigatorBoons}</NavLink></li>
        <li><NavLink exact activeClassName={style.linkActive} to="/Companions">{locdb.navigatorCompanions}</NavLink></li>
        <li><NavLink exact activeClassName={style.linkActive} to="/Mounts">{locdb.navigatorMounts}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigator;
