import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import Banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";
export function Home() {
  return (
    <div>
      <>
        <Header />
        <main>
          <section className={styles.principal}>
            <Menu />
            <div className={styles.principal__imagem}>
              <h1>A Galeria mais completa do espaco</h1>
              <img className={styles.principal__imagem} src={Banner} alt="" />
            </div>
          </section>
        </main>
      </>
    </div>
  );
}
