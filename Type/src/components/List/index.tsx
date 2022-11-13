export function List(){
    const tarefas = [{
        id: 1,
        tarefas: "Estudar React",
        tempo: "02:00:00"
    },
    {
        id: 2,
        tarefas: "Estudar JavaScript",
        tempo: "03:00:00"
    },
    
]


    return(
        <aside>
            <h2>Lista de Estudos</h2>
            <ul>
                {
                    tarefas.map((tarefa,index)=>(
                        <li key={index}>
                            <h3>{tarefa.tarefas}</h3>
                            <span>{tarefa.tempo}</span>
                        </li>
                    ))
                    
                }

            </ul>
        </aside>
    )
}