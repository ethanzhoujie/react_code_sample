```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

// class component
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openId: 0,
      posts: props.posts
    }
    this.setOpenId = this.setOpenId.bind(this)
  }
  setOpenId(id) {
    this.setState({openId: id})
  }
  render() {
    const { openId, posts } = this.state
    return (
      <div>
        <ul>
          {posts.map(({ id, img, text }) => {
            const isOpen = openId === id
            const display = isOpen ? text : text.substring(50) + "..."
            return (
              <li key={id} style={{ border: isOpen ? "2px solid black" : "none" }}>
                <img src={img} alt={id}></img>
                <p>{display}</p>
                {!isOpen && <button onClick={() => this.setOpenId(id)}>Open</button>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// class component using class fields
class App extends React.Component {
  state = {
    openId: 0,
    posts: this.props.posts
  }

  setOpenId = (id) => {
    this.setState({openId: id})
  }
  render() {
    const { openId, posts } = this.state
    return (
      <div>
        <ul>
          {posts.map(({ id, img, text }) => {
            const isOpen = openId === id
            const display = isOpen ? text : text.substring(50) + "..."
            return (
              <li key={id} style={{ border: isOpen ? "2px solid black" : "none" }}>
                <img src={img} alt={id}></img>
                <p>{display}</p>
                {!isOpen && <button onClick={() => this.setOpenId(id)}>Open</button>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// function component using hooks
function App({ posts }) {
  const [openId, setOpenId] = React.useState(0);

  return (
    <div>
      <ul>
        {posts.map(({ id, img, text }) => {
          const isOpen = openId === id
          const display = isOpen ? text : text.substring(50) + "..."
          return (
            <li key={id} style={{ border: isOpen ? "2px solid black" : "none" }}>
              <img src={img} alt={id}></img>
              <p>{display}</p>
              {!isOpen && <button onClick={() => setOpenId(id)}>Open</button>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App posts={[
    {
      id: 0,
      img: 'https://ui.dev/images/content/code-splitting.png',
      text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.'
    },
    {
      id: 1,
      img: 'https://ui.dev/images/content/composition-vs-inheritance.png',
      text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.'
    },
    {
      id: 2,
      img: 'https://ui.dev/images/content/modules.png',
      text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.'
    }
  ]} />,
  rootElement
);
```

