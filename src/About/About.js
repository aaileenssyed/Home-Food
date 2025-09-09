import React from "react";
import "./about.scss";
import bg from "./g.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="aboutContainer">
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="aboutContainerImg bgImg"
            ></div>
            <div className="aboutContainerDetails">
              <h1>
                <span className="colorGrey">Homemade</span> food,
                <span className="colorGrey"> delivered to</span> your door
              </h1>
              <p>
                Enjoy the comfort and warmth of home-cooked meals. Freshly prepared with care, just like family would make. Our dishes bring you the taste and nostalgia of home, so you can relax and savor delicious food any day. We deliver directly to your doorstep, making every meal convenient, healthy, and truly homely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
