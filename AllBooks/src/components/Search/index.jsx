import { useState } from "react"
import { livros } from "./dados"
export function Search() {
  
  const [searchBooks, setSearchBooks] = useState([])
  
  console.log(searchBooks)
  function searchBook(event) {
    const search = event.target.value
    const searchResult = livros.filter(livro => 
      livro.nome.includes(search))
    setSearchBooks(searchResult)
  }
  
  return (
    <div>
        <h2>Já sabe por onde comecar?</h2>
            <h3>Encontre seu livro em nossa estante</h3>
      
      <input 
      type="text" 
      onBlur={searchBook}
      placeholder="Digite o nome do livro"
      />

      <button>Pesquisar</button>
      
      {
        searchBooks.map(livro => (
          <div key={livro.id}>
            <h3>{livro.nome}</h3>
            <img src={livro.scr} alt={livro.nome} />
          </div>
        ))
      }
    
    </div>
  )
}