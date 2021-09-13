import React from "react";

const Navbar = ({ setPage }) => (
  <nav>
    <button onClick={() => setPage(2)}> Planets </button>
    <button onClick={() => setPage(1)}> People </button>
  </nav>
);

export default Navbar;
