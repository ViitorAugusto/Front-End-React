import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import styles from "./PaginaInicial.module.scss";
export function Home() {
  return (
    <div>
      <>
        <Header />
        <main>
          <section className={styles.principal}>
            <Menu />
            <Banner />

          </section>
        </main>
        <div className={styles.galeria}>
          <Gallery  />
        </div>
        <Footer />
      </>
    </div>
  );
}
