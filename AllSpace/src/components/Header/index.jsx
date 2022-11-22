import Logo from './Logo.png';
import Search from './Vector.png';
import styles from './Header.module.scss';


export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt=" Logo Space" />
      <div className={styles.header__container}>
        <input 
        className={styles.header__input}
        type="text"
        placeholder="Search"
        />
        <img src={Search} alt="Lupa de Busca " />
      </div>
    </header>
  );
}