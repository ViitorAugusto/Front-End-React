import Home from '../../assets/icones/home-ativo.png';
import MaisCurtida from '../../assets/icones/mais-curtidas-inativo.png';
import MaisVista from '../../assets/icones/mais-vistas-inativo.png';
import Novas from '../../assets/icones/novas-inativo.png';
import SuerpeendaMe from '../../assets/icones/surpreenda-me-inativo.png';
import styles from './Menu.module.scss';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={Home} alt="Home" />
          <a href="/">Inicio</a>
        </li>

        <li className={styles.menu__item}>
          <img src={MaisCurtida} alt="" />
          <a href="/">Mais curtidas</a>
        </li>

        <li className={styles.menu__item}>
          <img src={MaisVista} alt="" />
          <a href="/">Mais Vista</a>
        </li>

        <li className={styles.menu__item}>
          <img src={Novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={SuerpeendaMe} alt="" />
          <a href="/">Surprenda Me</a>
        </li>
      </ul>
    </nav>
  );
}