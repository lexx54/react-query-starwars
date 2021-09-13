import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <h1>Starwars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 1 && <People />}
        {page === 2 && <Planets />}
      </div>
    </div>
  );
}
