
import style from "./Button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps) {
  return (
    
    <button className={style.botao} >
      {props.texto}
    </button>
  );
}