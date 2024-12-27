import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./snacks/Chips";
import Candy from "./snacks/Candy";
import Soda from "./snacks/Soda";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <NavLink to="/" end className="nav-link">
            Vending Machine
          </NavLink>
          <NavLink to="/chips" className="nav-link">
            Chips
          </NavLink>
          <NavLink to="/candy" className="nav-link">
            Candy
          </NavLink>
          <NavLink to="/soda" className="nav-link">
            Soda
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
