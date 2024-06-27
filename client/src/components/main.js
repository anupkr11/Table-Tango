// import React from "react";
import { Row, Col, Button } from "reactstrap";
import React from "react";
import Card from "./card";
import greekSalad from "../images/Salad.jpg";
import bruschetta from "../images/Bruchetta.svg";
import LemonDessert from "../images/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default props => {
  const specialsCards = specialsData.map((item) => {
    return (
    <Card
    key={item.title}
    image={item.img}
    title={item.title}
    price={item.price}
    description={item.description}
    props={props}
  />
      
    );
  });

  return (
    <main>
      <div>
       <Row noGutters className="text-center align-items-center pizza-cta">
         <Col>
         <h1>Welcome to Table Tango😋</h1>
          Everything from grill to plate smells and tastes so fantastic.
        <h3 style={{marginLeft:"100px", marginRight:"100px", marginTop:"50px"}}>
          Experience the best culinary delights with a blend of traditional and modern flavors. Our restaurant offers a unique dining experience with a variety of dishes made from the freshest ingredients. Join us for an unforgettable meal.
        </h3>
           <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/cafe.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      
    </div>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}



