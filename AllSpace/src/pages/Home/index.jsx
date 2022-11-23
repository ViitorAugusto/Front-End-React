import { Banner } from "../../components/Banner";
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
      </>
    </div>
  );
}
