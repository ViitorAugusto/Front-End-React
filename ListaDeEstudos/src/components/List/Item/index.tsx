import { ITarefas } from "../../../types/Tarefa"
import style from "./Item.module.scss"

//

export function Item ({tarefa, tempo}: {tarefa: string, tempo: string}) {
    console.log(tarefa, tempo)
    return(
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}