import style from "./List.module.scss";
import { Item } from "./Item";
import { ITarefas } from "../../types/Tarefa";

interface Props {
  tarefas: ITarefas[];
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de Estudos do Dia.</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item
            key={tarefa.id}
            nome={tarefa.nome}
            tempo={tarefa.tempo}
            id={tarefa.id}
            selecionado={tarefa.selecionado}
            completado={tarefa.completado}
            selecionarTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}
