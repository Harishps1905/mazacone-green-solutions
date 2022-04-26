import React, { Component } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Contactform from "./components/Contactform/Contactform";
import Products from "./components/pages/Products/Products";
import Services from "./components/pages/Services/Services";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      bgAnime: false,
      showPopup: false,
    };
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() =>
      this.setState({
        loading: false,
        bgAnime: true,
        showPopup: !this.state.showPopup,
      })
    );
  }

  popupHandler = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  render() {
    const { loading, bgAnime, showPopup } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return (
        <div className="AppLoader">
          <Loader />
        </div>
      ); // render null when app is not ready
    }

    return (
      <Router>
        <div className={bgAnime ? "App" : "AppLoader"}>
          {showPopup ? <Contactform formStatus={this.popupHandler} /> : null}
          <Navigation />
          <div id="contactLogo" onClick={this.popupHandler}>
            Contact
          </div>
          <div className="dummy">
            <Routes>
              <Route path="/Products" element={<Products />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
