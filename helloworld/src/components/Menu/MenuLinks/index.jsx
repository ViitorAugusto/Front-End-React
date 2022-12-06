import styles from "./MenuLinks.module.css";
import { Link, useLocation } from "react-router-dom";

export function MenuLinks({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      className={`
     ${styles.link}
     ${localizacao.pathname === to ? styles.linkDestaque : ""}
     `}
      to={to}
    >
      {children}
    </Link>
  );
}
