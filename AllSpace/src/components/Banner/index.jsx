import BannerIMG from "./banner.png";
import styles from "./Banner.module.scss";
export function Banner() {
  return (
    <div>
      <div className={styles.banner}>
        <h1>A Galeria mais completa do espaco</h1>
        <img src={BannerIMG} alt="" />
      </div>
    </div>
  );
}
