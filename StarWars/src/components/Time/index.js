import { Card } from '../Card';
import './Time.css';

export function Time (props) {
const css = { backgroundColor:props.corSecundaria };
const css2 = { borderColor:props.corPrimaria };
    return(

        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={css2}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaboradores => 
            <Card 
            corDeFundo={props.corPrimaria}
            key={colaboradores.nome}
            nome={colaboradores.nome}
            cargo={colaboradores.cargo}
            imagem={colaboradores.imagem}
            
            />)}
            </div>
        </section>
    )

}

