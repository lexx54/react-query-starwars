import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";

const fetchPlanets = async () =>
  await axios.get("https://swapi.dev/api/planets/");

const Planets = () => {
  const { data, status } = useQuery("planet", fetchPlanets);
  console.log(data?.data);
  console.log(status);
  return (
    <div>
      <h2>Planets</h2>
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
