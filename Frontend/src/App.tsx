import React, { useEffect, useState } from 'react';

interface ITodo {
  id: string;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('http://localhost:5256/api/Todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  console.log(todos);

  return (
    <React.Fragment>
      <h1>Todo:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
