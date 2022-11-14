import { Button } from "../Button";
import style from "./Form.module.scss"

export function Form(){
    return(
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Add um novo Estudo 
                    </label>
                <input 
                type="text" 
                id="name" 
                name="tarefa"
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
                name="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>
            <Button 
                texto="Adicionar"
            />
        </form>
    )
}