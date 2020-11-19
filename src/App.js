import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
          setTodos(json);
      })
  }, []);

  return (
    <div className="app">
      {todos.map(todos => {
        return (
          <div className={`content ${todos.completed ? 'decoration' : ''}`}>
            <table border='1'>
              {todos.title}
            </table>
          </div>
        )
      })}
    </div>
  );
}

export default App;
