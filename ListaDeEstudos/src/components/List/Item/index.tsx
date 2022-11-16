import { ITarefas } from "../../../types/Tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefas {
  selecionarTarefa: (tarefaSelecionada: ITarefas) => void;
}

export function Item({
  nome,
  tempo,
  id,
  selecionado,
  completado,
  selecionarTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionarTarefa({ nome, tempo, id, selecionado, completado })
      }
    >
      <h3>{nome}</h3>
      <span>{tempo}</span>
    </li>
  );
}
