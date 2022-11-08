
import { useState } from "react"
import { List } from "./components/List"



export function App() {
  const [inputValue, setInputValue] = useState("")//Para guardar o valor do input
  const [tasks, setTasks] = useState([])//criando um array de tarefas

  function handleChange(event) {
    setInputValue(event.target.value)
 
  }

  function handleClick() {
    setTasks([...tasks, inputValue])
    setInputValue("")
    console.log(inputValue)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
  }

  function handleDeleteTask(task) {
    const newTasks = tasks.filter((taskItem) => taskItem !== task)
    setTasks(newTasks)
  }

  return (
    <div>
      <h1>Lista</h1>
        <form
        onSubmit={handleFormSubmit}
        >
          <input 
          type="text" 
          onChange={handleChange}
          value={inputValue}
          />
          
          <button
           onClick={handleClick}>
           
            Add </button>
          
        </form>  
          <ul>
            {tasks.map((task, index) => (
              <li>{task}
              <button 
              onClick={() => handleDeleteTask(task)}
               >X</button>
              </li>
            ))}

          </ul>
      </div>
  )
  
}

export default App
