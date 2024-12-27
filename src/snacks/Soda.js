import React from "react";
import { Link } from "react-router-dom";


function Soda() {
  return (
    <div className="snack">
      <h1>Soda</h1>
      <p>Refreshing and bubbly. A thirst-quencher!</p>
      <Link to="/" className="back-link">
        Go back
      </Link>
    </div>
  );
}

export default Soda;
