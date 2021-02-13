import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todo () {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleSubmit = () => {
    setTodos((todos) => (todos.concat([{
      td: input,
      id: generateId()
    }])))
    setInput("")
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id))
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}></input>
      <button onClick={() => handleSubmit()}>Submit</button>

      <ul>
        {
          todos.map(({td, id}) => (
            <li> {td} <button onClick={() => removeTodo(id)}>X</button></li>
          ))
        }
      </ul>
    </div>
  );
}

function generateId () {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
