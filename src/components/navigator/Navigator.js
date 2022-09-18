import style from './Navigator.module.css';
import { NavLink } from 'react-router-dom';
import locdb from  '../../libs/localization';

const Navigator = () => {

  const switchStyle = (navData) => {
    return navData.isActive ? style.linkActive : 'none';
  }

  return (
    <nav className={style.navigator}>
      <ul>
        <li><NavLink className={switchStyle} to="/Character">{locdb.navigatorCharacter}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Powers">{locdb.navigatorPowers}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Boons">{locdb.navigatorBoons}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Companions">{locdb.navigatorCompanions}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Mounts">{locdb.navigatorMounts}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Statistics">{locdb.navigatorStatistics}</NavLink></li>
        <li><NavLink className={switchStyle} to="/Optimization">{locdb.navigatorOptimization}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigator;
