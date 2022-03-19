import React, { Component } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class App extends Component {
  state = {
    loading: true,
    bgAnime: false,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() =>
      this.setState({ loading: false, bgAnime: true })
    );
  }

  render() {
    const { loading, bgAnime } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="AppLoader">
          <Loader />
        </div>
      ); // render null when app is not ready
    }

    return (
      <>
        <div className={bgAnime ? "App" : "AppLoader"}></div>

        <h1 className="font-face-gm">hello world</h1>
      </>
    );
  }
}

export default App;
