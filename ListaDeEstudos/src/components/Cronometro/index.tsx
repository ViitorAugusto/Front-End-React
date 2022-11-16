import { Button } from "../Button";
import { Relogio } from "./Time";

import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/time";
import { ITarefas } from "../../types/Tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefas | undefined;
  finalizaTarefa: () => void;
}

export function Cronometro({ selecionado, finalizaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizaTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Tempo Restante de Estudo</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)} texto="começar" />
    </div>
  );
}
