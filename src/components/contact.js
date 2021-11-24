
import React, { useState } from "react";
import { validation } from "../utils/helpers";


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const correctInput = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue)
        } else {
            setMessage(inputValue);
        }
    }
    const submission = (e) => {
        e.preventDefault();
        if (!validation(email)) {
            setError("Please enter a valid email address.")
            return;
        } else if (!name) {
            setError("Don\'t be a stranger!")
            return;
        } else if (!message) {
            setError("Please leave a message.")
            return;
        }
        setEmail("");
        setName("");
        setMessage("");
        setError("");
    };
    return (
        <div className="container" style={{ backgroundColor: "gray", padding: 50}}>
          <h1 style={{ color: "lightcyan" }}>Contact</h1>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name" style={{ color: "black" }}>
                  Your Name:
                </label>
                <input
                  value={name}
                  name="name"
                  onChange={correctInput}
                  type="text"
                  className="form-control"
                  placeholder="What's your name?"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email" style={{ color: "black" }}>
                  Email Address:
                </label>
                <input
                  value={email}
                  name="email"
                  onChange={correctInput}
                  type="email"
                  className="form-control"
                  placeholder="What is your email address?"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="message" style={{ color: "black" }}>
                  Message:
                </label>
                <textarea
                  value={message}
                  name="message"
                  onChange={correctInput}
                  type="text"
                  className="form-control"
                  placeholder="Leave a message!"
                />
              </div>
              {error && (
                <div>
                  <p className="error-text" style={{ color: "lightcyan" }}>
                    {error}
                  </p>
                </div>
              )}
              <div class="mt-5 mb-5">
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={submission}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      );
}
export default Contact;