import React from "react";
import "./menu.scss";
import bg from "./d.jpg";

const dailyMenu = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 10,
    imageUrl: "/assets/food/biryani.jpg",
  },
  {
    id: 2,
    name: "Haleem",
    price: 10,
imageUrl:"/assets/food/haleem.jpg",
  },
  {
    id: 3,
    name: "Rice Dal",
    price: 10,
    imageUrl: "/assets/food/dalrice.jpg",
  },
  {
    id: 4,
    name: "Halwa",
    price: 10,
    imageUrl: "/assets/food/halwa.jpg",
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="foodMenu bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="foodMenuContainer">
            <h1 className="foodMenuContainerHeader">
              What will you <span className="color-grey">Eat</span> today?
            </h1>
            <div className="foodMenu">
              {dailyMenu.map((item) => (
                <div className="foodMenuDetails" key={item.id}>
                  <div className="foodMenuImg">
                    <img src={item.imageUrl} alt={item.name} className="bgImg" />
                  </div>
                  <h1>{item.name}</h1>
                  <p>{`${item.price} $`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
