import styles from "./Tags.module.scss";
import fotos from "../Gallery/fotos.json";
export function Tags({tags, novasFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
       {tags.map((tag) => {
          return (
            <li key={tag} 
            className={styles.tags__item}
            onClick={() => novasFotos(tag)}
            >
             {tag}
             
            </li>
          );
       })}
       <li onClick={()=> setItens(fotos)} >Todas</li>
      </ul>
    </div>
  );
}