import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto1.png";
export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Banner Title</h1>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          exercitationem molestiae quasi eum vitae consectetur quam voluptates
          reprehenderit nesciunt, fugit minus ea consequatur adipisci quod
          temporibus enim accusamus et facere?
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt=""
          aria-hidden={true}
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt="" />
      </div>
    </div>
  );
}
