import styles from "./Botao.module.css";

export function Botao({ children, onClick, tamanho }) {
    return (
        <button className={`${styles.botaoLer} ${styles[tamanho]}`}  >
        {children}
        </button>
    );
    }