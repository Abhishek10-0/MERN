import React,{useState} from 'react'

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]); 
    setTask("")
 
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_ ,i) => i !== index )

    setTasks(newTasks)

  }

  return (
    <>
    
    <div>
    <input 
    type="text"
    value={task}
    placeholder="Add Todo"
    onChange={(e) => setTask(e.target.value)}
    />

    <button onClick={handleAddTask}>
      Add Todo
    </button>
    </div>

    <ul>
  {tasks.map((t,index) => (
    <li key={index} > 
    {t}
    
    <button onClick={() => removeTask(index)}>
      X
    </button>
     </li>
  ))}
      
    </ul>

    
    </>
  )
}

export default App