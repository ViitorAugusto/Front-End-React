import './CampoTexto.css';

export function CampoTexto(props) {
    
    
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);

    }
  
    return (
        <div className='campoTexto'>
            <label >{props.label}</label>
            <input value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={props.placeholder} />

        </div>
    )
}