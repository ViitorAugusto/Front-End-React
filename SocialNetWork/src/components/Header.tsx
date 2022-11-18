import styles from './Header.module.css';
import ingiteLogo from '../img/Ignitelogo.svg';

export function Header() {
  return (
    <header className={styles.header}>
     <img src={ingiteLogo} alt="LogoTipo do Ignite" />
     <p>Ignite Feed</p>
    </header>
  );
}

