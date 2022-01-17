import React from "react";

const Menu = (props) => {
  return (
    <article className="menu-item">
      <div>
        <img className="photo" src={props.img} alt={props.title} />
        <div className="item-info">
          <header>
            <h4>{props.title}</h4>
            <h5 className="price">${props.price}</h5>
          </header>
          <p className="item-text">{props.desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Menu;
