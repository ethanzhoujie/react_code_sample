```javascript
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

// class component
class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  handleSubmit() {
    const { input, todos } = this.state
    this.setState((state, props) => (
      {
        input: "",
        todos: todos.concat({
          text: input,
          id: generateId()
        })
      }
    ))
  }

  handleInput(e) {
    const str = e.target.value
    this.setState((state, props) => {
      return {
        input: str
      }
    })
  }

  removeTodo(id) {
    const todos = this.state.todos
    this.setState((state, props) => ({
      todos: todos.filter((todo) => todo.id != id)
    }))
  }

  render() {
    const { input, todos } = this.state
    return (
      <div>
        <input type="text" value={input} onChange={this.handleInput}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {
            todos.map((todo) => {
              const { text, id } = todo
              return (<li key={id}> {text} <button onClick={() => this.removeTodo(id)}>X</button></li>)
            })
          }
        </ul>

      </div>
    )
  }
}

// class component using class fields
class Todo extends React.Component {
  state = {
    input: "",
    todos: []
  }

  handleSubmit = () => {
    const { input, todos } = this.state
    this.setState((state, props) => (
      {
        input: "",
        todos: todos.concat({
          text: input,
          id: generateId()
        })
      }
    ))
  }

  handleInput = (e) => {
    const str = e.target.value
    this.setState((state, props) => {
      return {
        input: str
      }
    })
  }

  removeTodo = (id) => {
    const todos = this.state.todos
    this.setState((state, props) => ({
      todos: todos.filter((todo) => todo.id != id)
    }))
  }

  render() {
    const { input, todos } = this.state
    return (
      <div>
        <input type="text" value={input} onChange={this.handleInput}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {
            todos.map((todo) => {
              const { text, id } = todo
              return (<li key={id}> {text} <button onClick={() => this.removeTodo(id)}>X</button></li>)
            })
          }
        </ul>

      </div>
    )
  }
}

// function component using hooks
function Todo() {
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
      <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
      <button onClick={() => handleSubmit()}>Submit</button>

      <ul>
        {
          todos.map(({ td, id }) => (
            <li key={id}> {td} <button onClick={() => removeTodo(id)}>X</button></li>
          ))
        }
      </ul>
    </div>
  );
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
```

