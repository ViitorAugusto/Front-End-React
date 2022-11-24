import styles from "./Cards.module.scss";
import fotos from "./fotos.json";
import favorito from "../../assets/icones/favorito.png";
import open from "../../assets/icones/open.png";
export function Cards() {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => {
        return (
          <li key={foto.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={foto.imagem}
              alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>{foto.titulo}</p>
            <div>
              <p>{foto.creditos}</p>
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