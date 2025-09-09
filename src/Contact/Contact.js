import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1 className="contactHeader">Contact Me</h1>
        <a
          href="https://wa.me/12345678900"
          target="_blank"
          rel="noopener noreferrer"
          className="contactWhatsappBtn"
        >
          <button style={{
            fontSize: "1.5rem",
            padding: "1rem 2rem",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}>
            <AiOutlineWhatsApp style={{ marginRight: "0.5rem" }} />
            Connect via WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
