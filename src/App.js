import React, { Component } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="App">
          <Loader />
        </div>
      ); // render null when app is not ready
    }

    return (
      <div className="App">
        <h1 className="font-face-gm">hello world</h1>
      </div>
    );
  }
}

export default App;
