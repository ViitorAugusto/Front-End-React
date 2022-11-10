export function OpcoesHeader() {
  
  
  const textoOpcoes = ['Todos', 'Documentários', 'Comédia', 'Suspense', 'Terror']
  
  
  return (
    <ul>
      {
          textoOpcoes.map(texto => {
          return <li><p>{texto}</p></li>
        })
      }
    </ul>
  )
}