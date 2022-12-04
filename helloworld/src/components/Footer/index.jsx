import styles from "./Footer.module.css";

import {AiOutlineTrademarkCircle} from "react-icons/ai";
export function Footer() {
  return (
    <footer className={styles.footer}>
      
        <AiOutlineTrademarkCircle />
        <p>2021</p>
        <p>Desenvolvido por VitorAugusto</p>
    </footer>
  );
}
