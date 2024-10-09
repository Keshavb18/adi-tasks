import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

 
  function addTask() {
    if (inputValue !== '') {
    
      setTasks([...tasks, { text: inputValue, completed: false }]);
      
      setInputValue('');
    }
  }


  function deleteTask(index) {
     
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="list">
        <div className="bar">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
            placeholder="Enter a new task"
          />
          <button onClick={addTask} className="add">Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  const newTasks = [...tasks];
                  newTasks[index].completed = !newTasks[index].completed;
                  setTasks(newTasks);
                }}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
