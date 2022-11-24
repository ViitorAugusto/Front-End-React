import styles from "./Menu.module.scss";
import menu from "./menu.json";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {menu.map((item) => {
          return (
            <li key={item.id}className={styles.menu__item}>
              <img src={item.path} alt={item.alt} />
              <a href="/">{item.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
