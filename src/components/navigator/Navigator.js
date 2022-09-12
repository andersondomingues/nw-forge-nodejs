import style from './Navigator.module.css';

const Navigator = () => {

  return (
    <nav className={style.navigator}>
      <ul>
          <li><a href={style.linkActive} to="/Login">Nova</a></li>
          <li><a href={style.linkActive} to="/Login">Importar</a></li>
          <li><a href={style.linkActive} to="/Login">Exportar</a></li>
          <li><a href={style.linkActive} to="/Login">Ajuda</a></li>
      </ul>
    </nav>
  );
};

export default Navigator;
