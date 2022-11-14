
import style from "./Button.module.scss";

interface ButtonProps {
  texto: string;
}

export function Button(props: ButtonProps) {
  return (
    
    <button className={style.botao} >
      {props.texto}
    </button>
  );
}