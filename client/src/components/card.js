import React from "react";
import { MdDeliveryDining } from "react-icons/md";


const Card = ({ image, title, price, description, props }) => {
  return (
    <div className="card">
      <img width="300px" src={image} alt="greek salad" />
      <div className="dish-info">
        <div className="title">
          <h3>{title}</h3>
          <p className="price">${price}</p>
        </div>
        <p>{description}</p>
        <span
          role="button"
          aria-label="On Click"
          className="specials-order-btn"
          onClick={()=>{
            props.setPage(1);
          }}
        >
          Reserve a Table
          <MdDeliveryDining
            size={30}
            style={{
              color: "#333",
              marginLeft: "15px",
              marginBottom: "-10px",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
