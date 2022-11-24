//import styles from "./Cards.module.scss";
//import itens from "./fotos.json";
import favorito from "../../../assets/icones/favorito.png";
import open from "../../../assets/icones/open.png";
export function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coracao de curtir" />
                <img src={open} alt="ícone cabrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}