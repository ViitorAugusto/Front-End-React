import style from "./Footer.module.scss";
import Twitter from "../../assets/img/twitter.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__social}>
          <a href="#">
            <img src={Twitter} alt="Twitter" target="_blank" rel="noreferrer" />
          </a>
          <a href="#">
            <img
              src={Instagram}
              alt="Twitter"
              target="_blank"
              rel="noreferrer"
            />
          </a>
          <a href="#">
            <img
              src={Facebook}
              alt="Twitter"
              target="_blank"
              rel="noreferrer"
            />
          </a>
        </div>
        <div>
          <p>© 2021 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
