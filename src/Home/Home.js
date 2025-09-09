import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

import "./home.scss";

const Home = () => {
  const whatsappNumber = "919052148447"; // Replace with your WhatsApp number in international format

  return (
    <section id="home" className="home">
      <video
        className="homeVideoIntro"
        autoPlay
        muted
        loop
      >
        <source src="assets/home-intro.mp4" type="video/mp4" />
        Your browser is not supported
      </video>
      <div className="homeDetails">
        <div className="container">
          <div className="row">
            <div className="slogan" style={{ textAlign: "center" }}>
              <h1>Mumma's Meals</h1>
              <p style={{ fontSize: "1.8rem", margin: "1rem 0" }}>
                Homely fresh food
              </p>
              <a
                href="https://wa.me/919052148447?text=Hi%20I%20want%20to%20buy%20food%20from%20Mumma%27s%20Meals."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="orderButton"
                  style={{
                    backgroundColor: "#063100",
                    color: "white",
                    border: "none",
                    padding: "1rem 3rem",
                    fontSize: "1.6rem",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.7rem",
                  }}
                >
                  <AiOutlineWhatsApp /> Make the order now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
