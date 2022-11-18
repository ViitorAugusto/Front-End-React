import './ListaSuspensa.css';

export function ListaSuspensa(props) {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select 
            onChange={evento => props.aoAlterado(evento.target.value)}
            required={props.obrigatorio}
            value={props.valor}
            >
                <option value=''></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        
        </div>
    )
 }