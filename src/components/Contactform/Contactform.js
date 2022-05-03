import React, { Component, createRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types"; // ES6
import "./Contactform.css";
class Contactform extends Component {
  constructor(props) {
    super(props);
    this.form = createRef();
  }
  closeButton = () => {
    this.props.formStatus();
  };
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56phzm9",
        "template_k9pns74",
        this.form.current,
        "Oc4CPRDQ3wt1yN9ws"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then((result) => {
        this.props.formStatus();
      });
    e.target.reset();
  };
  render() {
    return (
      <>
        <div className="popup">
          <div className="popup_inner">
            <div className="skip" onClick={this.closeButton}>
              skip
            </div>
            <div className="container">
              <div className="form-container">
                <div className="left-container">
                  <div className="left-inner-container">
                    <h2>Let's Chat</h2>
                    <p>
                      Whether you have a question, want to start a project or
                      simply want to connect.
                    </p>
                    <br />
                    <p>Feel free to send me a message in the contact form</p>
                  </div>
                </div>
                <div className="right-container">
                  <div className="right-inner-container">
                    <form ref={this.form} onSubmit={this.sendEmail}>
                      <h2 className="lg-view">Contact</h2>
                      <h2 className="sm-view">Let's Chat</h2>
                      <p>* Required</p>

                      <input
                        type="text"
                        placeholder="Name *"
                        name="name"
                        required
                      />
                      <input
                        type="phone"
                        placeholder="Phone *"
                        name="phone"
                        required
                      />
                      <input type="email" placeholder="Email" name="email" />
                      <textarea
                        rows="4"
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Contactform.propTypes = {
  formStatus: PropTypes.func.isRequired,
};
export default Contactform;
