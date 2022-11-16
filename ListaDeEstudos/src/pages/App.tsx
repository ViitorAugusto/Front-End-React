import { Cronometro } from "../components/Cronometro";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { useState } from "react";
import style from "./App.module.scss";
import { ITarefas } from "../types/Tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizaTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form
        onNewTarefa={(tarefa) => {
          setTarefas((tarefas) => {
            return [...tarefas, tarefa];
          });
        }}
      />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
    </div>
  );
}

export default App;
