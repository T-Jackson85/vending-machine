import React from "react";
import { Link } from "react-router-dom";


function Candy() {
  return (
    <div className="snack">
      <h1>Candy</h1>
      <p>Sweet and delightful. A perfect treat!</p>
      <Link to="/" className="back-link">
        Go back
      </Link>
    </div>
  );
}

export default Candy;
