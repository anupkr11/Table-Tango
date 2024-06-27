import React from "react";
import { Navbar } from "reactstrap";

const Footer = (props) => {
  return (
    <Navbar>
      <footer>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Address: 123 Test Street</li>
            <li>Email: order@Tabletango.com</li>
            <li>Phone: 032 329 5733</li>
          </ul>
        </div>
        <div>
          <p style={{ clear: "both", marginTop:"50px" }}>
            CRAFTED WITH ❤️ ON THE NORTH OF INDIA
          </p>
        </div>
        <div>
          <h3>Opening times</h3>
          <ul>
            <li>Monday - Friday: 9:00 - 22:00</li>
            <li>Saturday - Sunday: 10:00 - 24:00</li>
          </ul>
        </div>
      </footer>
    </Navbar>
  );
};

export default Footer;
