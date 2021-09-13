import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";

const fetchPlanets = async (page) =>
  await axios.get(`https://swapi.dev/api/planets/?page=${page}`);

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["planet", page], ({ queryKey }) =>
    fetchPlanets(queryKey[1])
  );
  console.log(data?.data);
  console.log(status);
  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}> Page 1 </button>
      <button onClick={() => setPage(2)}> Page 2 </button>
      <button onClick={() => setPage(3)}> Page 3 </button>
      {status === "error" && <p>Error Fetching data </p>}
      {status === "loading" && <p>Loading data </p>}
      {status === "success" && (
        <section>
          {data.data.results.map((planet) => {
            return <Planet planet={planet} key={planet.name} />;
          })}
        </section>
      )}
    </div>
  );
};

export default Planets;
