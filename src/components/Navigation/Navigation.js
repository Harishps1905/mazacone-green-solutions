import React, { Component } from "react";
import "./Navigation.css";
import logo from "../../assets/mazacone_logo.png";
import fullLogo from "../../assets/mazacone_txt_logo2.png";
// import fullGradLogo from "../../assets/mazacone_txt_logo2grad.png";
import Menu from "../Menu/Menu";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      width: window.innerWidth,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  hamburger = () => {
    if (this.state.mobileMenu) {
      setTimeout(() => {
        this.setState({
          mobileMenu: false,
        });
      }, 2000);
    } else {
      this.setState({
        mobileMenu: true,
      });
    }
  };

  render() {
    return (
      <section id="mainNav">
        <nav className="navigation">
          <div className="Brandname flex-row">
            <img src={this.state.width < 600 ? logo : fullLogo} />
          </div>
          <svg
            className="hamburger desktopHide"
            width="60"
            height="50"
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={this.hamburger}
          >
            <path
              d="M0 5H60M0 24.8305H60M0 44.661H60"
              stroke="#0096ff"
              strokeWidth="9"
            />
          </svg>
          {this.state.mobileMenu || this.state.width > 600 ? (
            <Menu mobileMenuHandler={this.hamburger} />
          ) : null}
        </nav>
      </section>
    );
  }
}
export default Navigation;
