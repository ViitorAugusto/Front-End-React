import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto/Campo';
import { ListaSuspensa } from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

export function Formulario (props) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Crie os cards dos seus Próprios <span>JADI</span></h2>
                
                <CampoTexto 
                obrigatorio={true}
                label="Nome" 
                placeholder="Digite seu Nome" 
                valor={nome}
                aoAlterado={ valor => setNome(valor) }
                />
                
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu Cargo"  
                valor={cargo}
                aoAlterado={ valor => setCargo(valor) }
                />
                
                <CampoTexto  
                label="Imagem" 
                placeholder="Digite o endereco de Imagem"
                valor ={imagem}
                aoAlterado={ valor => setImagem(valor) }
                />
                
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times} 
                valor={time}
                aoAlterado={ valor => setTime(valor) }
                />
                
                
                <Botao texto="Criar Card"/>
                  
            </form>
        </section>



    )
}