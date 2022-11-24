import { Cards } from "../Cards";
import { Tags } from "../Tags";
import styles from "./Gallery.module.scss";

export function Gallery() {
  return (
    <section className={styles.galeria}>
      <h2>Gallery</h2>
      <Tags />
      <ul className={styles.galeria__cards}>
        
        <Cards />

      </ul>
    </section>
  );
}
