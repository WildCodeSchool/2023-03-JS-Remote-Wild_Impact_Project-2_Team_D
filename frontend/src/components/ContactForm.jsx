import React, { useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_at6jcos",
        "contact_form",
        form.current,
        "dP5Z5bT63zWeqUZB1"
      )
      .then(() => {
        toast(`Merci ${name}, Aromalt te répondra prochainement !`);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert("il y a un problème");
      });
  };

  return (
    <div className="contactForm" data-theme="light">
      <div className="formContainer">
        <h3>Contactez nous</h3>
        <form className="ContactForm" ref={form} onSubmit={sendEmail}>
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
            <button type="submit" className="submitButton">
              Envoyer
            </button>
            <ToastContainer
              position="top-center"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
