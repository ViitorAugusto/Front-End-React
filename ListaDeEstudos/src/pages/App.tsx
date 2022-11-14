
import { Cronometro } from "../components/Cronometro";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { useState } from "react";
import style from "./App.module.scss";
import { ITarefas } from "../types/Tarefa";

function App() {

  const [tarefas, setTarefas] = useState<ITarefas[]>([])   
  return (
    
    <div className={style.AppStyle}>

      <Form 
       
     
      />
      <List 
      tarefas={tarefas}
      
      />
      <Cronometro />
    </div>

  );
}

export default App;
