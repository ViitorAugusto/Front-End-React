import { useLocation} from "react-router-dom";
import styles from "./Menu.module.css";
import { MenuLinks } from "./MenuLinks";
export function Menu() {
  const localizacao = useLocation();
  console.log(localizacao);


  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLinks to='/'>Home</MenuLinks>
        
        <MenuLinks to='/sobremim'>Sobre Mim</MenuLinks>

        <MenuLinks to='/projetos'>Projetos</MenuLinks>
       

      </nav>
    </header>
  );
}
