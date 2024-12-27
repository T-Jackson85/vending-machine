import React from "react";
import { Link } from "react-router-dom";


function Chips() {
  return (
    <div className="snack">
      <h1>Chips</h1>
      <p>Crunchy and salty. A classic snack!</p>
      <Link to="/" className="back-link">
        Go back
      </Link>
    </div>
  );
}

export default Chips;
