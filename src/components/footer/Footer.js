import style from './Footer.module.css';

const Footer = ({ children }) => (
  <div className={style.footer}>
    <p className={style.rights}>
      {children}
      &reg;2022. Todos os direitos reservados.
    </p>
  </div>
);

export default Footer;
