import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="vending-machine">
      <h1>Welcome to the Vending Machine!</h1>
      <p>Select a snack:</p>
      <div className="snack-links">
        <Link to="/chips">Chips</Link>
        <Link to="/candy">Candy</Link>
        <Link to="/soda">Soda</Link>
      </div>
    </div>
  );
}

export default VendingMachine;
