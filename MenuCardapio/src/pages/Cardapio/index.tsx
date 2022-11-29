import styles from './Cardapio.module.scss';
import  Logo  from '../../assets/logo.svg';
export function Cardapio() {
  return (
    <div>
        <nav className={styles.menu}>
            <img src={Logo} alt="" />
            
        </nav>
        <head className={styles.header}>
          <div className={styles.header__text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, reiciendis dolorem? Odit, quis aspernatur saepe eius amet beatae harum cumque. Asperiores nobis dolore culpa, voluptatum quod laboriosam et possimus ipsam!</p>
          </div>
        </head>
    </div>
  );
}