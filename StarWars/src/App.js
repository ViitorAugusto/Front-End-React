import { Banner } from './components/Banner/Banner';
import { Formulario } from './components/Formulario';
import { useState } from 'react';
import { Time } from './components/Time';



function App() {

  const times =[
    {
      nome: 'JADI',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Imperial',
      corPrimaria: '#82cffa',
      corSecundaria: '#e5f5ff',
    },
    {
      nome: 'Mandaloriano',
      corPrimaria: '#A6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Droide',
      corPrimaria: '#Db6ebf',
      corSecundaria: '#Fae9f5',
    },
    {
      nome: 'Espaçonave',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Sabres de luz',
      corPrimaria: '#FFBA05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: 'Sith',
      corPrimaria: '#FF8a29',
      corSecundaria: '#ffEEDF',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoColaboradorAdicionado (colaborador) {
  setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Banner />
      
      <Formulario 
      times={times.map(time => time.nome)}
      aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>

      {times.map (time => 
      <Time key={time.nome} 
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      
      />)}
      
    </div>
  );
}

export default App;
