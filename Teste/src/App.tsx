import { useState } from "react"

export function App() {
  const [name, setName] = useState('')
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  
  return (
    <section>
      Digite seu nome:
      <input type="text" name="" id=" " onChange={handleInputChange}/>
      <hr />
      Seu nome é:{name}

    </section>
  )
}


