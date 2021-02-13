import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

// class component
class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
    this.toDark = this.toDark.bind(this);
    this.toLight = this.toLight.bind(this);
  }

  toDark() {
    this.setState({
      theme: 'dark'
    });
  }
  toLight() {
    this.setState({
      theme: 'light'
    })
  }

  render() {
    const {theme} = this.state;

    return (
      <div className={theme}>
      {
        theme === 'light' ?
            <button onClick={this.toDark}>🔦</button> :
            <button onClick={this.toLight}>💡</button>
      }
      </div>
    )
  }
}

// class component
class Theme extends React.Component {
  state = {
    theme: 'light'
  }

  toDark = () => this.setState({ theme: 'dark' });
  toLight = () => this.setState({ theme: 'light' });

  render() {
    const { theme } = this.state;

    return (
      <div className={theme}>
        {
          theme === 'light' ?
            <button onClick={this.toDark}>🔦</button> :
            <button onClick={this.toLight}>💡</button>
        }
      </div>
    )
  }
}

// function component with hooks
function Theme () {
    const [theme, setTheme] = React.useState('light');

    const toDark = () => setTheme('dark');
    const toLight = () => setTheme('light');

    return (
        <div className={theme}>
            {
                theme === 'light' ?
                    <button onClick={toDark}>🔦</button> :
                    <button onClick={toLight}>💡</button>
            }
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);
