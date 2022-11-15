import { Button } from "../Button";
import style from "./Form.module.scss";
import React, { useState } from "react";
import { ITarefas } from "../../types/Tarefa";
import{ v4 as uuidv4} from 'uuid'

export function Form({
  onNewTarefa,
}: {
  onNewTarefa: (tarefa: ITarefas) => void;
}) {
  const [nome, setNome] = useState("");
  const [time, setTime] = useState("00:00:00");

  function handleTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onNewTarefa({
      nome: nome,
      tempo: time,
      completado: false,
      selecionado: false,
      id: uuidv4(),

    });
    setTime("00:00:00");
    setNome("");
  }

  
  return (
    <form className={style.novaTarefa} onSubmit={handleTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Add um novo Estudo</label>
        <input
          type="text"
          id="name"
          name="tarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="O que voce quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="tempo"
          step="1"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          name="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" texto="Adicionar" />
    </form>
  );
}
