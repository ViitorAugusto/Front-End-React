import { Cards } from "./Cards/index.jsx";
import { useState } from "react";
import styles from "./Gallery.module.scss";
import fotos from "./fotos.json";
import { Tags } from "../Tags";

export function Gallery() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((item) => item.tag))];

  const filtrar = (tag) => {
    const novasFotos = fotos.filter((item) => {
      return item.tag === tag
    });
    setItens(novasFotos);
  }
  return (
    <section className={styles.galeria}>
      <h2>Gallery</h2>
      <Tags tags={tags} novasFotos={filtrar} setItens={setItens}/>

      <Cards itens={itens} styles={styles} />
    </section>
  );
}
