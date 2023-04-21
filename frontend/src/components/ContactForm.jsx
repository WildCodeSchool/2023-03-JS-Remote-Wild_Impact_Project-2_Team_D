import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(`Votre message a bien été envoyé ${name} !`);
  };

  return (
    <div className="contactForm" data-theme="light">
      <div className="formContainer">
        <h3>Contactez nous</h3>
        <form action="">
          <div className="userNameEmail">
            <div className="userInfo">
              <input
                className="inputFieldName"
                type="text"
                name="name"
                value={name}
                placeholder="Nom"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="userInfo">
              <input
                className="inputFieldEmail"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="userInfo">
            <textarea
              className="inputField"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="divSubmitButton">
            <button type="button" className="submitButton" onClick={onSubmit}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
