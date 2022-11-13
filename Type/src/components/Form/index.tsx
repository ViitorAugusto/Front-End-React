import { Button } from "../Button/Button";

export function Form(){
    return(
        <form>
            <div>
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
            
            <div>
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
            <Button />
        </form>
    )
}