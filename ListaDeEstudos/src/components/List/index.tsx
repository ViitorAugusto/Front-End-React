import style from "./List.module.scss";
import { Item } from "./Item";
import { ITarefas } from "../../types/Tarefa";

export function List({ tarefas }: { tarefas: ITarefas[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} tarefa={tarefa.nome} tempo={tarefa.tempo} />
        ))}
      </ul>
    </aside>
  );
}
