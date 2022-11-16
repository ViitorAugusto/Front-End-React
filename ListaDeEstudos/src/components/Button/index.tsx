import style from "./Button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({ type = "button", texto, onClick }: ButtonProps) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {texto}
    </button>
  );
}
