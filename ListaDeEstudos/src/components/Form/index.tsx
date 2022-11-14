import { Button } from "../Button";
import style from "./Form.module.scss"
import { useState } from "react";
import { ITarefas } from "../../types/Tarefa";

export function Form(){
    
    

    const [tarefa, setTarefa] = useState("");
    const [time, setTime] = useState("00:00:00")

    function handleTarefa(event: any){
        event.preventDefault();
        
        console.log(tarefa, time);
    }
    
    return(
        <form className={style.novaTarefa} onSubmit={handleTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Add um novo Estudo 
                    </label>
                <input 
                type="text" 
                id="name" 
                name="tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
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
            <Button 
            type="submit"
            texto="Adicionar"
            />
        </form>
    )
}