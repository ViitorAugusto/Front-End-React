import { Button } from "../Button";
import { Relogio } from "./Time";

import style from "./Cronometro.module.scss";


export function Cronometro () {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie</p>
        <div className={style.relogioWrapper}>
            <Relogio />
        </div>
        <Button 
        texto='começar' />
        </div>
    )
}