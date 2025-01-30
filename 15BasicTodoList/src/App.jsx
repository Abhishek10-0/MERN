import React,{useState} from 'react'

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])
  const [editIndex , setEditIndex] = useState(null)

  const handleAddTask = () => {
    if (task.trim() === "") return;

    if(editIndex !== null) {
      const updatedTask = tasks.map((t, index) => 
        index === editIndex ? task : t
      );
      setTasks(updatedTask);
      setEditIndex(null);
    }else{

    setTasks([...tasks, task]); 
    setTask("")
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_ ,i) => i !== index )

    setTasks(newTasks)

  }

  const updateTask = (index) => {
    setTask(tasks[index]); 
    setEditIndex(index);    
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
    <button onClick={() => updateTask(index)}>
      Update
    </button>
     </li>
  ))}
      
    </ul>

    
    </>
  )
}

export default App