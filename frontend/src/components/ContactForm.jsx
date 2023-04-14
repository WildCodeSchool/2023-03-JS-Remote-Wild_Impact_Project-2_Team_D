import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contactForm" data-theme="light">
      <h3>Contactez nous</h3>
      <form action="">
        <div className="userNameEmail">
          <div className="userInfo">
            <label htmlFor="name">Nom et Prénom</label>
            <input className="inputField" type="text" name="name" />
          </div>
          <div className="userInfo">
            <label htmlFor="email">Email</label>
            <input className="inputField" type="email" name="email" />
          </div>
        </div>
        <div className="userInfo">
          <label htmlFor="message">Votre message</label>
          <textarea
            className="inputField"
            name="message"
            id="message"
            cols="30"
            rows="10"
          />
        </div>
        <button type="button" className="submitButton">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
